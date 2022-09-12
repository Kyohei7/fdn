## Project created using Framework Express JS, Database Postgresql, Sequelize for create migration and seeder and Testing use Mocha, Chai and Chai-Http

### Installation
after clone this project. you can install all dependencies with
    
    npm install

create file .env and configure from reference to .env.test

create database in your local

after that you can run script migrate for generate coloum in your database

    npx sequelize-cli db:migrate

and you can run script seeder for generate dummy data

    npx sequelize-cli db:seed:all

run your project use script

    npm run dev

for run test use script

    npm run test

### running the route

    /table -> Get Data Table
    /table-pivot -> Get Data Table Privot
    /twitter -> Get Data User Tweet