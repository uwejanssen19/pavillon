/*
Beispiel für Geolocation modifiziert nach: Brian P. Hogan und Stefan Fröhlich: 
HTML5 & CSS3: Webentwicklung mit den Standards von morgen. Verlag: O'Reilly) 
*/  
$(function() {
        function finde_mich (){		 
        navigator.geolocation.getCurrentPosition(function(position) { 
      	  zeigePosition (position.coords.latitude, position.coords.longitude);
        }); 
     
        var zeigePosition = function(breite, laenge){
			var markierung = "&markers=color:red|label:Y|" + breite + "," + laenge;
			var bild = $("#geoloc_image");      
			var quelle = bild.attr("src") + markierung;
			quelle = quelle.replace("sensor=false", "sensor=true");
			bild.attr("src", quelle);
			};    
		};
	finde_mich();
	})
