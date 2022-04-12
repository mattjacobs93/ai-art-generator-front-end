import * as tokenService from '../services/tokenService'

const BASE_URL = `${process.env.REACT_APP_API_URL}/api/artworks/`

function create(formDataObj) {
    return fetch(BASE_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
      body: formDataObj
    })
    .then(res => res.json())
  }

  function getProfilesArtwork(id) {
    console.log('about to get artwork for profile')
    return fetch(`${BASE_URL}${id}`, {
      headers: {
        'Authorization': `Bearer ${tokenService.getToken()}`,
      },
    })
    .then(res => res.json())
  }

  export { create, getProfilesArtwork }