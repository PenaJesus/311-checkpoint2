create table users (
  id int primary key auto_increment,
  username varchar(100) not null unique,
  password varchar(500) not null
);

select username,id,password from users where username = 'jesus';

insert into ingredients(name,description) values ('flour', 'Flour is a powder made by grinding raw grains, roots, beans, nuts, or seeds. Flours are used to make many different foods. Cereal flour, particularly wheat flour, is the main ingredient of bread, which is a staple food for many cultures');

select * from users;

select * from ingredients;

create table ingredients (
  id int primary key auto_increment,
  name varchar(100) not null,
  description varchar(500) null
);

create table category_tags (
  id int primary key auto_increment,
  name varchar(100) not null,
  description varchar(500) not null
);

insert into category_tags(name,description) values ('difficult', 'difficult recipe');

create table recipes (
  recipeID int primary key auto_increment,
  name varchar(100) not null,
  description varchar(500) not null,
  cooking_time varchar(50) null,
  userID int ,
   foreign key (userID) references users(userID)
);

select * from recipes;

insert into recipes(name,description,cooking_time,userID) values ('scrambled eggs', 'Scrambled eggs are a dish made from eggs stirred, whipped or beaten together while being gently heated, typically with salt, butter, oil and sometimes other ingredients.','10 min', 1);


select * from category_tags;

create table recipe_category (
ID int primary key auto_increment,
recipeID int,
categoryID int,
foreign key (recipeID) references recipes(recipeID),
foreign key (categoryID) references category_tags(categoryID)
);

insert into recipe_category(recipeID,categoryID,name) values (3,1,'difficult');
select * from recipe_category;