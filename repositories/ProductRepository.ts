import db from '../config/config-db';
import { productDto } from '../dto/productDTO';
import { ResultSetHeader } from 'mysql2';

export class ProductRepository {
    getProducts = async () => {
        const [rows]: any = await db.query('SELECT * FROM productos');
        return rows;
    };
}