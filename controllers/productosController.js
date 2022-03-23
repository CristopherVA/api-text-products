const { request, response } = require('express');
const connection = require('../db/config');

/* -------------- OBTENER TODOS LOS PRODUCTOS -------------- */

const getProducts = (req = request, res = response) => {
    const conn = connection()
    const SQL = "SELECT * FROM productos"

    conn.query(SQL, (err, data) => {
        if (err) {
            conn.end();
            return res.status(404).json({
                msg: 'Producto no encontrados'
            })
        }

        return res.status(200).json({
            msg: 'Todos los produtos',
            data
        })
    })

    conn.end();
}

/* -------------- OBTENER PRODUCTO POR EL ID -------------- */

const getProductById = (req = request, res = response) => {
    const conn = connection()

    const { id } = req.params

    const SQL = `SELECT * FROM productos WHERE id=${id}`;
    conn.query(SQL, (err, data) => {

        if (err) {
            conn.end();
            return res.status(404).json({
                msg: `El Producto id:${id} no encontrados`
            })
        }

        res.status(200).json({
            msg: "Producto por ID",
            data
        })
    })
    conn.end()
}

/* -------------- AGREGAR PRODUCTO -------------- */

const addProduct = (req = request, res = response) => {
    const conn = connection()

    const { categoria_id, nombre, precio } = req.body;

    const SQL = `INSERT INTO productos VALUES(null, ${categoria_id}, ${conn.escape(nombre)}, ${precio})`
    conn.query(SQL, (err, data) => {

        if (err) {
            conn.end();
            return res.status(400).json({
                msg: 'Producto no encontrados'
            })
        }

        return res.status(201).json({
            msg: "Producto agregado",
            data
        })

    })

    conn.end()

}


/* -------------- ACTUALIZAR PRODUCTO -------------- */

const updateProduct = (req = request, res = response) => {

    const conn = connection()

    const { id } = req.params;
    const { categoria_id, nombre, precio } = req.body;

    const SQL = `UPDATE productos SET categoria_id=${categoria_id}, nombre=${conn.escape(nombre)}, precio=${precio} WHERE id=${id}`
    conn.query(SQL, (err, data) => {
        if (err) {
            conn.end();
            return res.status(400).json({
                msg: 'El producto no se pudo actualizar'
            })
        }

        return res.status(200).json({
            msg: 'Producto Actualizado',
            data
        })
    })
    conn.end()
}

/* -------------- ELIMINAR PRODUCTO -------------- */

const deleteProduct = (req = request, res = response) => {

    const conn = connection()
    const { id } = req.params;

    const SQL = `DELETE FROM productos WHERE id=${id}`

    conn.query(SQL, (err, data) => {
        if (err) {
            conn.end();
            return res.status(400).json({
                msg: 'El producto no se pudo eliminar'
            })
        }

        return res.status(200).json({
            msg: 'Producto eliminado',
            data
        })
    })
    conn.end()
}

module.exports = {
    getProducts,
    getProductById,
    addProduct,
    updateProduct,
    deleteProduct
}