'use strict';

var saraLiteral = {
  course: '201d48',
  enrolled: true,
  instructors: ['Sam', 'Lena'],
  first: 'Sara',
  lastName: 'Haynes',
  preferredName: 'Sara without an H',
  homeTown: 'Seattle',
  codeNinja: true,
  introduction: function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  }
};

// We would need 130 lines of code to model the entire class in object literals like this. There is a better way.

// Constructor function syntax

// function ConstructorFunctionName (parameter1, parameter2) {
//   this.property = parameter1;
//   this.property2 = parameter2;
//   this.staticProperty1 = 'ExampleString';
//   this.method1 = function () {
//     console.log('do stuff');
//   };
// }

//====================
// Student Constructor
//====================

var allStudents = [];

function Student(firstName, lastName, preferredName, homeTown) {
  this.course = '201d48';
  this.enrolled = true;
  this.instructors = ['Sam', 'Lena'];
  this.firstName = firstName;
  this.lastName = lastName;
  this.preferredName = preferredName;
  this.homeTown = homeTown;
  this.codeNinja = true;
  this.introduction = function () {
    return 'Hi, my name is ' + this.firstName + ' ' + this.lastName + ', but you can call me ' + this.preferredName + '. I am from ' + this.homeTown + '.';
  };
  allStudents.push(this);
}

new Student('Sara', 'Haynes', 'Sara without an H', 'Seattle');
new Student('Lillian', 'Gales', 'Lillian', 'Pawtucket');
new Student('Paula', 'Cruz', 'Paula', 'Mt. Rainier');

// Constructor = 13
// Each instance = 1 * 10
// Total lines to model the entire class: 23

//==========================
//Student Prototype Property
//==========================
