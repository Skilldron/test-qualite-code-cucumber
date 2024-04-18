const assert = require("assert");
const { Given, When, Then } = require("@cucumber/cucumber");
const passwordRegex = /^(?=.*[A-Z])(?=(?:.*[0-9]){2,})(?=.*[^A-Za-z0-9]).{8,}$/;

function isItFriday(today) {
  return today === "Friday" ? "TGIF" : "Nope";
}

Given("today is {string}", function (givenDay) {
  this.today = givenDay;
});

When("I ask whether it's Friday yet", function () {
  this.actualAnswer = isItFriday(this.today);
});

Then("I should be told {string}", function (expectedAnswer) {
  assert.strictEqual(this.actualAnswer, expectedAnswer);
});


// Feature path: features/user_creation.feature 

Given("email is {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  this.email = string;
});

Given("Password is {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  this.password = string;
});

When("I try to create a new user", function () {
  if (passwordRegex.test(this.password)) {
    this.code = "201";
  } else {
    this.code = "400";
  }
});

Then("Return code should be {string}", function (string) {
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.code, string);
});


// Feature path: features/edit_password.feature

Given('password is {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  this.password = string;
});

When('I try to edit the password with {string}', function (string) {
  // Write code here that turns the phrase above into concrete actions
  this.newPassword = string;

  if (passwordRegex.test(this.newPassword)) {
    this.code = "200";
  } else {
    this.code = "404";
  }
});

Then('The response code should be {string} after modified', function (string) { 
  // Write code here that turns the phrase above into concrete actions
  assert.strictEqual(this.code, string);
});


// Feature path: features/delete_user.feature

let array = ["1"];

Given('user id is {string}', function (string) {
  this.id = string;
});

When('I try to delete existing user', function () {
  if (this.id !== "" && array.includes(this.id)){
    this.code = "200";
  } else {
    this.code = "403";
  }
});

Then('The response code should be {string} after delete', function (string) {
  assert.strictEqual(this.code, string);
});
