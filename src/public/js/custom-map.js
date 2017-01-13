/**
 * Created by idanhahn on 1/10/2017.
 */
function initMap() {

  initFireBase();
  var geocoder;
  geocoder = new google.maps.Geocoder();

  $('#myModal').on('show.bs.modal', function(e){
    alert(e)
  })
  
  var haifa = {
    lat: 32.805,
    lng: 35.060
  };
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 13,
    center: haifa
  });


  var starCountRef = firebase.database().ref('clicks');
  starCountRef.on('value', function(snapshot) {

    console.log(snapshot.val());


  });


  map.addListener('click', function(e) {


    geocoder.geocode({'location': e.latLng}, function(results, status) {
      if (status === 'OK') {

        if (results[1]) {
          
          $('#myModal').modal('show');
           
          
          
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }
    });

  });
}
