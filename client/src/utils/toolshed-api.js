import axios from "axios";

export default {
  // Gets all books
  getTools: function () {
    return axios.get("/api/tools");
  },
  // Gets the book with the given id
  getCategories: function (id) {
    return axios.get("/api/category/");
  }/*,
  // Deletes the book with the given id
  deleteBook: function (id) {
    return axios.delete("/api/books/" + id);
  },
  // Saves a book to the database
  saveBook: function (bookData) {
    return axios.post("/api/books", bookData);
  }*/
};