import { ProductRepository } from '../repositories/ProductRepository';
import { productDto } from '../dto/productDTO';

const productRepository = new ProductRepository();

export class ProductService {
  getAll() {
    return productRepository.getProducts();
  }

  getById(id: number) {
    return productRepository.getProductById(id);
  }

  create(product: productDto) {
    return productRepository.createProduct(product);
  }

  update(id: number, product: productDto) {
    return productRepository.updateProduct(id, product);
  }

  delete(id: number) {
    return productRepository.deleteProduct(id);
  }
}