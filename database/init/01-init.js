db = db.getSiblingDB('mern_ecommerce');

db.createCollection('categories');
db.createCollection('brands');
db.createCollection('products');
db.createCollection('users');

db.categories.createIndex({ slug: 1 }, { unique: true });
db.brands.createIndex({ slug: 1 }, { unique: true });
db.products.createIndex({ slug: 1 }, { unique: true });

db.products.createIndex({ isActive: 1 });
db.products.createIndex({ brand: 1 });
db.products.createIndex({ category: 1 });
