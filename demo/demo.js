base.paths.assets = '../assets'

import Map from '../src'

base.features.add('map', Map, {
  geolocationControl: true,
  geolocationControlZoom: 8,
  markers: [
    {
      open: true,
      content: 'Main Marker<br>Test<br>Test',
      markerOptions: {
        title: 'Click me'
      }
    }
  ]
})

base.features.init()
