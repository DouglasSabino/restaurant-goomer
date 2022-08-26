CREATE DATABASE IF NOT EXISTS goomer;

USE goomer;

CREATE TABLE restaurants (
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  photo VARCHAR(1000) NOT NULL,
  name VARCHAR(50) NOT NULL,
  addres VARCHAR(50) NOT NULL
); 

CREATE TABLE products(
  id INTEGER AUTO_INCREMENT PRIMARY KEY,
  photo VARCHAR(1000) NOT NULL,
  name VARCHAR(50) NOT NULL,
  price INTEGER NOT NULL,
  category VARCHAR(50) NOT NULL,
  id_restaurants INTEGER NOT NULL,
  FOREIGN KEY (id_restaurants) REFERENCES restaurants (id) ON DELETE CASCADE
);

insert into products (photo, name, price, category, id_restaurants) values ("https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png", "coca-cola",12, "bebidas",2)

insert into products (photo, name, price, category, id_restaurants) values ("https://t1.rg.ltmcdn.com/pt/posts/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg", "bolo de laranja",25, "doces",1);

insert into products (photo, name, price, category, id_restaurants) values ("https://super.abril.com.br/wp-content/uploads/2019/09/si_408_oraculo_chiclete.png?quality=90&strip=info&resize=850,567", "chiclete",7, "doces",2);

insert into products (photo, name, price, category, id_restaurants) values ("https://espacoliving.com/wp-content/uploads/2019/01/escova-de-dentes.jpg", "espova de dentes",3, "higiene",3);
