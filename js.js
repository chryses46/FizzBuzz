$(document).ready(function() {
	for (var int = 1; int <= 50; int++) //set var "int" to 1,  so long as int is less than or equal to 50, increment int by 1
	{
		if (int % 3 == 0 && int % 5 == 0) // if the remainder of the division of 3 and 5 =0>
		{
			$('<p></p>').appendTo("body").html('<p>' + "FizzBuzz!" + '</p>');
		} 
		else if (int % 5 == 0) //if the remainder of the division of 5 = 0 >
		{
			$('<p></p>').appendTo("body").html('<p>' + "Buzz!" + '</p>');
		}
		else if (int % 3 == 0)//if the remainder of the division of 3 = 0 >
		{
			$('<p></p>').appendTo("body").html('<p>' + "Fizz!" + '</p>');
		}
		else $('<p></p>').appendTo("body").html('<p>' + int + '</p>');
		//console.log(int);
		
	}
}); 