
const busStops = [
    [77.1325155165289,  11.02617620872903],
    [77.13938197177221, 11.027861128884691],
    [77.1495099929649,  11.028029620264668],
    [77.17131098798882, 11.024828265728901],
    [77.18349894583685, 11.018256955139451],
    [77.19877680849142, 11.012022499179745],
    [77.20838984555805, 11.008146959961502],
    [77.22452601510332, 11.00140677039401 ],
    [77.24203547567373, 11.00005871397976 ],
    [77.26057490451298, 11.001743783534174],
    [77.27293452373915, 10.99871065140026,],
    [77.28512248158718, 10.99500344752299,],
  ];
  mapboxgl.accessToken = 'pk.eyJ1IjoiZGludWciLCJhIjoiY2t4NzVzaHJ5MGdybDJvbzBxZ3ZycHNzMyJ9.xJqtdYjnwuByV5WM8WqsTA';
  let map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/satellite-v9',
    center: [77.1325155165289, 11.02617620872903],
    zoom: 14,
  });
  let counter = 0;
  const marker = new mapboxgl.Marker()
  .setLngLat(busStops[counter])
  .addTo(map);
   function move() {
    marker.setLngLat(busStops[counter])
    marker.addTo(map)
    counter ++
    setTimeout(move,1000)
  }