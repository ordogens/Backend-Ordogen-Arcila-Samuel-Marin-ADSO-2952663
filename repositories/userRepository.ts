import db from '../config/config-db';
import { userDto } from '../dto/userDTO';
import { ResultSetHeader } from 'mysql2';

export class UserRepository {
    getUsers = async () => {
        const [rows]: any = await db.query('SELECT * FROM usuarios');
        return rows;
    }

    getUserById = async (id: number) => {
        const [rows]: any = await db.query('SELECT * FROM usuarios WHERE id = ?', [id]);
        return rows[0];
    }

    getUserByCorreo = async (correo: string) => {
        const [rows]: any = await db.query('SELECT * FROM usuarios WHERE correo = ?', [correo]);
        return rows[0];
    }

    createUser = async (user: userDto) => {
        const {nombre,correo,contraseña, fecha_creacion} = user;
        const [result]: any = await db.query('INSERT INTO usuarios (nombre,apellido,email,telefono,direccion) VALUES (?,?,?,?,?)', [nombre,correo,contraseña, fecha_creacion]);
        return result.insertId;
    }

    updateUser = async (id: number, user: userDto) => {
        const query = 'update usuarios set nombre = ?, correo = ?, contraseña = ?, fecha_creacion = ? where id = ?';
        const values = [
            user.nombre,
            user.correo,
            user.contraseña,
            user.fecha_creacion,
            id 
        ]
        const [result]: any = await db.query(query, values);
        return result.affectedRows > 0
    }

    deleteUser = async (id: number): Promise<ResultSetHeader> => {
        const query = 'DELETE FROM practitioners WHERE id = ?';
        const [result] = await db.execute<ResultSetHeader>(query, [id]);
        return result;
    };

  
}


