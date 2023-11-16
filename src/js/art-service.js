export default class ArtService {
  static getArtwork(artRequest) {
    return fetch(`https://api.artic.edu/api/v1/artworks/search?q=${artRequest}`)
      .then(function(response) {
        if (!response.ok) {
          return response.json()
           .then(function(apiErrorMessage) {
              const errorMessage = `${response.status} ${response.statusText} ${apiErrorMessage.message}`;
              throw new Error(errorMessage);
           });
        } else {
          return response.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
  static getItemInfo(itemInfoURL) {
    return fetch(itemInfoURL)
      .then(function(response2) {
        if (!response2.ok) {
          return response2.json()
            .then(function(apiErrorMessage) {
              const errorMessage = `${response2.status} ${response2.statusText} ${apiErrorMessage.message}`;
              throw new Error(errorMessage);
            });
        }else {
          return response2.json();
        }
      })
      .catch(function(error) {
        return error;
      });
  }
}
// take response.json() form line 12, which result of getArtwork()
// response.data[0].api_link  === our new fetc url