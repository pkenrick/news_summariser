(function(exports){

  function NewsItem(summaryString, date, url){
    this.summaryString = summaryString;
    this.date = date;
    this.url = url;
  };

  NewsItem.prototype = {
    getSummary: function(){
      return this.summaryString;
    },
    getUrl: function(){
      return this.url;
    }
  };

  exports.NewsItem = NewsItem;

})(this);