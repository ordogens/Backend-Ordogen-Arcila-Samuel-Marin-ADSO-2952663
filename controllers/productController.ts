import { Request, Response } from 'express';
// import * as ProductRepository from '../repositories/ProductRepository';
import { ProductService } from '../services/productServices';

const productService = new ProductService();

export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
  const products = await productService.getAll();
  res.json(products);
};