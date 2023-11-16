export default class ArtService {
  static getArtwork(item) {
    return fetch(`https://api.artic.edu/api/v1/artworks/75644?fields=id,title,image_id,alt_image_ids`)
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
}