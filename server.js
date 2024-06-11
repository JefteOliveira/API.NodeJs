   const express = require('express');
   const app = express();
   const port = 3000;
   const filmesRouter = require('./routes/filmes');
   const atoresRouter = require('./routes/atores');

    app.use(express.json());
    app.use('/filmes', filmesRouter);
     app.use('/atores', atoresRouter);

      app.listen(port, () => {
      console.log(`Servidor rodando em http://localhost:${port}`);
});
