import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ArtService from './js/art-service.js';

function getArtwork(artRequest) {
  ArtService.getArtwork(artRequest)
    .then(function(response) {
      if (response.data) {
        let itemInfoURL = response.data[0].api_link;
        ArtService.getItemInfo(itemInfoURL) 
        .then(function(response2) {
          if (response2.data) {
            printElements(response, artRequest, response2); 
          }
        })
      } else {
        printError(response, artRequest, response2);
      }
    });
}

function printElements(response, artRequest, response2) {
  const responseDiv = document.querySelector('#responseDiv');
  const p = document.createElement('p');
  responseDiv.append(p);
  p.append(`Here is the top result for ${artRequest}: ${response.data[0].title} by ${response2.data.artist_title}`); //'water lileis if monet search
}

function printError(error, artRequest) {
  document.querySelector('#responseDiv').innerText = `There was an error accessing the data for ${artRequest}: ${error.message}.`;
}

function handleForm(e) {
  e.preventDefault();
  document.querySelector('#artRequest').innerText = null;
  const artRequest = document.querySelector('#artRequest').value;
  getArtwork(artRequest);
}

window.addEventListener("load", function () {
  document.querySelector("#art-form").addEventListener("submit", handleForm);
});