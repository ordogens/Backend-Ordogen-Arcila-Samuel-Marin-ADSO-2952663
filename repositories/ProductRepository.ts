import db from '../config/config-db';
import { productDto } from '../dto/productDTO';
import { ResultSetHeader } from 'mysql2';

export class ProductRepository {
    getProducts = async () => {
        const [rows]: any = await db.query('SELECT * FROM productos');
        return rows;
    };

    getProductById = async (id: number) => {
        const [rows]: any = await db.query('SELECT * FROM productos WHERE id = ?', [id]);
        return rows[0];
    }

    createProduct = async (product: productDto) => {
        const {nombre,descripcion,precio,stock,fecha_ingreso} = product;
        const [result]: any = await db.query('INSERT INTO productos (nombre,descripcion,precio,stock,fecha_ingreso) VALUES (?,?,?,?,?)', [nombre,descripcion,precio,stock,fecha_ingreso]);
        return result.insertId;
    }

    updateProduct = async (id: number, product: productDto) => {
        const {nombre,descripcion,precio,stock,fecha_ingreso} = product;
        const [result]: any = await db.query('UPDATE productos SET nombre = ?, descripcion = ?, precio = ?, stock = ?, fecha_ingreso = ? WHERE id = ?', [nombre,descripcion,precio,stock,fecha_ingreso,id]);
        return result.affectedRows;
    }

    deleteProduct = async (id: number): Promise<ResultSetHeader> => {
        const query = 'DELETE FROM practitioners WHERE id = ?';
        const [result] = await db.execute<ResultSetHeader>(query, [id]);
        return result;
    };

}