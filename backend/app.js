const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const routes = require('./routes/routes');
const db = require('./config/db.json');
const path = require('path');
const port = db.port;
const host = db.host;
const app = express();

app.use(cors({ credentials: true, origin: 'http://localhost:5173' }));

// Rest of the middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api/imagenes', express.static(path.join(__dirname, 'imagenes')));
app.use('/api', routes);

app.listen(port, () => {
  console.log(`Server listening on ${host}:${port}`);
});
