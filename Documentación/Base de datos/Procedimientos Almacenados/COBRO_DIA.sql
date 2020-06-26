DROP PROCEDURE IF EXISTS COBRO_DIA;
 DELIMITER //
CREATE PROCEDURE COBRO_DIA(IN usuario VARCHAR(100))
	BEGIN
		-- a Persona
		-- b Credito
		-- c Abono
		-- d Cobro_dia

		-- CAMPOS -----------------------------------------------
		
		/* 
		
		1 - folio_credito
		2 - ine
		3 - alias
		4 - nombre (nombre completo)
		5 - monto_credito
		6 - monto_total
		7 - monto_pago
		8 - pagado
		9 - atrasos_no
		10 - atrasos_monto
		11 - extra_no
		12 - extra_monto
		13 - restante_no
		14 - restante_monto
		15 - restante_total
		16 - abono_hoy
		17 - id_tipo_pago
		18 - descripcion
		
		*/
		
		SELECT 
					d.folio_credito,
					a.ine,
					a.alias,
					CONCAT_WS(' ', a.nombre, a.apellido_paterno, a.apellido_materno) AS "nombre",
					b.monto_credito,
					b.monto_total,
					b.monto_pago,
					SUM(c.monto) AS "pagado",
					COUNT(IF(c.id_tipo_pago = 4,c.id_tipo_pago,NULL)) AS "atrasos_no",
					SUM(IF(c.id_tipo_pago = 4, b.monto_pago,IF(c.id_tipo_pago = 2, b.monto_pago - c.monto, 0))) AS "atrasos_monto",
					COUNT(IF(c.id_tipo_pago = 3,c.id_tipo_pago,NULL)) AS "extra_no",
					SUM(IF(c.id_tipo_pago = 3, c.monto - b.monto_pago, 0)) AS "extra_monto",
					(b.pagos_total - COUNT(c.id_abono)) AS "restante_no",
					((b.pagos_total - COUNT(c.id_abono))*b.monto_pago) AS "restante_monto",
					(b.monto_total - SUM(c.monto)) AS "restante_total",
					SUM(IF(c.fecha_abono = CURDATE(), c.monto, 0)) AS "abono_hoy",
					IF(c.id_tipo_pago != NULL, c.id_tipo_pago, 5) AS 		"id_tipo_pago",
					e.descripcion
				
		FROM credito b
		INNER JOIN cobro_dia AS d ON d.folio_credito = b.folio_credito
		INNER JOIN persona AS a ON a.ine = d.ine
		LEFT JOIN abono AS c ON c.folio_credito = d.folio_credito
		INNER JOIN tipo_pago AS e ON e.id_tipo_pago = IF(c.id_tipo_pago != NULL, c.id_tipo_pago, 5)

		WHERE d.id_usuario = usuario GROUP BY b.folio_credito ORDER BY a.alias;
	END //
DELIMITER ;