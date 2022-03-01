const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

console.log( employees );


  


function employeeCompensation(){

  let employeeCompensationDetails = [];
  

  for (let employee of employees) {

  let totalCompensation = (employee.annualSalary * bonusPercentage(employee.reviewRating, employee.employeeNumber, employee.annualSalary)) + Number(employee.annualSalary)
  let totalBonus = Number(employee.annualSalary) * bonusPercentage(employee.reviewRating, employee.employeeNumber, employee.annualSalary)

  let newEmployeeInfo = {
    name: employee.name,
    bonusPercent: bonusPercentage(employee.reviewRating, employee.employeeNumber, employee.annualSalary), // because this is a function no param was originally in ()
    totalCompensation: (totalCompensation).toFixed(2),
    totalBonus: (totalBonus).toFixed(2)
  }

employeeCompensationDetails.push(newEmployeeInfo)
};
return console.log(employeeCompensationDetails);  

}


// final product will look like: 

  // {
  //   name: employees[i].name,
  //   bonusPercent: bonusPercentage (), // because this is a function no identifier
  //   totalCompensation: (employees[i].annualSalary * bonusPercentage()) + employees[i].annualSalary,
  //   totalBonus: (employees[i].annualSalary * bonusPercentage())
  // }

//one function to loop through the current array that pushes employee information into a new object
//one function that calculates employee bonuses

//function processEmployeeBonus(array) {
// for of employees
//  bonusPercentage function()
//  push bonus to new object
//}

function bonusPercentage (reviewRating, employeeNumber, annualSalary) {
  let bonus = 0;

if (reviewRating < 2) {
  bonus = 0;
} if (reviewRating === 3)  {
  bonus += 0.04; 
} else if (reviewRating === 4) {
  bonus += 0.06;
} else if (reviewRating === 5) {
  bonus += 0.10;
}

if (employeeNumber.length === 4) {
  bonus += 0.05;
}

if (annualSalary > 65000) {
  bonus -= 0.01;
}

if (bonus > 0.13){
  bonus = 0.13;
}

if (bonus < 0){
  bonus = 0;
}  

return bonus;
}

console.log(employeeCompensation());

//maxBonus === 13% minBonus === 0% 

// console.log(bonusPercentage(employees[0].reviewRating, employees[0].employeeNumber, employees[0].annualSalary));


// && if .employeeNumber.length === 4 / output bonus 0.05
// if .annualSalary >= 65000 subtract -= 0.01 //decrease 1%
// maxBonus === 13% minBonus === 0%                                     
// }

// final product will look like: 
// let employeeCompensation = [
//   {
//     name: '',
//     bonusPercent: '',
//     totalCompensation: '', 
//     totalBonus: ''
//   }
// ]