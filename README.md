Express API to Billify App.
==================================

- ES6 support via [babel](https://babeljs.io)
- REST resources as middleware via [resource-router-middleware](https://github.com/developit/resource-router-middleware)
- CORS support via [cors](https://github.com/troygoode/node-cors)
- Body Parsing via [body-parser](https://github.com/expressjs/body-parser)

This server was made with @developit/express-es6-rest-api

Getting Started
---------------

```sh

# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

# Start production server:
PORT=8080 npm start

```
Docker Support
------
```sh
cd billify-api

# Build your docker
docker build -t es6/api-service .
#            ^      ^           ^
#          tag  tag name      Dockerfile location

# run your docker
docker run -p 8080:8080 es6/api-service
#                 ^            ^
#          bind the port    container tag
#          to your host
#          machine port   

```

License
-------
MIT
