// async function getData() {
//    setTimeout(function() { return [1, 2, 3, 4, 5]; }, 1000); }
// getData().then(function(data) {
//    console.log(data);
// });

async function getData() {
  setTimeout(function () {
    return [1, 2, 3, 4, 5];
  }, 1000);
}          // not understanding
getData().then(function (data) {
  console.log(data);
});

