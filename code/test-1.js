$(document).ready(
				function() {
					$("#zoom_01").elevateZoom({
						gallery : 'gal1',
						cursor : 'pointer',
						galleryActiveClass : 'active',
						imageCrossfade : true,
						loadingIcon : 'http://www.elevateweb.co.uk/spinner.gif'
					});

					// pass the images to Fancybox
					$("#zoom_03").bind("click", function(e) {
						var ez = $('#zoom_03').data('elevateZoom');
						$.fancybox(ez.getGalleryList());
						return false;
					});

					$("#select").change(function(e) {
						var currentValue = $("#select").val();
						changeImage(currentValue);
					});

					var currentValue = 1;
					var timer;

					function changeImage() {
						currentValue += 1;
						currentValue %= 4;
						if (currentValue == 1) {
							smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image1.png';
							largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image1.jpg';
						}
						if (currentValue == 2) {
							smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image2.png';
							largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image2.jpg';
						}
						if (currentValue == 3) {
							smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image3.png';
							largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image3.jpg';
						}
						if (currentValue == 4) {
							smallImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/small/image4.png';
							largeImage = 'http://www.elevateweb.co.uk/wp-content/themes/radial/zoom/images/large/image4.jpg';
						}
						// Example of using Active Gallery
						$('#gal1 a').removeClass('active').eq(currentValue - 1)
								.addClass('active');

						var ez = $('#zoom_01').data('elevateZoom');

						ez.swaptheimage(smallImage, largeImage);
					}

					startTimer();

					function startTimer() {
						timer = window.setInterval(changeImage(), 1000);

					}

					function stoptupian() {
						window.clearInterval(timer);
					}

				});
