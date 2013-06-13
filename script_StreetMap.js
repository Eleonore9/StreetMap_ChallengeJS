$(document).ready(function () {
    $.ajax({
        url: 'http://www.streethub.com/api/challenge?callback=?',
        type: "GET",
        data: formData,
        dataType: "jsonp",
        jsonpCallback: "localJsonpCallback"
    });
    alert('Ca marche pas!');
});

 function localJsonpCallback(json) {
        if (!json.Error) {
            $.getJSON(json, {
 	    	tags: "Snowden Flood", 
 	        }) 
 	    }
        // alert('Ca marche pas!');
    }

// $(document).ready(function() {
// 	alert('Hello');
// 	$.getJSON("http://www.streethub.com/api/challenge?callback=?", {
// 	  tags: "Snowden Flood", 
// 	  tagmode: "any",
// 	  format: "jsonp",
// 	}) 
// 	.done(function(data) {
// 		$.each(data.items, function(i, item) {
// 		  $('<img/>').attr("images[0]", item.media.m).appendTo('#Store_info');
// 		  if ( i === 3 ) {
// 			return false;
// 			}
// 		});
// 	});
// });



function initialize() {
		var mapProp = {
			center:new google.maps.LatLng(51.51121389999999,-0.1198244),
			zoom:10,
			mapTypeId:google.maps.MapTypeId.ROADMAP
		};
		var map = new google.maps.Map(document.getElementById("GoogleMap"),mapProp);

	}

	google.maps.event.addDomListener(window, 'load', initialize);


// $.ajax({
// 	url:'http://localhost:1337/',
// 	data: JSON.stringify(Stores),
// 	contentType: 'application/json; charset=utf-8',
// 	type: 'POST',
// }).done(function(data) {
// 	alert('done');
// });

// alert('end of script');
