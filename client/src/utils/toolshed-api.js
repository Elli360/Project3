/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";

export default {
  // Gets all books
  /*getTools: function () {
    return axios.get("/api/tools");
  },*/
  // Gets the book with the given id
  getCategories: function (id) {
    return axios.get("/api/category/");
  }
};