const db = require("../models");
const Tool = db.tool;
const Op = db.Sequelize.Op;

//THIS FILE IS CURRENTLY NOT BEING USED - THIS COULD BE REMOVED

// Create and Save a new tool
exports.create = (req, res) => {
  
};

// Retrieve all tools from the database..
exports.findAll = (req, res) => {

};

// Find a single tool with an id
exports.findOne = (req, res) => {
  
};

// Update a tool by the id in the request
exports.update = (req, res) => {
  
};

// Delete a tool with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all tools from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published tools
exports.findAllPublished = (req, res) => {
  
};


//==============experimental

const db = require("../models");
const Content = require('../models').Content;
const Idea = require('../models').Idea;


module.exports = {
  list(req, res) {
    return Content
      .findAll({
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then((contents) => res.status(200).send(contents))
      .catch((error) => { res.status(400).send(error); });
  },
getById(req, res) {
    return Content
      .findByPkv(req.params.id, {
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then((content) => {
        if (!content) {
          return res.status(404).send({
            message: 'Content Not Found',
          });
        }
        return res.status(200).send(content);
      })
      .catch((error) => res.status(400).send(error));
  },
add(req, res) {
    return Content
      .create({
        idea_id: req.body.idea_id,
        post: req.body.post,
        audio: req.body.audio,
      })
      .then((content) => res.status(201).send(content))
      .catch((error) => res.status(400).send(error));
  },
update(req, res) {
    return Content
      .findById(req.params.id, {
        include: [{
          model: Idea,
          as: 'idea'
        }],
      })
      .then(content => {
        if (!content) {
          return res.status(404).send({
            message: 'Content Not Found',
          });
        }
        return content
          .update({
            post: req.body.post || idea.post,
            audio: req.body.audio || idea.audio,
          })
          .then(() => res.status(200).send(content))
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
delete(req, res) {
    return Content
      .findByPk(req.params.id)
      .then(content => {
        if (!content) {
          return res.status(400).send({
            message: 'Content Not Found',
          });
        }
        return content
          .destroy()
          .then(() => res.status(204).send())
          .catch((error) => res.status(400).send(error));
      })
      .catch((error) => res.status(400).send(error));
  },
};
controllers/index.js
const idea = require('./idea');
const content = require('./content');
module.exports = {
  idea,
  content,
};