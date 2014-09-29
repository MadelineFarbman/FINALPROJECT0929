// a click event vvvvvv
// when you hit the submit button (call both of those functions)

// a function vvvvv
// find out what kind of bread is selected (which option in #bread is selected)
// get the value of #bread selected option
// add a class to div.bread (the slices) that is the same as the value of the selected bread


// a function vvvvv
// find out what toppings are selected
// get the values of the selected checkboxes
// for each selected topping, append an img with the path images/[the selected topping].png to the toppings div


$( document ).ready(function() {
    console.log( "ready!" );
    $("#submit").click(function(e){
    	e.preventDefault();
    	breadColor();
    });
    $("input:checkbox").click(function() {
		var topping = $( this ).val();
		console.log(topping);
		$(".toppings").append('<img src="./images/'+topping+'.png">');
    })
});

function breadColor() {
	var breadColor = $( "#bread" ).val();
	$(".bread").addClass( breadColor );
}


//why didn't this work?!?!?! vvvvv

// function addTopping() {
// 	var topping = $( this ).val();
// 	console.log(topping);
// }

//maybe make separate function that is removeTopping??????