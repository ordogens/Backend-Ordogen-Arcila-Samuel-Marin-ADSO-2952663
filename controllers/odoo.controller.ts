import { Request, Response } from 'express';
import { OdooService } from '../services/odoo.service';
import { OdooPartnerDto, OdooProductDto, OdooSaleOrderDto } from '../dto/odoo.dto';

export class OdooController {
    private odooService: OdooService;

    constructor() {
        this.odooService = new OdooService();
    }

    async createPartner(req: Request, res: Response) {
        try {
            const partnerData: OdooPartnerDto = req.body;
            // Implementar creación de partner
            res.status(201).json({ message: 'Partner created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error creating partner' });
        }
    }

    async createProduct(req: Request, res: Response) {
        try {
            const productData: OdooProductDto = req.body;
            // Implementar creación de producto
            res.status(201).json({ message: 'Product created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error creating product' });
        }
    }

    async createSaleOrder(req: Request, res: Response) {
        try {
            const orderData: OdooSaleOrderDto = req.body;
            // Implementar creación de orden de venta
            res.status(201).json({ message: 'Sale order created successfully' });
        } catch (error) {
            res.status(500).json({ error: 'Error creating sale order' });
        }
    }
} 