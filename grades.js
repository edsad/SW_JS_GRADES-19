// console.log("grades js is working");

var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];

var gradeA = [];
var gradeB = [];
var gradeC = [];
var gradeD = [];
var gradeF = [];

  for (var i = 0; i < scores.length; i++) {
  // console.log(scores[i]);
  if (scores[i] <= 100 && scores[i] > 91){
    gradeA++;
  } else if (scores[i] <= 90 && scores[i] > 81) {
    gradeB++;
  } else if (scores[i] <= 80 && scores[i] > 71) {
    gradeC++;
  } else if (scores[i] <= 70 && scores[i] > 61) {
    gradeD++;
  } else if (scores[i] <= 60 && scores[i] > 0) {
    gradeF++;
  }
};
// console.log(gradeA, gradeB, gradeC, gradeD, gradeF);

console.log("There are " + gradeA + " grade A's, " + gradeB + " grade B's, " + gradeC + " grade C's, " + gradeD + " grade D's, " + "and " + gradeF + " grade F's.");

console.log("The lowest grade is " + Math.min.apply(null, scores));

console.log("The highest grade is " + Math.max.apply(null, scores));

// Added this part to the DOM just for fun!

var ed = ("There are " + gradeA + " grade A's, " + gradeB + " grade B's, " + gradeC + " grade C's, " + gradeD + " grade D's, " + "and " + gradeF + " grade F's.");

var lorie = ("The lowest grade is " + Math.min.apply(null, scores));

var bella = ("The highest grade is " + Math.max.apply(null, scores));


var wow = document.getElementById("rightHere");
wow.innerHTML += ed + " " + lorie + " and " + bella + ".";
