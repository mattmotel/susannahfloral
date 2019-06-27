var photos = [
"big_pink_2.jpg",
"big_pink_1.jpg",
"big_pink_6.jpg",
"big_pink_7.jpg",
"big_pink_8.jpg",
"big_pink_9.jpg",
"big_pink_10.jpg",
"bouquet_1.jpg",
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
"ceramic_1.jpg",
"ceramic_2.jpg",
"ceramic_3.jpg",
"dusty_2.jpg",
"dusty_4.jpg",
"hydrangea_1.jpg",
"hydrangea_2.jpg",
"lilac_1.jpg",
"lilac_2.jpg",
"lilac_3.jpg",
"lilac_4.jpg",
"little_pink_2.jpg",
"little_pink_3.jpg",
"little_pink_4.jpg",
"little_pink_5.jpg",
"little_pink_6.jpg",
"louboutin_1.jpg",
"louboutin_2.jpg",
"louboutin_3.jpg",
"purple_1.jpg",
"purple_2.jpg",
"purple_3.jpg",
"purple_4.jpg",
"tropical_1.jpg",
"tropical_2.jpg",
"tropical_3.jpg",
"tropical_4.jpg",
"vase_1.jpg",
"vase_2.jpg",
"vase_3.jpg",
"vase_4.jpg",
"vase_5.jpg"
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

    var gridItem = '<div id="'
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
