var assert = require('chai').assert;

var server = require("http-server").createServer();
server.listen(3000);

var Browser = require('zombie');
var browser = new Browser({ site: 'http://localhost:3000' });

describe('Functional Test', function(){

  beforeEach(function(done){
    browser.visit('/', done);
  });

  it('can see title in the title bar', function(){
    assert.equal(browser.text('title'), 'News Summariser');
  });

  it('can see items displayed in the body section of the page', function(){
    assert.include(browser.text('body'), 'Man rides horse in Hyde Park: 1/12/2012: www.bbc.com/news/manrideshorse');
    assert.include(browser.text('body'), 'Britain to leave the EU: 1/7/2013: www.bbc.com/news/brexit');
  });

  it('can click add new item and see that item added to the list', function(){
    browser.fill('summary', 'Car breaks down in London');
    browser.fill('date', '17/7/1983')
    browser.fill('url', 'www.bbc.com/news/breakdown');
    browser.pressButton('Add News Item');
    assert.include(browser.text('body'), 'Car breaks down in London');
    assert.include(browser.text('body'), 'www.bbc.com/news/breakdown');
  });

});