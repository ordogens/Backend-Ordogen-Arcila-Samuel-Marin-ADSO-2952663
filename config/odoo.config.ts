export const odooConfig = {
    url: process.env.ODOO_URL || 'http://localhost:8069',
    database: process.env.ODOO_DATABASE || 'odoo',
    username: process.env.ODOO_USERNAME || 'admin',
    password: process.env.ODOO_PASSWORD || 'admin',
    apiVersion: '18.1.4'
}; 