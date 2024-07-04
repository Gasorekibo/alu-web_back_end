-- Create Database and Insert initial Data
CREATE TABLE IF NOT EXISTS user (
    id int AUTOINCREMENT NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    name VARCHAR(255),
    PRIMARY KEY (id)
);