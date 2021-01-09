// Requiring our models and passport as we've configured it
const db = require("../models");
module.exports = function(app) {
  //GET ALL TOOLS
  app.get("/api/tools", (req, res) => {
    db.tool.findAll({}).then(items => {
      res.json(items);
    });
  });

   //ADD A TOOL TO THE SYSTEM
   app.post("/api/tools/add", (req, res) => {
    db.tool.create(req.body).then(item => {
      res.json(item);
    });
  });

  /*
  //GET A SINGLE MENU ITEM
  app.get("/api/tools/:id", (req, res) => {
    db.tools
      .findOne({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

 

  //UPDATE AN ITEM
  app.put("/api/tools/:id/update", (req, res) => {
    db.tools
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //DELETE AN ITEM FROM THE MENU
  app.delete("/api/tools/:id/delete", (req, res) => {
    db.tools
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });
  

  
  app.post("/api/menuitems", (req, res) => {
    db.menuItem.create(req.body).then(item => {
      res.json(item);
    });
  });

  */
  

};
