var cryptosquare = function(inputString) {

var inputStringLength = inputString.length;
console.log("inputStringLength: " + inputStringLength);

var squareRoot = Math.sqrt(inputStringLength);
  console.log("squareRoot: " + squareRoot);

  squareRoot = Math.ceil(squareRoot);
  console.log("squareRoot ROUYNDED: " + squareRoot);
  var remainder = inputStringLength - (squareRoot * squareRoot);
  console.log("remainder: " + remainder);

  var splits = inputString.match(new RegExp('.{1,' + squareRoot + '}', 'g')); //insert separator every nth place

  for (var i = 0; i<splits.length; i++){
  console.log(splits[i]); //split the string and create an array
  }

  return;

  }



$(document).ready(function() {
  $("form#cryptosquare").submit(function(event) {
    inputString = $("input#input1").val();

    var result = cryptosquare(inputString);

      $(".answer").text("result: " + result);

    $("#result").show();
    event.preventDefault();
  });
});
