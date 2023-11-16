import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ArtService from './js/art-service.js';

function getArtwork(artRequest) {
  ArtService.getArtwork(artRequest)
    .then(function (response) {
      if (response.data) {
        let itemInfoURL = response.data[0].api_link;
        ArtService.getItemInfo(itemInfoURL)
          .then(function (response2) {
            if (response2.data) {
              let imgID = response2.data.image_id; 
              ArtService.getImg(imgID)
                .then(function (response3) {
                  if (response3) {
                    printElements(response, artRequest, response2, response3); 
                  }
                })
            }
          })
      } else {
        printError(response, artRequest, response2, response3);
      }
    });
}

function printElements(response, artRequest, response2, response3) {
  const responseDiv = document.querySelector('#responseDiv');
  const p = document.createElement('p');
  const img = document.createElement('img');
  const p2 = document.createElement('p');
  img.src = response3;
  const pDescribe = response2.data.description;
  p2.innerHTML = pDescribe;
  const onView = response2.data.is_on_view;
  let onViewMessage;
    if (onView === true) {
      onViewMessage = "You currently can view this peice at our gallary."
    } else {
      onViewMessage = "This peice is not currently on view at our gallary."
    }
  p.append(`Here is the top result for ${artRequest}: ${response.data[0].title} by ${response2.data.artist_title}. ${onViewMessage}`); 
  responseDiv.append(p, img, p2);
}

function printError(error, artRequest) {
  document.querySelector('#responseDiv').innerText = `There was an error accessing the data for ${artRequest}: ${error.message}.`;
}

function handleForm(e) {
  e.preventDefault();
  document.querySelector('#artRequest').innerText = null;
  const artRequest = document.querySelector('#artRequest').value;
  getArtwork(artRequest);
  clearResults();
}

function clearResults() {
  const responseDiv = document.getElementById("responseDiv");
  responseDiv.innerHTML = "";
}

window.addEventListener("load", function () {
  document.querySelector("#art-form").addEventListener("submit", handleForm);
});