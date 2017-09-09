# Todo-List

A REST API built with Node, Express and Mongo db.

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

### dev-depencencies

* [nodemon](https://nodemon.io/) - automatically reload node server, however not necessary.

### Installing

* Clone the repository

```sh
git clone https://github.com/NibeshSdev/todolist.git
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

Then use the following URLs for fetching, inserting, updating and deleting data.

### URLs available

* list_all_tasks - **GET** [http://localhost:3000/tasks](http://localhost:3000/tasks)

* create_a_task - **POST** [http://localhost:3000/tasks](http://localhost:3000/tasks)

* read_a_task - **GET** [http://localhost:3000/tasks](http://localhost:3000/tasks/{taskId})

* update_a_task - **PUT** [http://localhost:3000/tasks](http://localhost:3000/tasks/{taskId})

* delete_a_task - **DELETE** [http://localhost:3000/tasks](http://localhost:3000/tasks/{taskId})

## Authors

* **Nibesh Shankhadev**
