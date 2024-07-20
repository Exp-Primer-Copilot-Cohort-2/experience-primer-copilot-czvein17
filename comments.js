// Create web server
// Create a new comment
// Get all comments
// Get a single comment
// Update a comment
// Delete a comment

var express = require('express');
var router = express.Router();
var Comment = require('../models/comment');

// Create a new comment
router.post('/', (req, res) => {
  var comment = new Comment(req.body);
  comment.save((err, comment) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(201).send(comment);
    }
  });
});

// Get all comments
router.get('/', (req, res) => {
  Comment.find((err, comments) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(comments);
    }
  });
});

// Get a single comment
router.get('/:id', (req, res) => {
  Comment.findById(req.params.id, (err, comment) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(comment);
    }
  });
});

// Update a comment
router.put('/:id', (req, res) => {
  Comment.findByIdAndUpdate(req.params.id, req.body, (err, comment) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(200).send(comment);
    }
  });
});

// Delete a comment
router.delete('/:id', (req, res) => {
  Comment.findByIdAndRemove(req.params.id, (err, comment) => {
    if (err) {
      res.status(400).send(err);
    } else {
      res.status(204).send();
    }
  });
});

module.exports = router;