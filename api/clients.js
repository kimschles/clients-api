const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllClients().then(clients => {
    res.json(clients);
  });
});

router.get('/:id', (req, res, next) => {
  queries.getOneClient(req.params.id).then(client => {
    if(client) {
      res.json(client);
    } else {
      next();
    }
  });
});

module.exports = router;
