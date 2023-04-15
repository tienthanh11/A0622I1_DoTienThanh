// happy coding 👻

let a: number = 2.9;

let s: Student = {
  id: 1,
  name: "Nguyễn Văn A"
};

let xxx: [string, string, number] = ["Nguyễn Văn A", "5", 10];

enum Test {
  THU_HAI,
  THU_BA= "10",
  c
}

let arr: number[] = [1, 2, 3, 4, 5];

// arr.forEach(function(value) {
//   console.log(value);
// })


// arr.map(value => value * 2).forEach(value => console.log(value))

// arr.map(value => value * 2).filter(item => item > 5)
//   .filter(item => item < 10).forEach(value => console.log(value))



// setTimeout(function(){
//   console.log("Học");
// }, 2000);
//
// setTimeout(function(){
//   console.log("Lập");
// }, 2000);
//
//
// setTimeout(function(){
//   console.log("Trình");
// }, 2000);


// setTimeout(function(){
//   console.log("Học");
//   setTimeout(function(){
//     console.log("Lập");
//     setTimeout(function(){
//       console.log("Trình");
//     }, 2000);
//   }, 2000);
// }, 2000);

function usePromise() {
  return new Promise(function(resolve, reject){
    setTimeout(resolve, 2000);
  })
}

usePromise().then(resolve => {
  console.log("Học");
}).then(function() {
  return usePromise();
}).then(resolve => {
  console.log("Lập");
}).then(function() {
  return usePromise();
}).then(resolve => {
  console.log("Trình");
})

