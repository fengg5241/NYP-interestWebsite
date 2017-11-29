$(document).ready(function () {
			$("#zoom_01").elevateZoom({gallery:'gal1', 
cursor: 'pointer', galleryActiveClass: 'active', imageCrossfade: false, 
loadingIcon: 'http://www.elevateweb.co.uk/spinner.gif',
onZoomedImageLoaded:function(z){
	$( ".zoomContainer" ).on( "mouseover", stopTimer );
	$( ".zoomContainer" ).on( "mouseout", startTimer );   
}

}); 

//pass the images to Fancybox
	var currentValue=0; 
$(".zoom_03").bind("click", function(e) {  
stopTimer();
currentValue = parseInt($(this).attr("data-index"));
	console.log("currentValue: " + currentValue);
  var ez =   $('#zoom_03').data('elevateZoom');	
  startTimer();
	$.fancybox(ez.getGalleryList());
	
  return false;
}); 


     $("#select").change(function(e){
		//var currentValue = $("#select").val();
		changeImage();
	});
	

	var timer;
	var bigPic =   $('#zoom_01').data('elevateZoom');	  
		function changeImage(){
		
		currentValue +=1;
			currentValue%=4;
			console.log("currentValue after: " + currentValue);
		   if(currentValue == 0){    
		   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image1.png';
		   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image1.jpg';
		   }
		   if(currentValue == 1){    
		   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image2.png';
		   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image2.jpg';
		   }
		   if(currentValue == 2){    
		   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image3.png';
		   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image3.jpg';
		   }
		   if(currentValue == 3){    
		   smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image4.png';
		   largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image4.jpg';
		   }
			// Example of using Active Gallery
			
			$("#zoom_01").addClass("nypFade");
			$('#gal1 a').removeClass('active').eq(currentValue-1).addClass('active');		
			bigPic.swaptheimage(smallImage, largeImage); 
			
		}
			
			

	startTimer();

	
	
	
	function startTimer(){
		timer=window.setInterval(function(){changeImage()},3000);
	}
	
	function stopTimer(){
		$("#zoom_01").removeClass("nypFade")
		window.clearInterval(timer);
	}
	

	

	
	
	
	
	
 });
