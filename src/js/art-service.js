export default class ArtService {
  static getArtwork(artRequest) {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${artRequest}`)
      .then(function (response) {
        if (!response.ok) {
          return response.json()
            .then(function (apiErrorMessage) {
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMessage.message}`;
              throw new Error(errorMessage);
            });
        } else {
          return response.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
  static getItemInfo(itemInfoURL) {
    return fetch(itemInfoURL)
      .then(function (response2) {
        if (!response2.ok) {
          return response2.json()
            .then(function (apiErrorMessage) {
              const errorMessage = `${response2.status} ${response2.statusText} ${apiErrorMessage.message}`;
              throw new Error(errorMessage);
            });
        } else {
          return response2.json();
        }
      })
      .catch(function (error) {
        return error;
      });
  }
  static getImg(imgID) {
    return fetch(`https:www.artic.edu/iiif/2/${imgID}/full/400,/0/default.jpg`)
      .then(function (response3) {
        if (!response3.ok) {
          return response3.json()
            .then(function (apiErrorMessage) {
              const errorMessage = `${response3.status} ${response3.statusText} ${apiErrorMessage.message}`;
              throw new Error(errorMessage);
            });
        } else {
          console.log(response3);
          return response3.url;
        }
      })
      .catch(function (error) {
        return error;
      });
  }
}