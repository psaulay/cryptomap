
const map = L.map('map').setView([46.757903, 2.787052], 6);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {

  // attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
  maxZoom: 18,
  // id: 'mapbox.streets',
  // id: 'mapbox.light',
  // id: 'mapbox.dark',
  // id: 'mapbox.satellite',
  // id: 'mapbox.streets-satellite',
  // id: 'mapbox.wheatpaste',
  id: 'mapbox.streets-basic',
  // id: 'mapbox.comic',
  // id: 'mapbox.outdoors',
  // id: 'mapbox.run-bike-hike',
  // id: 'mapbox.pencil',
  // id: 'mapbox.pirates',
  // id: 'mapbox.emerald',
  // id: 'mapbox.high-contrast',
  accessToken: 'pk.eyJ1IjoiY3J5cHRvbWFwIiwiYSI6ImNqaXd2Z3FtcDBkMXgzcnFvdXV0OTdjZWcifQ.qmb-m_7cNzmbYU9qhnmO7A'

}).addTo(map);


const eventBitcoin = function() {

  const bitcoins = document.querySelectorAll('.bitcoin')

  bitcoins.forEach(bitcoin => {

    bitcoin.addEventListener('click', e => {

      e.preventDefault()
      // console.log(bitcoin.value);

      post(bitcoin.value)

    })

  })

}()


/**** **** **** **** **** **** **** ****
 > POST
**** **** **** **** **** **** **** ****/

const post = data => {

  const XHR = new XMLHttpRequest()

  XHR.open('POST', `${window.location.href}`)

  XHR.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')

  XHR.send(`bitcoin=${data}`)

  XHR.onreadystatechange = () => {
  
    if(XHR.readyState === 4 && XHR.status === 200) {

      let kind = JSON.parse(XHR.responseText).kind;
      
      switch (kind){

        case "cash" : 
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

          marker.bindPopup(username + '<br>'+ price +'<br>' +'<a href='+url+' onclick="window.open(this.href); return false;">'+url +' </a>' ).openPopup();
    
          })
          break;

        case "atm" : 

          //////
          break;

        case "shop" : 

          /////
          break;


        case "reset" : 

          /////
          break;

        default:


      }


    }

  }


}

function addMarker(lat, lon){

  let myIcon = L.icon({
    iconUrl: 'assets/img/icon.png',
    iconSize: [38, 50],
    iconAnchor: [22, 50],
    popupAnchor: [-3, -76]})
 
    let marker = L.marker([lat, lon],{icon: myIcon}).addTo(map);

     return marker;
}
