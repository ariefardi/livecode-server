# livecode-server
npm install to install dependencies

npm start to running server

API POINT

GET http://localhost:3000/articles 
    get all articles
POST http://localhost:3000/articles
    post articles

GET http://localhost:3000/articles/:id
    get articles by ID

GET http://localhost:3000/articles/:author
    get articles by author
GET http://localhost:3000/articles/:category
    get articles by category

DELETE http://localhost:3000/articles/delete/:id
    delete article by id
PUT http://localhost:3000/articles/update/:id
    update article by id