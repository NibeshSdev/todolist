# Todo-List JWT Auth

A REST API built with Node, Express and Mongo-db with JWT Authentication.

## Getting Started

These instruction will guide you to get a copy of the project and running on your local machine for development.

### Prerequisities

* [Node.js](https://nodejs.org/) - install from [node.js website](https://nodejs.org/)
* [npm](https://www.npmjs.org/) - comes with Node.js
* [Mongo db](https://www.mongodb.com/)

### Dependencies

* [express](http://expressjs.com/) - a web application framework for node.js
* [mongoose](http://mongoosejs.com/) -  a MongoDB ODM (the NoSQL equivalent of an ORM) for Node
* body-parser - parse incoming request bodies in a middleware before your handlers
* bcryptjs - password hashing and encoding
* jsonwebtoken - JWT tokens for Authentication

### dev-depencencies

* [nodemon](https://nodemon.io/) - automatically reload node server, however not necessary.

### Installing

* Clone the authentication branch

```sh
git clone -b authentication --single-branch https://github.com/NibeshSdev/todolist.git
```

* Install all dependencies

```sh
npm install
```

* Run the mongo server

You need to install mongo globally to use the following command.

```sh
mongod
```

Otherwise go to mongo installation directory > bin > mongod.exe

* Run the application

```sh
npm run start
```


### Using POSTMAN to testing

Authentication is only in  **POST** [http://localhost:3000/tasks](http://localhost:3000/tasks)

*

## Authors

* **Nibesh Shankhadev**
