// Constructor
function Person(name, employeeNumber, salary, rating) {
  this.name = name;
  this.empNumber = employeeNumber;
  this.salary = salary;
  this.rating = rating;
}

var atticus = new Person("Atticus", "2405", "47000", 3);
var jem = new Person("Jem", "62347", "63500", 4);
var boo = new Person("Boo", "11435", "54000", 3);
var scout = new Person("Scout", "6243", "74750", 5);

var employees = [atticus, jem, boo, scout];

// Calculate bonsues
for(var i = 0; i < employees.length; i++) {
	console.log(calculateBonus(employees[i]));
}

function calculateBonus(empInfo) {
  var currentSalary = Math.round(parseFloat(empInfo.salary));
	var processedEmployee = [];
	var bonus = 0;
	var bonusPercentage = 0;
	var adjSalary = currentSalary;
	var totalBonus = bonus;

	// calc bonus percentage
	switch(empInfo.rating) {
		case 0:
		case 1:
		case 2:
			bonusPercentage = 0;
			break;
		case 3:
			bonusPercentage = .04;
			break;
		case 4:
			bonusPercentage = .06;
			break;
		case 5:
			bonusPercentage = .10;
			break;
		default:
			bonusPercentage = 0;
	}

  // adjust with additional rules
	bonusPercentage = adjustBonusPercentage(empInfo.empNumber, bonusPercentage, currentSalary);

	// build processed array
	processedEmployee[0] = empInfo.name;
	processedEmployee[1] = bonusPercentage;

	bonus = Math.round(bonusPercentage * currentSalary);
	adjSalary = currentSalary + bonus;

	processedEmployee[2] = adjSalary;
	processedEmployee[3] = bonus;

	return processedEmployee;
} // end calculateBonus

function adjustBonusPercentage(empNumber, bonusPercentage, currentSalary) {
	if(empNumber.length == 4) {
		bonusPercentage += .05;
	}

	if(currentSalary > 65000) {
		bonusPercentage -= .01;
	}

  // limit to max bonus percent
	if(bonusPercentage > .13) {
		bonusPercentage = .13;
	}

	return bonusPercentage;
}
