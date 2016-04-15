/*
Looping a triangle:
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

for (var hash = "#"; hash.length < 8; hash+="#")
  console.log(hash);

/*
FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz", for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).
*/

var number = 1;
while (number <= 100) {
  if (number % 15 == 0)
    console.log("FizzBuzz");
  else if (number % 3 == 0)
  	console.log("Fizz");
  else if (number % 5 == 0)
    console.log("Buzz");
  else
    console.log(number);
  number = number + 1;
}

/*
Chess board

Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a “#” character. The characters should form a chess board.

Passing this string to console.log should show something like this:

 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
 # # # #
# # # #
When you have a program that generates this pattern, define a variable size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.

*/

var pattern = "";
for ( i = 1; i <= 8; i++ ) {
  for ( j = 1; j <= 8; j++ ) {
    if ((i + j) % 2 == 0)
      pattern += " ";
    else
      pattern += "#";
  }
  pattern += "\n";
}
console.log(pattern);
