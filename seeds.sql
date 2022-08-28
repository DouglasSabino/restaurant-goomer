/* INSERÇÕES NA TABELA DOS RESTAURANTES */
INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.pracadopapa.com.br/wp-content/uploads/2022/01/Melhores-Restaurantes-de-Belo-Horizonte-1360x765.jpg', 
  'restaurant 1', 
  'Rua Serra da Prata 480' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://www.melhoresdestinos.com.br/wp-content/uploads/2021/07/melhores-restaurantes-mundo-2021-capa-1536x805.jpg', 
  'restaurant 2', 
  'Rua ibitiranga 318' 
);

INSERT INTO restaurants (photo, name, addres) VALUES (
  'https://viagemegastronomia.cnnbrasil.com.br/wp-content/uploads/sites/5/2021/06/botanikafe-butanta.jpg?w=876&h=484&crop=1', 
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
  'https://img.itdg.com.br/tdg/images/recipes/000/173/560/167511/167511_original.jpg?mode=crop&width=710&height=400', 
  'Torda DE limão',
  3,
  'doce',
  2
);

INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (
  'https://s2.glbimg.com/aKlGFJonIoKIyqBY8cn9oZtsFY0=/0x0:320x213/984x0/smart/filters:strip_icc()/s.glbimg.com/po/rc/media/2012/06/13/17/14/58/420/pave_crocante_de_doce_de_leite.jpg', 
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

INSERT INTO goomer.products (photo, name, price, category, id_restaurant) VALUES (
  'https://static.clubedaanamariabraga.com.br/wp-content/uploads/2021/04/frango-assado-em-pe-1024x576.jpg?x41527', 
  'Frango',
  15,
  'pratos principais',
  3
);