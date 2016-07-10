var newsList = new NewsList();
newsList.addNewsItem('Man rides horse in Hyde Park', '1/12/2012', 'www.bbc.com/news/manrideshorse');
newsList.addNewsItem('Britain to leave the EU', '1/7/2013', 'www.bbc.com/news/brexit');

updateList();

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