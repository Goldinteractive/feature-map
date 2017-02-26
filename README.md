## `map` feature

Google map with some extensions and additions to simplify usage.

### Global dependencies

* [`gi-js-base`](https://github.com/Goldinteractive/js-base)

### Dependencies

* [`google map`](https://developers.google.com/maps/) (external)

### Installation

Install this package with sackmesser:

    make feature-install-map

or when sackmesser is not used:

    yarn install gi-feature-map

After the installation has completed, you can import the module files:

#### JS:

```javascript
// import feature class
import Map from 'gi-feature-map'
// ...
base.features.add('map', Map)
```

Make sure you provide the global dependencies in your webpack config file:

```javascript
new webpack.ProvidePlugin({
  base: 'gi-js-base'
})
```

#### Styles:

```sass
@import 'gi-feature-map/src/style';
```

#### Markup:

```html
<script src="//maps.googleapis.com/maps/api/js?libraries=geometry&key=[YOUR_API_KEY]"></script>
```

### Browser compatibility

* Newest two browser versions of Chrome, Firefox, Safari and Edge
* IE 10 and above

### Development

* `make build` or `npm run build` - Build production version of the feature.
* `make dev` or `npm run dev` - Build demo of the feature, run a watcher and start browser-sync.
* `make test` or `npm run test` - Test the feature.
* `make jsdoc` - Update documentation inside the `docs` folder.
* `make publish` - Publish npm package.
