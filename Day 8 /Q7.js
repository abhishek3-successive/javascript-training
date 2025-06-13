// for (var i = 0; i < 10; i++) {
// setTimeout(function() { console.log(i); }, 1000); }

for (let i = 0; i < 10; i++) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

// var is function-scoped  
// the value of i is shared by all iterations of the loop, 
// and only one variable i exists throughout the loop.
// due to settimout it shows the 10 in 10 times
// where let is s block-scoped, which means that each iteration of the loop creates a new,
//  independent instance of i.