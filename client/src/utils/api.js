import axios from "axios";

//Assign object to a variable before exporting as module default (not really necessary but fix when have time)
//  const API = ()=>( {
  export default {
  // Gets all tool
  getTools: function () {
    return axios.get("/api/tools");
  },
  // Gets the tool with the given id
  getCategories: function (id) {
    return axios.get("/api/category/");
  },
  // Deletes the tool with the given id
  deleteTool: function (id) {
    return axios.delete("/api/tools/" + id +"/delete");
  },

  // Saves a tool to the database
  saveTool: function (toolData) {
    return axios.post("/api/tools", toolData);
  },


  // Updates the tool with the given id
  updateTool: function (id, toolData) {
    return axios.put("/api/tools/" + id, toolData);
  },
  };
// });

// export default API;