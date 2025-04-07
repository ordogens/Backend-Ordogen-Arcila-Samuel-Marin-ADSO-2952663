import { Router } from 'express';
import { OdooController } from '../controllers/odoo.controller';

const router = Router();
const odooController = new OdooController();

// Rutas para Partners
router.post('/partners', odooController.createPartner.bind(odooController));
router.get('/partners', odooController.getPartners.bind(odooController));
router.get('/partners/:id', odooController.getPartner.bind(odooController));

// Rutas para Productos
router.post('/products', odooController.createProduct.bind(odooController));
router.get('/products', odooController.getProducts.bind(odooController));
router.get('/products/:id', odooController.getProduct.bind(odooController));

// Rutas para Órdenes de Venta
router.post('/sale-orders', odooController.createSaleOrder.bind(odooController));
router.get('/sale-orders', odooController.getSaleOrders.bind(odooController));
router.get('/sale-orders/:id', odooController.getSaleOrder.bind(odooController));

export default router; 