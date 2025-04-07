// let anyNumber  = prompt("ededi daxil et")


// let number = anyNumber % 20

//     if (anyNumber>10) 
//     {
//         alert ( number); 
//     }
//     else{
//         alert( number)
//     }



// for (let a=0; a<100; a++ ){
//     if(a%3==0 && a%5==0){
//     console.log(a)

//     }
// }






// let inp=document.getElementById("inp")

// function deyerTap(){
// //     console.log(inp.value)
// // }


// let inp1=document.getElementById("inp1")
// let inp2=document.getElementById("inp2")

// function hesapla(){
//     console.log(inp1.value+inp2.value)
// }






// function kvadratinPerimetri (teref){
//     return 4 * teref;
// }
// console.log(kvadratinPerimetri(5));




let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
let numbers2 = [1, 22, 33, 44, 55, 66, 77, 88, 99]


// for (let index = 0; index < numbers.length; index++) {

//   if(numbers[index]%3===0){
//     console.log(numbers[index])
//   }

// // }
// function eded(arr){
//     for (let i = 0; i < arr.length; i++) {
//         if(arr[i]%3===0){
//             console.log(arr[i])
//         }
//     }


// }

// eded(numbers)
// eded(numbers2)



// funvition eded (arr) {
//     for ( let i = 0; i < arr.lenght ; i==)
// }

// let users =[
//     {
//         name: "lamiye"
//     }
// ]
// arraty[]


// let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// let b = [4, 6, 7, 8, 9, 10, 20, 120, 333, 444]
// var c = [];

// for (let index = 0; index < a.length; index++) {
//     for (let k = 0; k < b.length; k++) {
//         if (a[index] === b[k]) {
//             c.push(b[k])
//         }

//     }
// }

// // let a = [1,2, "&", "%", "elcin" ,true, false, "marvan", "guncissn",66];
// // let b= [ 1,2,4, "@", true, false, "guncin", 777,888,"marvan"];

 

//  let a = [1,2,3,4,5,];
//  let b=[4,5,6,7,8,9,];
// // for(let i=0; i<a.length;i++){
// //     for(let j=0;j<b.length;j++){
// //         if(a[i]== = b[j]){
// //             netice.push(a[i])
// //         }
// //     }
// // }
// // comsole.log(netice)

// class Person {
//     constructor (age){
//     this.age=age
// }
   
// }
// let person= new Person (20    )
// console.log (person.age)



// Person.prototype.getFullYear=function(){
//     console.log(2025-this.age)
// }

// person.getFullYear()



// let str="lamiye"
// for (let i=0; i<str.length;i++){
//     if (i%2==1){
//         console.log(str[i].toLowerCase())
//     }
//     else
//     console.log(str[i].toUpperCase())


    
// }
  

class Animals {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    info() {
        console.log(this.name + " " + this.age + " yaşındadır");
    }
}



class AnimalsCategory {
    constructor(type) {
        this.type = type;
    }

    showCategory() {
        console.log("Heyvanın kateqoriyası: " + this.type);
    }
}


let myAnimal = new Animals("Aslan", 5); 
let myCategory = new AnimalsCategory("Vəhşi");

myAnimal.info();             
myCategory.showCategory();   


class animals {
  constructor(name, age) {
      this.name = name;
      this.age = age;
  
  }

  typesir(){
  if(this.name==="lion"){
      console.log("sir hemise sirdir")
  }
  else(
      console.log(this.name)
  )
  }
}
let animal= new animals("lion");

animal.typesir();



  
  // function AnimalsCategory(type) {
  //   this.type = type;
  // }
  

  // AnimalsCategory.prototype.getCountryByCategory = function() {
  //   const categoryMapping = {
  //     "wild": "Kenya, South Africa, India",
  //     "domestic": "Worldwide",
  //     "other": "No specific region"
  //   };
  
  //   return categoryMapping[this.type.toLowerCase()] || "Unknown region";
  // };
  
  
  // let wildAnimal = new AnimalsCategory("wild");
  // console.log(wildAnimal.getCountryByCategory()); 
  
 



  




  