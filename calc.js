const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	const tokens = input.split(' ');
	
	const mathSymbol = tokens[0];
	const num1 = Number(tokens[1]);
	const num2 = Number(tokens[2]);
    
	console.log (!false)
    console.log ("=================================================================")
	console.log ("input" , input )
	console.log ("=================================================================")
	console.log	('tokens' , tokens ) 
	console.log ("=================================================================")
	console.log('mathSymbol', mathSymbol);
	console.log ("=================================================================")
	console.log('num1', num1);
	console.log ("=================================================================")
	if ( !isNaN(num2) ) {
		console.log('num2', num2);
	}
	
	if (mathSymbol === "+") {
		console.log (num1 + num2)
	} 
	else if (mathSymbol === "-") {	
	    console.log (num1 - num2)
	}
	else if (mathSymbol === "*") {
		console.log (num1 * num2)
	}
	else if (mathSymbol === "/") {
		console.log (num1 / num2)
	}
	else if (mathSymbol === "sqrt") {
		console.log (Math.sqrt (num1))
	}
	else { console.log ("Input not valid , you are dumb.")
	} 
	
	
	
	
	// This line closes the connection to the command line interface.
	reader.close()

});
//lukas is cool