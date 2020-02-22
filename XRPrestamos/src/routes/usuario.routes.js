'use strict';
const express = require('express');
const router = express.Router();

const pool = require('../database');
const tabla = "usuario";
const primary_key = "id_usuario";

//->>>>>    LISTA         ------------------------------------------------------------------
router.get('/', async (req, res) => {
    try {
        const lista = await pool.query('SELECT * FROM ' + tabla);
        res.status(200).send({ [tabla]: lista });
    } catch (e) {
        res.status(400).send(e);
    }
});

//->>>>>    AGREGAR     --------------------------------------------------------------------
router.post('/', async (req, res) => {
    try {
        await pool.query('INSERT INTO ' + tabla + ' SET ?', [req.body]);
        res.status(200).send(
            {
                response: "¡Registro agregado!"
            }
        );
    } catch (e) {
        res.status(400).send(e);
    }
});

//->>>>>    EDITAR      --------------------------------------------------------------------
router.put('/', async (req, res) => {
    try {
        await pool.query('UPDATE ' + tabla + ' SET ? WHERE ' + primary_key + ' = ?', [req.body, req.body[primary_key]]);
        res.send(200, {
            renponse: [
                {
                    response: "¡Registro editado!"
                }
            ]
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

//->>>>>    ELIMINAR    --------------------------------------------------------------------
router.delete('/', async (req, res) => {
    try {
        await pool.query('DELETE FROM ' + tabla + ' WHERE ' + primary_key + ' = ?', [req.body[primary_key]]);
        res.send(200, {
            renponse: [
                {
                    response: "¡Registro eliminado!"
                }
            ]
        });
    } catch (e) {
        res.status(400).send(e);
    }
});

module.exports = router;