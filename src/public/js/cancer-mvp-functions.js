/**
 * Created by idanhahn on 1/13/2017.
 */


// firebase functions:
function writeData(id, lat, lng) {
  
  firebase.database().ref('test/' + id).set({
    lat: lat,
    lng: lng
  });

}
