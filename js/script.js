// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
function enterClicked() {
  const firstName = document.getElementById("first-name").value
  const userAge = parseInt(document.getElementById("age-entered").value)
  document.getElementById("answer").innerHTML = "Your info is: " + firstName + ", age " + userAge + "."
}
