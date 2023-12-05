npm install express
  const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('¡Hola, mundo!');
});

app.listen(port, () => {
    console.log(`La aplicación está corriendo en http://localhost:${port}`);
});  

node app.js


npm install -g create-vite

npm install nodemon --save-dev
  
{
  "scripts": {
    "dev": "concurrently \"npm run backend\" \"npm run frontend\"",
    "backend": "nodemon backend/app.js",
    "frontend": "cd frontend && npm run dev"
    // ...
  },
  // ...
}  

npm install concurrently --save-dev

