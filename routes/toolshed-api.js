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

  //GET A SINGLE MENU TOOL
  app.get("/api/tools/:id", (req, res) => {
    db.tool
    .findOne({
      where: {
        id: req.params.id
      },
      include: [
        {
          model: db.category,
          nested: true,
          attributes: ["name", "description"]
        }
      ]
    })
      .then(item => {
        res.json(item);
      });
  });


  //CATEGORIES :
      
  //ADD A CATEGORY TO THE SYSTEM
      app.post("/api/category/add", (req, res) => {
        db.category.create(req.body).then(item => {
          res.json(item);
        });
      });

        //GET ALL TOOLS
  app.get("/api/category", (req, res) => {
    db.category.findAll({ 
    }).then(items => {
      res.json(items);
    });
  });

    //GET A SINGLE MENU CATEGORY
    app.get("/api/category/:id", (req, res) => {
      db.category
      .findOne({
        where: {
          id: req.params.id
        },
        include: [
          {
            model: db.tool,
            nested: true,
            attributes: ["name", "description","price"]
          }
        ]
      })
        .then(item => {
          res.json(item);
        });
    });
  
  

 /*

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
