//Accepts the number and type from the user
let numberType;
let number;

//Variables for decimal to binary
let remainder;
let integerRemainder;
let binaryNumber = [];

integerRemainder = number;

//Variables for binary to decimal
let characters = [];
let decimalTotal;
let loopCount = 0;



  numberType = prompt("Is your number a denary or binary?: ").toLowerCase();
  number = prompt("Enter your number: ");

  //Variables for decimal to binary
  remainder;
  integerRemainder;
  binaryNumber = [];

  integerRemainder = number;

  //Variables for binary to decimal
  decimalTotal = 0
  loopCount = 0;

  //Decides what the given number is
  if (numberType == "denary") {

    //-----Decimal Number-----

    // Repetes through the loop until the remainder of the integer division is 0
    while (integerRemainder != 0 ){

      //Calculates the remainder of the diision
      remainder = integerRemainder % 2;

      //Appends the remainder(e.g.Binary NUmber) to the array
      binaryNumber.push(remainder);

      //Carries out integer division
      integerRemainder = Math.floor(integerRemainder/2);
    }
    //Outputs the final binary number as a string
    console.log(number + " is " + binaryNumber.join().replaceAll(",","") + " As A Binary Number");

  }
  else if (numberType == "binary") {
    //-----Binary Number-----

    //Loops through each digit in the number
    for (let i = (number.length-1); i >= 0 ; i--){

      //Multiplies the current diget by 2 to the power of the current loop count
      decimalTotal = decimalTotal + number[i] *1 *( 2 ** loopCount);

      //Increments the loop count by 1
      loopCount++;
    }

    //Outputs the denary number
    console.log(number + " Is "+ decimalTotal + "  As A Denary Number");

    }

