let resultInfo;
let map;
let imageRest;

navigator.geolocation.getCurrentPosition(initMap, error);

function initMap(position) {
  let lat = position.coords.latitude;
  let lng = position.coords.longitude;
  let center = new google.maps.LatLng(lat, lng);
  map = new google.maps.Map(document.getElementById('map'), {
    center: center,
    zoom: 15
  });
  createMarkerUser(center);
  let request = {
    location: center,
    radius: 500,
    type: ['restaurant']
  };
  
  let service = new google.maps.places.PlacesService(map);
  service.nearbySearch(request, callback);
}
  
function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    resultInfo = results;
    console.log(resultInfo);
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
      renderInfo(results[i]);
    }
  }
}
  
function createMarker(place) {
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: placeLoc,
    title: place.name
  });
}

function createMarkerUser(user) {
  new google.maps.Marker({
    map: map,
    position: user,
    title: 'Aquí estas'
  });
}

function error(err) {
  console.log('No logramos encontrar tu ubicación');
};

const photoRest = () => {
  if (resultInfo.photos) {
    console.log(resultInfo.photos);
    imageRest = resultInfo.photos[0].getUrl({'maxWidith': 400,
      'maxHeight': 200});
  } else {
    imageRest = '';
  }
  return imageRest;
};