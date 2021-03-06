(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("map", [], factory);
	else if(typeof exports === 'object')
		exports["map"] = factory();
	else
		root["map"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.geolocation = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var GeolocationControl = function () {
    function GeolocationControl(map) {
      var _this = this;

      var position = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, GeolocationControl);

      if (!navigator.geolocation) return;

      position = position || google.maps.ControlPosition.RIGHT_BOTTOM;

      this.userLocation = this.getSavedUserLocation();
      this.map = map;

      this.$icon = document.createElement('div');
      this.$icon.className = 'geolocation-control-icon';

      this.$element = document.createElement('div');
      this.$element.className = 'geolocation-control';
      this.$element.classList.toggle('-active', !!this.userLocation);

      this.$element.appendChild(this.$icon);

      google.maps.event.addDomListener(this.$element, 'click', function (e) {
        e.preventDefault();
        _this.$element.classList.add('-pending');

        _this.getUserLocation(function (success, position, error) {
          _this.$element.classList.remove('-pending');

          if (success) {
            _this.$element.classList.add('-active');
          }

          if (callback) {
            callback(success, position, error);
          }
        });
      }, false);

      this.map.controls[position].push(this.$element);
    }

    _createClass(GeolocationControl, [{
      key: 'hide',
      value: function hide() {
        this.$element.style.display = 'none';
      }
    }, {
      key: 'show',
      value: function show() {
        this.$element.style.display = 'block';
      }
    }, {
      key: 'getSavedUserLocation',
      value: function getSavedUserLocation() {
        var location = window.sessionStorage.getItem('gmap-user-location');
        if (!location) return null;

        var position = location.split(',');

        return new google.maps.LatLng(parseFloat(position[0]), parseFloat(position[1]));
      }
    }, {
      key: 'getUserLocation',
      value: function getUserLocation(cb) {
        var _this2 = this;

        if (this.userLocation) {
          cb(true, this.userLocation, null);
          return true;
        }

        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function (geolocation) {
            var position = new google.maps.LatLng(geolocation.coords.latitude, geolocation.coords.longitude);

            _this2.userLocation = position;

            window.sessionStorage.setItem('gmap-user-location', position.lat() + ',' + position.lng());

            cb(true, position);
          }, function (err) {
            cb(false, null, err);
          });
        } else {
          cb(false, null, 'Browser doesn\'t support geocoding');
        }
      }
    }]);

    return GeolocationControl;
  }();

  exports.default = GeolocationControl;
});

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (global, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./controls/geolocation'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.geolocation);
    global.index = mod.exports;
  }
})(this, function (exports, _geolocation) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _geolocation2 = _interopRequireDefault(_geolocation);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var cachedStyles = {};
  var cachedIcons = {};

  /**
   * Map feature class.
   */

  var GoogleMap = function (_base$features$Featur) {
    _inherits(GoogleMap, _base$features$Featur);

    function GoogleMap() {
      _classCallCheck(this, GoogleMap);

      return _possibleConstructorReturn(this, (GoogleMap.__proto__ || Object.getPrototypeOf(GoogleMap)).apply(this, arguments));
    }

    _createClass(GoogleMap, [{
      key: 'init',
      value: function init() {
        var _this2 = this;

        this.isResizing = false;
        this.isDraging = false;

        this.markers = [];
        this.currentMarker = null;

        this.initialZoom = parseInt(this.node.getAttribute('data-zoom'), 10) || this.options.mapOptions.zoom;
        this.initialCenter = {
          lat: parseFloat(this.node.getAttribute('data-lat')),
          lng: parseFloat(this.node.getAttribute('data-lng'))
        };

        this.center = this.initialCenter;
        this.bounds = new google.maps.LatLngBounds();
        this.infoWindow = new google.maps.InfoWindow();

        this.options.mapOptions.zoom = this.initialZoom;
        this.options.mapOptions.center = this.initialCenter;

        var style = cachedStyles[this.options.theme] || null;

        if (!this.options.mapOptions.styles) {
          if (!style) {
            base.utils.fetch.json(base.paths.assets + '/features/map/styles/' + this.options.theme + '.json').then(function (json) {
              // cache style
              cachedStyles[_this2.options.theme] = json;
              // take styles for map and load it
              _this2.options.mapOptions.styles = json;
              _this2._loadMap();
            }).catch(function (ex) {
              console.error('Loading map with theme "' + _this2.options.theme + '" failed', ex);
            });
          } else {
            this.options.mapOptions.styles = style;
          }
        } else {
          this._loadMap();
        }
      }
    }, {
      key: 'destroy',
      value: function destroy() {
        this.node.innerHTML = '';
        google.maps.event.clearInstanceListeners(this.map);
        this.map = null;

        _get(GoogleMap.prototype.__proto__ || Object.getPrototypeOf(GoogleMap.prototype), 'destroy', this).call(this);
      }
    }, {
      key: '_loadMap',
      value: function _loadMap() {
        var _this3 = this;

        // create a map object and specify the DOM element for display.
        this.map = new google.maps.Map(this.node, this.options.mapOptions);

        if (this.options.geolocationControl) {
          this.geolocationControl = new _geolocation2.default(this.map, null, function (success, position, error) {
            if (success) {
              _this3.map.setCenter(position);
              if (_this3.options.geolocationControlZoom) {
                _this3.map.setZoom(_this3.options.geolocationControlZoom);
              }
            } else {
              error = error.message || error;
              if (error != null) {
                console.error('Failed to detect user location: ' + error);
              } else {
                console.error('Failed to detect user location');
              }
            }
          });
        }

        this.listenerFirstIdle = google.maps.event.addDomListenerOnce(this.map, 'idle', this._firstIdleListener());
        this.listenerIdle = google.maps.event.addDomListener(this.map, 'idle', this._idleListener());

        this.options.markers.forEach(function (marker) {
          _this3.addMarker(marker);
        });

        this.options.boundMarkers.forEach(function (marker) {
          _this3.addBoundMarker(marker);
        });

        this.listenerZoomChanged = google.maps.event.addDomListener(this.map, 'zoom_changed', this._zoomChangedListener());
        this.listenerDragstart = google.maps.event.addDomListener(this.map, 'dragstart', this._dragstartListener());
        this.listenerDragend = google.maps.event.addDomListener(this.map, 'dragend', this._dragendListener());
        this.listenerResize = this.addEventListener(window, 'resize', this._resizeListener());

        this.trigger('loaded');
      }
    }, {
      key: 'addMarker',
      value: function addMarker() {
        var _this4 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var cachedIcon;
        var markerOptions;
        var iconUrl;

        // extend Google API marker options
        markerOptions = Object.assign({}, GoogleMap.defaultMarkerOptions.markerOptions, options.markerOptions || {});

        // extend marker options
        options = Object.assign({}, GoogleMap.defaultMarkerOptions, options);

        // set map the marker belongs to
        markerOptions.map = this.map;

        // set position to map center position if no position given
        markerOptions.position = markerOptions.position || this.initialCenter;

        // set full icon url
        iconUrl = base.paths.assets + '/features/map/pins/' + options.pin + '.png';

        cachedIcon = cachedIcons[iconUrl] || null;

        if (cachedIcon) {
          markerOptions.anchorPoint = cachedIcon.anchorPoint;
          markerOptions.icon = cachedIcon.icon;

          return new Promise(function (resolve, reject) {
            var marker = _this4._loadMarker(markerOptions, options);
            resolve(marker);
          });
        }

        return new Promise(function (resolve, reject) {
          var image = new Image();

          image.onload = function () {
            var markerWidth = image.naturalWidth;
            var markerHeight = image.naturalHeight;
            var markerWidthScaled = markerWidth * options.scaleIcon;
            var markerHeightScaled = markerHeight * options.scaleIcon;

            markerOptions.anchorPoint = new google.maps.Point(0, markerHeightScaled / -1);

            markerOptions.icon = {};
            markerOptions.icon.url = iconUrl;
            markerOptions.icon.size = new google.maps.Size(markerWidthScaled, markerHeightScaled);
            markerOptions.icon.scaledSize = new google.maps.Size(markerWidthScaled, markerHeightScaled);
            markerOptions.icon.anchor = new google.maps.Point(markerWidthScaled / 2, markerHeightScaled);
            markerOptions.icon.origin = new google.maps.Point(0, 0);

            // cache icon data
            cachedIcons[iconUrl] = {
              anchorPoint: markerOptions.anchorPoint,
              icon: markerOptions.icon
            };

            var marker = _this4._loadMarker(markerOptions, options);
            resolve(marker);
          };

          image.src = iconUrl;
        });
      }
    }, {
      key: 'addBoundMarker',
      value: function addBoundMarker() {
        var _this5 = this;

        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

        var markerPromise = this.addMarker(options);
        return markerPromise.then(function (marker) {
          _this5.addBound(marker.position);
        });
      }
    }, {
      key: '_loadMarker',
      value: function _loadMarker(markerOptions, options) {
        var marker = new google.maps.Marker(markerOptions);

        if (options.content) {
          google.maps.event.addListener(marker, 'click', this._markerClickListener(marker, options.content, options.panTo, options.open));
        }

        this.markers.push(marker);
        return marker;
      }
    }, {
      key: 'addBound',
      value: function addBound(position) {
        // extend bounds with new marker position
        this.bounds.extend(position);
        // fit map according to current bounds
        this.map.fitBounds(this.bounds);
        // update center position
        this.updateCenter();
      }
    }, {
      key: 'resize',
      value: function resize() {
        // trigger resize
        google.maps.event.trigger(this.map, 'resize');

        if (this.options.responsive && !this.options.resetOnResize) {
          // preserve the current center point
          this.map.setCenter(this.center);
        }

        if (this.options.resetOnResize) {
          this.resetCenter(true);
          this.resetZoom();
        }

        this.isResizing = false;
        this.trigger('resized');
      }
    }, {
      key: 'updateCenter',
      value: function updateCenter() {
        this.center = this.map.getCenter();
      }
    }, {
      key: 'setInitialCenter',
      value: function setInitialCenter(pos) {
        this.map.setCenter(pos);
        this.initialCenter = pos;
      }
    }, {
      key: 'setInitialZoom',
      value: function setInitialZoom(zoom) {
        this.map.setZoom(zoom);
        this.initialZoom = zoom;
      }
    }, {
      key: 'zoomIn',
      value: function zoomIn() {
        this.map.setZoom(++this.map.zoom);
      }
    }, {
      key: 'zoomOut',
      value: function zoomOut() {
        this.map.setZoom(--this.map.zoom);
      }
    }, {
      key: 'resetCenter',
      value: function resetCenter() {
        var pan = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

        if (pan) {
          this.map.panTo(this.initialCenter);
        } else {
          this.map.setCenter(this.initialCenter);
        }
      }
    }, {
      key: 'resetZoom',
      value: function resetZoom() {
        this.map.setZoom(this.initialZoom);
      }
    }, {
      key: '_firstIdleListener',
      value: function _firstIdleListener() {
        var _this6 = this;

        return function () {
          _this6.trigger('firstIdle');
        };
      }
    }, {
      key: '_markerClickListener',
      value: function _markerClickListener(marker, content, pan, open) {
        var _this7 = this;

        if (open) {
          this.one('firstIdle', function () {
            _this7.currentMarker = marker;
            _this7.infoWindow.setContent(content);
            _this7.infoWindow.open(_this7.map, marker);
          });
        }

        return function () {
          if (_this7.currentMarker != marker) {
            _this7.currentMarker = marker;
            _this7.infoWindow.setContent(content);
            _this7.infoWindow.open(_this7.map, marker);
          } else {
            _this7.currentMarker = null;
            _this7.infoWindow.close();
          }

          if (pan) {
            var pos = marker.getPosition();
            _this7.map.panTo(pos);
            _this7.center = pos;
          }
        };
      }
    }, {
      key: '_idleListener',
      value: function _idleListener() {
        var _this8 = this;

        return function (e) {
          if (!_this8.draging) {
            _this8.updateCenter();
          }

          _this8.trigger('idle');
        };
      }
    }, {
      key: '_zoomChangedListener',
      value: function _zoomChangedListener() {
        var _this9 = this;

        return function (e) {
          _this9.trigger('zoomChanged');
        };
      }
    }, {
      key: '_dragstartListener',
      value: function _dragstartListener() {
        var _this10 = this;

        return function (e) {
          _this10.isDraging = true;
          _this10.trigger('dragstart');
        };
      }
    }, {
      key: '_dragendListener',
      value: function _dragendListener() {
        var _this11 = this;

        return function (e) {
          _this11.isDraging = false;
          _this11.trigger('dragend');
        };
      }
    }, {
      key: '_resizeListener',
      value: function _resizeListener() {
        var _this12 = this;

        return function (e) {
          if (!_this12.isResizing) {
            _this12.isResizing = true;
            base.utils.fn.rAF(_this12.resize.bind(_this12));
          }
        };
      }
    }]);

    return GoogleMap;
  }(base.features.Feature);

  /**
   * Default feature options.
   *
   * @type {Object}
   * @property {String} theme='default'
   *   Style theme used for map.
   * @property {Boolean} responsive=false
   *   Recenters map on resize.
   * @property {Boolean} resetOnResize=false
   *   Resets map to initial zoom and center on resize.
   * @property {Boolean} geolocationControl=false
   *   Adds a geolocation control.
   * @property {Number|null} geolocationControlZoom=null
   *   Zoom applied after geolocation click.
   * @property {Object} mapOptions
   *   Google Map API options for map instance.
   */
  GoogleMap.defaultOptions = {
    theme: 'default',
    markers: [],
    boundMarkers: [],
    responsive: true,
    resetOnResize: false,
    geolocationControl: false,
    geolocationControlZoom: null,
    mapOptions: {
      zoom: 12,
      disableDefaultUI: true,
      scrollwheel: false,
      zoomControl: true,
      mapTypeControl: false
    }
  };

  GoogleMap.defaultMarkerOptions = {
    open: false,
    content: null,
    panTo: false,
    scaleIcon: 0.5,
    pin: 'default',
    markerOptions: {
      draggable: false
    }
  };

  exports.default = GoogleMap;
});

/***/ })
/******/ ]);
});
//# sourceMappingURL=map.js.map