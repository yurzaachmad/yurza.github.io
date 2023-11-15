var ContactPage = function () {

	return {

		//Basic Map
		initMap: function () {
			var map;
			$(document).ready(function () {
				map = new GMaps({
					div: '#map',
					scrollwheel: false,
					lat: -6.897969,
					lng: 107.61377
				});

				var marker = map.addMarker({
					lat: -6.897969,
					lng: 107.61377,
					title: 'Company, Inc.'
				});
			});
		},

		//Panorama Map
		initPanorama: function () {
			var panorama;
			$(document).ready(function () {
				panorama = GMaps.createPanorama({
					el: '#panorama',
					lat: -6.897969,
					lng: 107.61377
				});
			});
		}

	};
}();
