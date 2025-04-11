import { Request, Response } from 'express';
import * as ProductRepository from '../repositories/ProductRepository';
import { ProductService } from '../services/productServices';
import { productDto } from '../dto/productDTO';

const productService = new ProductService();

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  const products = await productService.getAll();
  res.json(products);
};

export const getAllProduct = async (req: Request, res: Response): Promise<void> => {
  const id = req.params.id;
  const product = await productService.getById(Number(id));
  res.json(product);
}

export const createProduct = async (req: Request, res: Response): Promise<void> => {
  await productService.create(req.body);
  res.status(201).json({ message: 'product created' });
};

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
  const {nombre, descripcion, precio, stock, fecha_ingreso} = req.body;
  const id = req.params
  try{
    const producto = await productService.update(Number(id), ({nombre, descripcion, precio, stock, fecha_ingreso}) as productDto);
    res.status(200).json(producto);
  }catch(err){
    res.status(200).json({ error: err })
  }
};

export const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  const {id} = req.params;
  try{
    const resultado = await productService.delete(Number(id));
    if(resultado.affectedRows > 0){
      res.status(200).json({message: 'Producto eliminado correctamente'});
    }else{
      res.status(200).json({message: 'No se pudo eliminar el producto'});
    }
  }catch(err){
    res.status(200).json({error: err});
  }
}
