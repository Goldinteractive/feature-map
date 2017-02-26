base.paths.assets = '../assets'

import Map from '../src'

base.features.add('map', Map, {
  geolocationControl: true,
  geolocationControlZoom: 8,
  markers: [
    {
      content: 'Main Marker',
      markerOptions: {
        title: 'Click me'
      }
    }
  ]
})

base.features.init()
