'use strict';

const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

User.prototype.createInsertData = function (date, distance, timeTaken) {
  let newRunObject = new Run (date, distance, timeTaken);
  this.runs.push(newRunObject);
};
//let nick = new User('Nick', 'Nick@GA.com');
//nick.createInsertData('2016-01-22', 55, 80);

User.prototype.totalDistance = function() {
  let result = 0;

  for (let i = 0; i < this.runs.length; i++) {
    result += this.runs[i].distance;
  }
  return result;
};

module.exports = {
  'Run': Run,
  'User': User
};

// In node, use like so:
//
//    let runTracker = require('./lib/runs');
//    let jeff = new runTracker.User('Jeff', 'jeff@example.com');
