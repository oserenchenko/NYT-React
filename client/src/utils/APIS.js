import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
  getArticles: function(topic, startYr, endYr) {
    return axios.get("https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=b9f91d369ff59547cd47b931d8cbc56b:0:74623931&q=" + topic + "&start%20date=" + startYr + "&end%20date=" + endYr);
  },

   // Saves an article to database
   saveArticle: function(articleData) {
    return axios.post("/api/articles", articleData);
  } ,

    // Saves an article to database
  loadArticles: function() {
    return axios.get("/api/articles");
  } ,

    // deletes an article from database
  deleteArticle: function(id) {
    console.log(id);
      return axios.delete("/api/articles/" + id);
  }   
};
