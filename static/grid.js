var photos = [
  "yellow_roses.jpg",
  "7a9ec4b6-f14a-4172-ba1d-9e518e560003.jpg",
  "48e2d14e-b259-43f7-ab2a-b2e63e474fc5.jpg",
  "7736c924-5b12-45e8-9d00-c0b2fd2b0d70.jpg",
  "b3381f7b-3a7d-4cbf-a44e-ba3f20c15519.jpg",
  // "big_pink_1.jpg",
  "big_pink_2.jpg",
  // "big_pink_7.jpg",
  "big_pink_8.jpg",
  "big_pink_9.jpg",
  "big_pink_10.jpg",
  "bouquet_2.jpg",
  "bouquet_3.jpg",
  "bouquet_4.jpg",
  "bouquet_5.jpg",
  "bouquet_6.jpg",
  "bouquet_7.jpg",
  "bouquet_8.jpg",
  "bouquet_9.jpg",
  "bouquet_10.jpg",
  "bouquet_11.jpg",
  "bouquet_12.jpg",
  // "ceramic_1.jpg",
  // "ceramic_2.jpg",
  "ceramic_3.jpg",
  "d6bec7f9-31d3-4c2f-8e58-39dcfadfa722.jpg",
  "dusty_2.jpg",
  "house_wedding_1.jpg",
  "house_wedding_2.jpg",
  "house_wedding_3.jpg",
  // "hydrangea_1.jpg",
  "hydrangea_2.jpg",
  "img-9658.jpg",
  // "lilac_1.jpg",
  "lilac_3.jpg",
  // "lilac_4.jpg",
  "little_pink_3.jpg",
  // "little_pink_4.jpg",
  "little_pink_6.jpg",
  // "louboutin_2.jpg",
  "louboutin_3.jpg",
  "poppy_vase.jpg",
  // "purple_1.jpg",
  "purple_3.jpg",
  "screen_shot_2019-04-30_at_10.50.29_am_copy.jpg",
  "screen_shot_2019-04-30_at_10.57.27_am_copy.jpg",
  "screen_shot_2019-04-30_at_10.58.37_am_copy.jpg",
  "screen_shot_2019-04-30_at_11.03.30_am_copy.jpg",
  "screen_shot_2019-04-30_at_11.04.30_am_copy.jpg",
  "screen_shot_2019-04-30_at_11.05.18_am_copy.jpg",
  "screen_shot_2019-04-30_at_11.06.14_am_copy.jpg",
  "screen_shot_2019-04-30_at_11.06.38_am_copy.jpg",
  "tropical_2.jpg",
  "tropical_3.jpg",
  // "tropical_4.jpg",
  "vase_1.jpg",
  "vase_2.jpg",
  "vase_3.jpg",
  // "vase_4.jpg",
  "vase_5.jpg",
  "IMG-9530.JPG",
  "IMG-9542.JPG"
];


/**
 * Randomly shuffle an array
 * https://stackoverflow.com/a/2450976/1293256
 * @param  {Array} array The array to shuffle
 * @return {String}      The first item in the shuffled array
 */
var shuffle = function (array) {

	var currentIndex = array.length;
	var temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {
		// Pick a remaining element...
		randomIndex = Math.floor(Math.random() * currentIndex);
		currentIndex -= 1;

		// And swap it with the current element.
		temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;

};

// Shuffle lunch
shuffle(photos);


var i;




// $( document ).ready(function() {

  for (i = 0; i < photos.length; i++) {

    var gridItem = '<div  id="'
        + i +
        '" class="grid-item grid-item--a '
        + photos[i] +
        '"><img src="photos/'
        + photos[i] +
        '"/></div></div>';

// $( "p").append( "123" );

   // document.write(gridItem);
   $( "#grid").append( gridItem );



  }


// });


// document.write('</div>');
