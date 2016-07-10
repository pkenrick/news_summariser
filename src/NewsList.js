var NewsItem = require('./newsItem');

function NewsList(){
  this.newsItemsArray = [];
};

NewsList.prototype = {
  addNewsItem: function(summaryString, requiredClass = NewsItem){
    this.newsItemsArray.push(new requiredClass(summaryString));
  }
};

module.exports = NewsList;