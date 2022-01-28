CREATE DATABASE  wfxzdrmc;

CREATE extension IF NOT EXISTS "uuid-ossp";

CREATE TABLE users(
    user_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_name varchar(64) NOT NULL,
    user_email varchar(64) NOT NULL,
    user_password varchar(16) NOT NULL,
    is_admin boolean DEFAULT false
);

CREATE TABLE categories(
    category_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    category_name varchar(64) NOT NULL
);

CREATE TABLE sub_categories(
    sub_category_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    sub_category_name varchar(64) NOT NULL,
    category_id uuid REFERENCES categories(category_id)
);

CREATE TABLE products(
    product_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_name varchar(64) NOT NULL,
    product_price varchar(64) NOT NULL,
    product_desc varchar(256),
    product_img text NOT NULL,
    category_id uuid REFERENCES categories(category_id),
    sub_category_id uuid REFERENCES sub_categories(sub_category_id)
);

CREATE TABLE cart(
    card_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(user_id),
    product_id uuid NOT NULL REFERENCES products(product_id),
    product_count int DEFAULT 1
);


CREATE TABLE orders(
    order_id uuid DEFAULT uuid_generate_v4() PRIMARY KEY,
    user_id uuid NOT NULL REFERENCES users(user_id),
    order_address text NOT NULL,
    created_at timestamptz DEFAULT current_timestamp
);

CREATE TABLE order_details(
    order_detail_id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
    product_id uuid NOT NULL REFERENCES products(product_id),
    product_count int,
    order_id uuid NOT NULL REFERENCES orders(order_id)
);

//admin
INSERT INTO users(user_name, user_email, user_password, is_admin) VALUES('sitora', 'sitora@gmail.com', 'sitora123', true);

