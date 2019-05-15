$(function() {
  var visited = "#2ecc71";
  var home = "#3498db";

  var data = {
    "GB": home,
    "UA": visited,
    "TH": visited,
    "MY": visited
  };

  $('#count').text(Object.keys(data).length);

  $('#vmap').vectorMap({
    map: 'world_mill',
    backgroundColor: '#0f2744',
    series: {
      regions: [{
        values: data,
        attribute: 'fill'
      }]
    }, onRegionTipShow: function(e, label, code) {
      if (code == "GB") {
        label.html('<div class="map-tooltip">' + label.html() + ' is my home country.</div>');
      } else if (code in data) {
        label.html('<div class="map-tooltip">I\'ve visited ' + label.html() + '!</div>');
      } else {
        label.html('<div class="map-tooltip">' + label.html() + ': I haven\'t visited this country yet!</div>');
      }
    }
  });
});
