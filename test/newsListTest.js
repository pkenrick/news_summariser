var assert = require('chai').assert;
var sinon = require('sinon');
var NewsList = require('../src/newsList.js');

describe('News List', function(){

  var newsList;
  var stubedClass;

  beforeEach(function(){
    newsList = new NewsList();
    stubbedClass = sinon.stub();
  });

  it('instantiates with an empty array of news items', function(){
    assert.equal(newsList.newsItemsArray.length, 0);
  });

  describe('#addNewsItem', function(){
    it('creates a news item and stores it in its array', function(){
      stubbedClass.returns({summaryString: 'Man rides horse in Hyde Park', url: 'www.bbc.com/news/manrideshorse'});
      newsList.addNewsItem('www.bbc.com/news/manrideshorse', stubbedClass);
      assert.equal(newsList.newsItemsArray[0].summaryString, 'Man rides horse in Hyde Park');
      assert.equal(newsList.newsItemsArray[0].url, 'www.bbc.com/news/manrideshorse');
    });
  });

  describe('#display', function(){
    it('returns the a string of the news list in HTML format', function(){
      returnString = <ul>

      for(i = 0; i < newsList.length; i++){
        returnString += ('<li><div>' + newsList.newsItemsArray[i].summaryString + ': ' + newsList.newsItemsArray[i].url + '</div></li>')

      }

      returnString += </ul>
    });
  });

});