

const mapbuy = L.map('mapbuy').setView([46.757903, 2.787052], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {

  maxZoom: 18,

  id: 'mapbox.streets-basic',

  accessToken: 'pk.eyJ1IjoiY3J5cHRvbWFwIiwiYSI6ImNqaXd2Z3FtcDBkMXgzcnFvdXV0OTdjZWcifQ.qmb-m_7cNzmbYU9qhnmO7A'

}).addTo(mapbuy);

// geolocalizer the user
mapbuy.locate({setView: true, watch: false, timeout: 1000000 })

// if the user click on allow
.on('locationfound', function(e){
  
  let latitude = e.latitude;
  let longitude = e.longitude;

  addMarker(latitude, longitude);
  let marker= addMarker(latitude, longitude);
  marker.bindPopup('you are here').openPopup();
 
  post({ latitude, longitude });
 
// if the user click on denied
}).on('locationerror', function(e){
    console.log(e);
    console.log("nope.");
    post({ latitude: '47.379057', longitude: '2.3854' });
   

})

// request AJAX
const post = data => {
    
  const XHR = new XMLHttpRequest();

  XHR.open('POST', `${window.location.href}`);

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

  
  XHR.send(`latitude=${data.latitude}&longitude=${data.longitude}`);

  XHR.onreadystatechange = () => {

    if(XHR.readyState === 4 && XHR.status === 200) {
     

     let parsed = JSON.parse(XHR.responseText).data;

      parsed.forEach(element => {

        let lat = element.data.lat;

        let lon = element.data.lon;

        let username = element.data.profile.username;
        
        let price = element.data.temp_price;

        //if we need the min amount or max amount

        // let min = element.data.min_amount;
      
        // let max = element.data.max_amount;
        
        let url = element.actions.public_view; 
        
        addMarker(lat, lon);


         let marker = addMarker(lat, lon);
        // marker.addTo(mapbuy);
        marker.bindPopup(username + '<br>'+ price +'<br>' +'<a href='+url+' onclick="window.open(this.href); return false;">'+url +' </a>' ).openPopup();

      })

    }

  }

}

function addMarker(lat, lon){

  let myIcon = L.icon({
    iconUrl: 'assets/img/icon.png',
    iconSize: [38, 50],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -76]})
 
    let marker = L.marker([lat, lon],{icon: myIcon}).addTo(mapbuy);

     return marker;
}