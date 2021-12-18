// Requiring our models and passport as we've configured it
const db = require("../models");
module.exports = function (app) {

  //---------------------USER --------------------//   
  //GET A SINGLE USER
  app.get("/api/user/:uid", (req, res) => {
    db.User
      .findOne({
        where: {
          id: req.params.uid
        },
        /*include: [
          {
            model: db.toolbox,
            nested: true,
            //attributes: ["id","name", "description","price","available"]
          }
        ]*/
      })
      .then(item => {
        res.json(item);
      });
  });

  //---------------------TOOLS --------------------//   
  //GET ALL TOOLS
  app.get("/api/tools", (req, res) => {
    db.tool.findAll({
      include: [{
        model: db.category,
        nested: true,
        attributes: ["name","id"]
      }]
    }).then(items => {
      res.json(items);
    });
  });

  //ADD A TOOL TO THE SYSTEM
  app.post("/api/tools", (req, res) => {
    db.tool.create(req.body).then(item => {
      res.json(item);
    });
  });

  //UPDATE A TOOL:
  app.put("/api/tools/:id", (req, res) => {
    db.tool
      .update(req.body, {
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

//    for (let allId = 0; allId < 14; allId++) {

// console.log(`Inside: ${allId}`);

//   app.put(`/api/tools/:${allId}`, (req, res) => {
//     db.tool
//       .update(req.body)
//       .then(item => {
//         res.json(item);
//       });
//   });};

  //GET A SINGLE  TOOL
  app.get("/api/tools/:id", (req, res) => {
    db.tool
      .findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: db.category,
          nested: true,
          attributes: ["name", "description"]
        }]
      })
      .then(item => {
        res.json(item);
      });
  });

  //DELETE A TOOL 
  app.delete("/api/tools/:id/delete", (req, res) => {
    db.tool
      .destroy({
        where: {
          id: req.params.id
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //GET A SPECIFIC TOOL TOOLS
  app.post("/api/tools/find", (req, res) => {
    
    const {Op} = require("sequelize");
    db.tool.findAll({

      where :{ [Op.or]: [
        {
          name: {
            [Op.like]:  `%` + req.body.name + `%`       }
        },
        {
          description: {
            [Op.like]: req.body.description
          }
        }
      ]},
    
      include: [{
        model: db.category,
        nested: true,
        attributes: ["name", "id"]
        //where : {name : {[Op.like]: req.body.category}}
      }]

    }).then(items => {
      res.json(items);
    });
  });

  app.get("/api/tools/status/:status", (req, res) => {
    //HAVE TO BOOLEANIZE THE STATUS
    var status ;
    if (req.params.status === 'true') {
      status = true;
    } else {
      status = false;
    }
    db.tool
      .findAll({
        where: {
          available: status
        }
      })
      .then(item => {
        res.json(item);
      });
  });

  //---------------------CATEGORIES --------------------//   
  //GET ALL CATEGORIES
  app.get("/api/category", (req, res) => {
    db.category.findAll({
      include: [{
        model: db.tool,
        nested: true,
        attributes: ["id", "name", "description", "price", "available", "borrowed","size"]
      }]
    }).then(items => {
      res.json(items);
    });
  });

  //ADD A CATEGORY TO THE SYSTEM
  app.post("/api/category/add", (req, res) => {
    db.category.create(req.body).then(item => {
      res.json(item);
    });
  });


  //GET A SINGLE MENU CATEGORY
  app.get("/api/category/:id", (req, res) => {
    db.category
      .findOne({
        where: {
          id: req.params.id
        },
        include: [{
          model: db.tool,
          nested: true,
          attributes: ["id", "name", "description", "price", "available", "borrowed"]
        }]
      })
      .then(item => {
        res.json(item);
      });
  });


  //---------------------TOOLBOXES --------------------//   

  //CREATE A USER TOOLBOX
  app.post("/api/user/:uid/toolbox/add", (req, res) => {
    db.toolbox
      .create({
        UserId: req.params.uid
      })
      .then(item => {
        res.json(item);
      });
  });


  //SHOW ALL TOOLBOXES OF A USER
  app.get("/api/user/:id/toolboxes", (req, res) => {
    db.toolbox
      .findAll({
        where: {
          UserId: req.params.id
        },
        /*include: [
          {
            model: db.toolbox,
            nested: true,
            //attributes: ["id","name","description"]
          }
        ]*/
      })
      .then(item => {
        res.json(item);
      });
  });

  //ADDING A DO NOTHING ROUTE
  app.get("/api/user/:id/", (req, res) => {
    db.User
      .findById({
        where: {
          UserId: req.params.id
        },
        /*include: [
          {
            model: db.toolbox,
            nested: true,
            //attributes: ["id","name","description"]
          }
        ]*/
      })
      .then(item => {
        res.json(item);
      });
  });

  //SHOW A SPECIFIC TOOLBOX (BY USER + ID)
  app.get("/api/user/:uid/toolboxes/:id", (req, res) => {
    db.toolbox
      .findOne({
        where: {
          UserId: req.params.uid,
          id: req.params.id
        },

        include: [{
          model: db.rental,
          nested: true,
          attributes: ["id"],
          include: [{
            model: db.tool,
            attributes: ["id", "name", "description", "price"],
            include:[{model:db.category,attributes:["name"]}]
          }]

        }]
      })
      .then(item => {
        res.json(item);
      });
  });

    //SHOW A SPECIFIC TOOLBOX (IGNORING USER)
    app.get("/api/toolboxes/:id", (req, res) => {
      db.toolbox
        .findOne({
          where: {
            id: req.params.id
          },
  
          include: [{
            model: db.rental,
            nested: true,
            attributes: ["id"],
            include: [{
              model: db.tool,
              attributes: ["id", "name", "description", "price"],
              include:[{model:db.category,attributes:["name"]}]
            }]
  
          }]
        })
        .then(item => {
          res.json(item);
        });
    });

  //ADD ITEM TO A TOOLBOX
  app.post("/api/user/:uid/toolboxes/:id", (req, res) => {
    db.rental
      .create({
        toolboxId: req.params.id,
        toolId: req.body.toolId
      })
      .then(item => {
        res.json(item);
      });
  });

  //---------------------UNUSED --------------------//   
  

    /*

        //GET A SINGLE MENU CATEGORY
        app.get("/api/rental/:id", (req, res) => {
          db.userRental
          .findOne({
            where: {
              id: req.params.id
            },
            include: [
              {
                model: db.User,
                nested: true,
                attributes: ["id","email"]
              },
              {
                model: db.tool,
                nested: true,
                attributes: ["id","name","description"]
              }
            ]
          })
            .then(item => {
              res.json(item);
            });
        });
      
      */


};
