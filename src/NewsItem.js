function NewsItem(summaryString, url){
  this.summaryString = summaryString;
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

module.exports = NewsItem;