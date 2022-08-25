/* INSERÇÕES NA TABELA DOS RESTAURANTES */
INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/restaurant-logo-338/', 'restaurant 1', 'Rua Serra da Prata 480' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/minimalist-restaurant-logo-7/', 'restaurant 2', 'Rua ibitiranga 318' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/minimalist-restaurant-logo-7/', 'restaurant 3', 'Rua das Giestas 310' 
);

/* INSERÇÕES NA TABELA PRODUCTS */
INSERT INTO products (photo, name, price, category, id_restaurants) VALUES (
  "https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png", "coca-cola",12, "bebidas",2
);

INSERT INTO products (photo, name, price, category, id_restaurants) VALUES (
  "https://t1.rg.ltmcdn.com/pt/posts/9/4/3/bolo_comum_de_liquidificador_10349_600.jpg", "bolo de laranja",25, "doces",1
);

INSERT INTO products (photo, name, price, category, id_restaurants) VALUES (
  "https://super.abril.com.br/wp-content/uploads/2019/09/si_408_oraculo_chiclete.png?quality=90&strip=info&resize=850,567", "chiclete",7, "doces",2
);

INSERT INTO products (photo, name, price, category, id_restaurants) VALUES (
  "https://espacoliving.com/wp-content/uploads/2019/01/escova-de-dentes.jpg", "espova de dentes",3, "higiene",3
);
