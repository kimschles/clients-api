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

router.post('/', (req, res, next) => {
  queries.createClient(req.body).then(clients => {
    res.json(clients[0])
  });
});

router.delete('/:id', (req, res) => {
  queries.deleteClient(req.params.id).then(() => {
    res.json({
      deleted: true
    });
  });
});

module.exports = router;
