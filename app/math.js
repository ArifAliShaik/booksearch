// let add = (a,b) => {
//   return a+b;
// };
//
// let multiply = (a,b) => {
//   return a * b;
// };
//
// export { add, multiply };
//
// export default multiply;

// const root = 'https://jsonplaceholder.typicode.com/posts?userId=1';
//
// fetch(root, {method: "GET"})
//   .then(response => response.json())
//   .then(json => console.log(json));

// Closures
// let product = x => y => x*y ;
//
// let a = product(5);
// console.log(a);
//
// console.log( a(20) );

// let contains = (word, letter) => {
//   let word_arr = word.split("");
//   console.log(word_arr);
//   // The best practice here is first making any string into array, and then passing this array to Set Constructor
//   //  to make it a Set Structure from an array Structure
//
//   let word_set = new Set(word);
//   console.log(word_set);
//   if( word_set.has(letter)){
//     console.log(true);
//   }else {
//     console.log(false);
//   }
// }
//
//
// contains('Loremipsumdolor', 'z');

// let chars = 'Loremipsumdolor lakmsdpasmd pasomda sitametconsectetura  dipisicingelitseddoeiusmodtemp orincididuntutlaboreetdolore';
//
// let chars_array = chars.split("");
// let chars_set = new Set( chars_array );
//
// console.log( chars_set );

// class Animal {
//   constructor(name, height){
//     this.name = name;
//     this.height = height;
//   }
//
//   hello(){
//     console.log(`Hi! I'm ${this.name} from the Animal World`);
//   }
// }
//
// class Lion extends Animal {
//   constructor(name, height, color){
//     super(name, height);
//     this.color = color;
//   }
//
//   hello(){
//     console.log(`Hi! I'm ${this.name} and I have ${this.color} color`);
//   }
// }
//
// let son = new Lion('Zazu', 2, 'golden');
// console.log(son);
// son.hello();
//

// import { multiply,add } from './math';
//
// console.log( multiply(2,5) );
// console.log( add(10,46) );
//

// let values = [10, 30, 60, 90];
//
// let double = values.filter( (n) => n >= 90 );
//
// console.log(double);

// Template Literals, or String Literals
// // let a = 'Hyderabad';
// // let b = `Tomorrow I am leaving from ${a}`;
// // console.log(b);

// let limit = 100;
// let limit = 600;
// console.log(limit);
