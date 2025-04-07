export interface OdooPartnerDto {
    name: string;
    email?: string;
    phone?: string;
    vat?: string;
    // Otros campos del modelo res.partner
}

export interface OdooProductDto {
    name: string;
    list_price: number;
    standard_price: number;
    type: 'product' | 'service' | 'consu';
    // Otros campos del modelo product.product
}

export interface OdooSaleOrderDto {
    partner_id: number;
    order_line: OdooSaleOrderLineDto[];
    // Otros campos del modelo sale.order
}

export interface OdooSaleOrderLineDto {
    product_id: number;
    product_uom_qty: number;
    price_unit: number;
    // Otros campos del modelo sale.order.line
} 