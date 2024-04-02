// Copyright (c) 2024 Kai Nguyen All rights reserved
//
// Created by: Kai Nguyen
// Created on: Mar 2024
// This file contains the JS functions for index.html
function enterClicked() {
  const streetName = document.getElementById("street-name").value
  const userNumber = parseInt(document.getElementById("number-entered").value)
  document.getElementById("answer").innerHTML = "Your info is: " + userNumber + ", on " + streetName + "."
}
