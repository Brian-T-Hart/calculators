// --------------------------------------------------------------------------
// 	standard deviation
// --------------------------------------------------------------------------
function standardDeviation(nums) {
	var sum = 0;
  
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
  
	var average = sum/nums.length;
  	var sumSquares = 0;
  
	for (var j = 0; j < nums.length; j++) {
		sumSquares += ((nums[j] - average)*(nums[j] - average))
	}
  
	var variance = sumSquares / nums.length;
	var sd = Math.sqrt(variance);
  
	return ("standard deviation= " + sd);
  }
  
  console.log(standardDeviation([2,5,7,4]));


// --------------------------------------------------------------------------
//	standard deviation from sample set
// --------------------------------------------------------------------------
function standardDeviationSample(nums) {
	var sum = 0;
  
	for (var i = 0; i < nums.length; i++) {
		sum += nums[i];
	}
  
	var average = sum/nums.length;
  	var sumSquares = 0;
  
	for (var j = 0; j < nums.length; j++) {
		sumSquares += ((nums[j] - average)*(nums[j] - average))
	}
  
	var variance = sumSquares / (nums.length - 1);
	var sd = Math.sqrt(variance);
  
	return ("standard deviation from sample set= " + sd);
  }
  
  console.log(standardDeviationSample([2,5,7,4]));
  

// --------------------------------------------------------------------------
// 	Quadratic Formula
// --------------------------------------------------------------------------

function quadraticFormula(a,b,c) {
	if (a === 0 && b ===0) {
		return ('There is no variable to solve for in this equation.')
	}

	else if (a === 0) {
		var x = -c / b;
		return ('This equation is linear and x = ' + x)
	}

	else {
		var discriminant = b*b - 4*a*c;
		var x = ((-b + Math.sqrt(discriminant)) / (2*a));
		var y = ((-b - Math.sqrt(discriminant)) / (2*a));

		if (discriminant < 0) {
			return "No Real Solution"
		}

		else if (discriminant === 0) {
			return ('x = ' + x)
		}

		else {
			return ('x = ' + x + ', ' + y)
		}
	}
}

console.log(quadraticFormula(1,-8,15));