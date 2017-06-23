const express = require('express');
const router = express.Router();
const queries = require('../db/queries');

router.get('/', (req, res) => {
  queries.getAllClients().then(clients => {
    res.json(clients);
  });
});

module.exports = router;
