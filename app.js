var newsList = new NewsList();
newsList.addNewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse');
newsList.addNewsItem('Britain to leave the EU', '1/7/2013', 'www.bbc.com/news/brexit');



updateList();



var request = new XMLHttpRequest();
request.open('GET', encodeURI('http://news-summary-api.herokuapp.com/guardian?apiRequestUrl=http://content.guardianapis.com/search?q=debate&tag=politics/politics&from-date=2014-01-01'));
request.onreadystatechange = function(response) {
      if (request.readyState === 4 && request.status === 200) {
      var data = JSON.parse(request.responseText);
      data.response.results.forEach(function(article){
        newsList.addNewsItem(article.webTitle, new Date(1/2/2012), article.webUrl)
        updateList();
        });
    };
};
request.send();



function updateList(){
  document.getElementById('list').innerHTML = newsList.display();
  document.getElementById('newSummary').value = '';
  document.getElementById('newDate').value = '';
  document.getElementById('newUrl').value = '';
};

document.getElementById('addNewsItemButton').addEventListener('click', function(event){
  event.preventDefault();
  newsList.addNewsItem(document.getElementById('newSummary').value, document.getElementById('newDate').value, document.getElementById('newUrl').value);
  updateList();
});




document.getElementById('list').addEventListener('click', function(event){
  newsList.removeNewsItem(event.target.id.slice(16));
  updateList();
});