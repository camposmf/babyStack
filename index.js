// require nas dependências
const cors = require('cors');
const express = require('express');
const mongodb = require('mongodb').MongoClient;

// configurações iniciais
const server = express();
server.use(cors());

// variável global de db
let mongoConnection;

// conectar com banco de dados
mongodb.connect("mongodb+srv://devmonk:1234@cluster0.gl7vt.mongodb.net/myFirstDatabase", { useUnifiedTopology: true })
        .then(conn => {
          mongoConnection = conn;
          console.log('Database is connected...');
        })
        .catch(e => console.log(`ERROR: ${e}`));

// configurar rotas
server.get('/livros', async (req, res) => {
  // conectar com a tabela do banco de dados
  let db = mongoConnection.db('livros').collection('livros');

  // Selecionar todos os valores da tabela livros
  let books = await db.find().toArray();

  // mostrar os valores
  res.send(books);
});

// escutar servidor
server.listen(process.env.PORT, () => {
  console.log('Api is running...');
});