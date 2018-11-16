function initMap(){
  var olympicpark = {lat: 37.5203693, lng: 127.1183395};
  var home = {lat: 37.504447, lng: 127.126129};
  var songpa = {lat: 37.5047203, lng: 127.0444241};
  var lottetower= {lat:37.5126125, lng:127.100353};
  var sukchon = {lat:37.508190, lng: 127.100421};
  var map = new google.maps.Map(
    document.getElementById('map'), {
    zoom: 12, center: songpa
    }
  );

        
  var marker1 = new google.maps.Marker({
    position: olympicpark,
    map: map
  });
        
  var marker2 = new google.maps.Marker({
    position: home,
    map: map
  });
        
  var marker3 = new google.maps.Marker({
    position: songpa,
    map: map
  });
  
  var marker4 = new google.maps.Marker({
    position: lottetower,
    map: map
  });
  
  var marker5 = new google.maps.Marker({
    position: sukchon,
    map: map
  });
}