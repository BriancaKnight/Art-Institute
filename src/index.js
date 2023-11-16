import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ArtService from './js/art-service.js';

function getArtwork(item) {
  ArtService.getArtwork(item)
    .then(function(response) {
      if (response.data) {
        printElements(response, item);
      } else {
        printError(response, item)
      }
    });
}

function printElements(response, item) {
  const responseDiv = document.querySelector('#responseDiv');
  const p = document.createElement('p');
  responseDiv.append(p);
  p.append(`Here is your result: ${response.data.title}`);
}

function printError(error, item) {
  document.querySelector('#responseDiv').innerText = `There was an error accessing the data for ${item}: ${error.message}.`;
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