/* eslint-disable import/no-anonymous-default-export */

import axios from "axios";

//Assign object to a variable before exporting as module default (not really necessary but fix when have time)
    // const api = () => ( {
  export default {
  // Gets all tool
  getTools: function () {
    return axios.get("/api/tools");
  },
  // Gets the tool with the given id
  getCategories: function (id) {
    return axios.get("/api/category/");
  },
  getCategories3: function (id) {
    return axios.get("/api/category/3");
  },
  // getAvailable: function (){
  //   return axios.get("/api/available/");
  // },
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
  
