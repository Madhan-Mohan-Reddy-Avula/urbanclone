import Database from 'better-sqlite3';

const db = new Database('urbanpro.db');

// Initialize database tables
db.exec(`
  CREATE TABLE IF NOT EXISTS customers (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    fullName TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL,
    phone TEXT NOT NULL,
    password TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
  );

  CREATE TABLE IF NOT EXISTS service_requests (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    customer_id INTEGER NOT NULL,
    service_type TEXT NOT NULL,
    description TEXT,
    location TEXT NOT NULL,
    status TEXT DEFAULT 'pending',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (customer_id) REFERENCES customers (id)
  );
`);

export interface Customer {
  id?: number;
  fullName: string;
  email: string;
  phone: string;
  password: string;
}

export interface ServiceRequest {
  id?: number;
  customer_id: number;
  service_type: string;
  description?: string;
  location: string;
  status?: string;
}

export const customerDb = {
  create: db.prepare(`
    INSERT INTO customers (fullName, email, phone, password)
    VALUES (@fullName, @email, @phone, @password)
  `),

  findByEmail: db.prepare(`
    SELECT * FROM customers WHERE email = ?
  `),

  findById: db.prepare(`
    SELECT * FROM customers WHERE id = ?
  `),

  update: db.prepare(`
    UPDATE customers 
    SET fullName = @fullName, phone = @phone
    WHERE id = @id
  `)
};

export const serviceRequestDb = {
  create: db.prepare(`
    INSERT INTO service_requests (customer_id, service_type, description, location)
    VALUES (@customer_id, @service_type, @description, @location)
  `),

  findByCustomerId: db.prepare(`
    SELECT * FROM service_requests WHERE customer_id = ?
  `),

  updateStatus: db.prepare(`
    UPDATE service_requests 
    SET status = @status
    WHERE id = @id
  `)
};

export default db;