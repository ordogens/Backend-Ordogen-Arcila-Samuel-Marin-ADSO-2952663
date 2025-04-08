import { ProductRepository } from '../repositories/ProductRepository';
// import { PractitionerDto } from '../dto/PractitionerDto';

const productRepository = new ProductRepository();

export class ProductService {
  getAll() {
    return productRepository.getProducts();
  }
}