const express = require('express');
const path = require('path');
const routes = require('./routes/api/');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use("/api",routes)

// GET MAIN HTML PAGE
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/notes.html'))
);

// GET ROUTE FOR CATCH ALL THE MISROUTES SINCE WE DONT GOT 404 ERROR PAGE 
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
