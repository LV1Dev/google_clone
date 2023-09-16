const form = document.getElementById('search-form');
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

const cx = 'CUSROM_SEARCH_CX'; // Your Custom Search CX
const apiKey = 'API_KEY'; // Your API Key

searchButton.addEventListener('click', function(event) {
  const keyword = searchInput.value;

  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
      } else {
        console.error('Error:', xhr.status);
      }
    }
  };
  
  const url = `https://www.googleapis.com/customsearch/v1?q=${keyword}&cx=${cx}&key=${apiKey}`;
  xhr.open('GET', url);
  xhr.send();
});