/* INSERÇÕES NA TABELA DOS RESTAURANTES */
INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/restaurant-logo-338/', 
  'restaurant 1', 
  'Rua Serra da Prata 480' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/minimalist-restaurant-logo-7/', 
  'restaurant 2', 
  'Rua ibitiranga 318' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/minimalist-restaurant-logo-7/', 
  'restaurant 3', 
  'Rua das Giestas 310' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.creativefabrica.com/pt/product/minimalist-restaurant-logo-7/', 
  'restaurant 4', 
  'Rua sem nome' 
);

/* INSERÇÕES NA TABELA PRODUCTS */
INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (
  'https://github.com/goomerdev/job-dev-backend-interview/raw/master/media/logo-azul.png', 
  'Torda de Chocolate',
  3,
  'doce',
  2
);

INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (
  'https://espacoliving.com/wp-content/uploads/2019/01/escova-de-dentes.jpg', 
  'Torda de Chocolate',
  3,
  'doce',
  1
);

INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (
  'https://super.abril.com.br/wp-content/uploads/2019/09/si_408_oraculo_chiclete.png?quality=90&strip=info&resize=850,567', 
  'chiclete',
  5,
  'candle',
  3
);