// var NewsItem = require('./newsItem');

(function(exports){

  function NewsList(){
    this.newsItemsArray = [];
  };

  NewsList.prototype = {
    addNewsItem: function(summaryString, date, url, requiredClass = NewsItem){
      date = new Date(date);
      this.newsItemsArray.push(new requiredClass(summaryString, date, url));
      this.sortArray();
    },
    display: function(){
      var returnString = "<div id='listContainer'><ul>";
      for(i = 0; i < this.newsItemsArray.length; i++){
        returnString += ("<li><div>" + this.newsItemsArray[i].summaryString + ": " + this.dateToString(this.newsItemsArray[i].date) + ": " + this.newsItemsArray[i].url + " : <input class='removeItemButton' id='removeItemButton" + i + "' type='submit' value='Remove'></input></div></li>")
      }
      return returnString += '</ul></div>'
    },
    dateToString: function(date){
      return (date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear();
    },
    sortArray: function(){
      this.newsItemsArray.sort(function(a, b){
        return a.date > b.date ? -1: a.date < b.date ? 1 : 0;
      });
    },
    removeNewsItem: function(index){
      this.newsItemsArray.splice(index, 1);
    }
  };

  exports.NewsList = NewsList;

})(this);