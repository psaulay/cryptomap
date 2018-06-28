
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

const hamburger = document.querySelector('#iHamburger')

hamburger.addEventListener('click', e => {

  const   ulMobile = document.querySelector('#ul-mobile')
        , display  = window.getComputedStyle(ulMobile).getPropertyValue('display')

  display === 'block' ? ulMobile.style.display = 'none' : ulMobile.style.display = 'block'

})
