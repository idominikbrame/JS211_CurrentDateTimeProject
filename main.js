// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
function num2string() {
  let convertThis = document.querySelector("#number").value; 
  convertThis.toString();
  document.querySelector("#converted").innerHTML= "Your string is: " + "'" + convertThis + "'";
}


// Write a JavaScript program to convert a string to the number.

function string2num() {
  let convertThis = document.querySelector("#numberString").value; 
  Number.convertThis;
  document.querySelector("#convertedNumber").innerHTML= "Your number is: " + convertThis;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
  function whichType() {
    let typeinput = document.getElementById("whichType").value;
    let result = document.getElementById("showType")

    if(parseInt(typeinput) == Number) {
      result.innerHTML = "Number";
    } else if (typeinput.toLowerCase() == "true" || typeinput.toLowerCase() == "false"){
      result.innerHTML = "Boolean";
    } else if (parseInt(typeinput) == NaN) {
      result.innerHTML = "NaN or Null";
    } else if (typeinput == "") {
      result.innerHTML = "undefined";
    } else {
      result.innerHTML = "string";
    }
  }
 
  
// Write a JavaScript program that adds 2 numbers together.

function aPlusB () {
  let numA = document.querySelector("#numberA").value;
  let numB = document.querySelector("#numberB").value;
  let result = parseInt(numA) + parseInt(numB);
  document.querySelector("#result").innerHTML = result;
}

// Write a JavaScript program that runs only when 2 things are true.
function truthy() {
  let truthy1 = document.querySelector("#truthyOrNah1").value;
  let truthy2 = document.querySelector("#truthyOrNah2").value;
  if (parseInt(truthy2) && parseInt(truthy1)) {
    document.querySelector("#isTruthy").innerHTML = "SUCCESS"
  } else if (truthy1 !==  "false" && truthy2 !== "false" && truthy1 !== "0" && truthy2 !== "0"){
    document.querySelector("#isTruthy").innerHTML = "SUCCESS"
  }  else {
    alert("Please enter two truthy values")
  }
}


// Write a JavaScript program that runs when 1 of 2 things are true.

function oneTruthy() {
  let truthy1 = document.querySelector("#oneTruthy1").value;
  let truthy2 = document.querySelector("#oneTruthy2").value;
  if (parseInt(truthy2) && parseInt(truthy1)) {
    document.querySelector("#isOneTruthy").innerHTML = "SUCCESS"
  } else if (truthy1 == "false" || truthy2 == "false"){
    alert("Please enter at least one truthy value")
  } else if (truthy1 === "0" || truthy2 === "0"){
    alert("Please enter at least one truthy value")
  }  
  else {
    document.querySelector("#isOneTruthy").innerHTML = "SUCCESS"
  }
}

// Write a JavaScript program that runs when both things are not true.  
function noTruthy() {
  let truthy1 = document.querySelector("#noTruthy1").value;
  let truthy2 = document.querySelector("#noTruthy2").value;
  if (parseInt(truthy2) && parseInt(truthy1)) {
    alert("Please enter no truthy values")
  } else if (truthy1 === "false" && truthy2 === "false"){
    document.querySelector("#isNoTruthy").innerHTML = "NO TRUTHY"
  } else if (truthy1 === "0" && truthy2 === "0"){
    document.querySelector("#isNoTruthy").innerHTML = "NO TRUTHY"
  }  
  else {
    document.querySelector("#isNoTruthy").innerHTML = "NO TRUTHY"
  }
}


// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

whichType(true);
whichType(false);
whichType("sat");
whichType(11);
whichType(null);
whichType(NaN);
whichType(undefined)


// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
