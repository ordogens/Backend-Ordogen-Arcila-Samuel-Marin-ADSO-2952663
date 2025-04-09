import { Request, Response } from 'express';
import * as ProductRepository from '../repositories/ProductRepository';
import { ProductService } from '../services/productServices';

const productService = new ProductService();

export const getAllProducts = async (req: Request, res: Response) => {
  const products = await productService.getAll();
  return  res.json(products);
};

export const getAllProduct = async (req: Request, res: Response) => {
  const id = req.params.id;
  const product = await productService.getById(Number(id));
  return res.json(product);
}

export const createProduct = async (req: Request, res: Response) => {
  await productService.create(req.body);
  return res.status(201).json({ message: 'product created' });
};

export const updateProduct = async (req: Request, res: Response) => {
  const {nombre, descripcion, precio, stock, fecha_ingreso} = req.body;
  const id = req.params
  try{
    const producto = await productService.update(Number(id), {nombre, descripcion, precio, stock, fecha_ingreso});
    return res.status(200).json(producto);
  }catch(err){
    return res.status(200).json({ error: err })
  }
};

