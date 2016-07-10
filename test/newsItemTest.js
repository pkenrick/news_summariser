var assert = require('chai').assert;
var NewsItem = require('../src/NewsItem.js').NewsItem;

describe('News Item', function(){

  var newsItem;

  beforeEach(function(){
    newsItem = new NewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse');
  });

  it('can be instantiated with a url and summary text', function(){
    assert.equal(newsItem.summaryString, 'Man rides horse in Hyde Park')
    assert.equal(newsItem.url, 'www.bbc.com/news/manrideshorse'); 
  });

  describe('#getSummary', function(){
    it('will return the summary of the news item', function(){
      assert.equal(newsItem.getSummary(), 'Man rides horse in Hyde Park');
    });
  });

  describe('#getUrl', function(){
    it('will return the url the news item is sourced from', function(){
      assert.equal(newsItem.getUrl(), 'www.bbc.com/news/manrideshorse');
    });
  });



});
