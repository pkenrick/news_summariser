var assert = require('chai').assert;
var sinon = require('sinon');
var NewsList = require('../src/newsList.js').NewsList;

describe('News List', function(){

  var newsList;
  var stubedClass;

  beforeEach(function(){
    newsList = new NewsList();
    stubbedClass = sinon.stub();
    date1 = new Date('1/12/2012');
    date2 = new Date('1/7/2013');
    stubbedClass.withArgs('Man rides horse in Hyde Park', date1, 'www.bbc.com/news/manrideshorse').returns({summaryString: 'Man rides horse in Hyde Park', date: date1, url: 'www.bbc.com/news/manrideshorse'});
    stubbedClass.withArgs('Britain to leave EU', date2, 'www.bbc.com/news/brexit').returns({summaryString: 'Britain to leave EU', date: date2, url: 'www.bbc.com/news/brexit'});
    console.log('the faked date is: ' + date1)
  });

  it('instantiates with an empty array of news items', function(){
    assert.equal(newsList.newsItemsArray.length, 0);
  });

  describe('#addNewsItem', function(){
    it('creates a news item and stores it in its array', function(){
      newsList.addNewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse', stubbedClass);
      newsList.addNewsItem('Britain to leave EU', '1/7/2013', 'www.bbc.com/news/brexit', stubbedClass);
      assert.equal(newsList.newsItemsArray[0].summaryString, 'Britain to leave EU');
      assert.equal(newsList.newsItemsArray[1].summaryString, 'Man rides horse in Hyde Park');
    });
  });

  describe('#display', function(){
    it('returns the a string of the news list in HTML format', function(){
      newsList.addNewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse', stubbedClass);
      newsList.addNewsItem('Britain to leave EU', '1/7/2013', 'www.bbc.com/news/brexit', stubbedClass);
      assert.equal(newsList.display(), '<ul><li><div>Britain to leave EU: 1/7/2013: www.bbc.com/news/brexit</div></li><li><div>Man rides horse in Hyde Park: 1/12/2012: www.bbc.com/news/manrideshorse</div></li></ul>');
    });
  });

  describe('#removeNewsItem', function(){
    it('removes an item from the array of stored news items', function(){
      newsList.addNewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse', stubbedClass);
      newsList.addNewsItem('Britain to leave EU', '1/7/2013', 'www.bbc.com/news/brexit', stubbedClass);
      newsList.removeNewsItem(1);
      assert.equal(newsList.newsItemsArray.length, 1);
      assert.equal(newsList.newsItemsArray[0].summaryString, 'Britain to leave EU');
    });
  });

});