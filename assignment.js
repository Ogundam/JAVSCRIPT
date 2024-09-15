// let studentScore = prompt("enter your final average score")

// if(studentScore >= 80 && studentScore <= 100 ){
//     alert (`A`)
// }
// else if(studentScore >= 70 && studentScore <= 79){
// //     alert (`B`)
// // }
// // else if(studentScore >= 60 && studentScore <= 69){
// //     alert(`C`)
// // }
// // else if(studentScore >= 50 && studentScore <= 59){
// //     alert (`D`)
// // }
// // else if(studentScore >= 0 && studentScore <= 49){x
// //     alert (`F`)
// // }
// // else{
// //     alert(`invalid score entered`)
// // }

// // let month = prompt(`enter the month that you are `)

// // if (month == 'September' || month == 'November' || month == 'October')
// //     {
// //     alert("Season is Autum");
// // }
// // else if(month == 'December' || month == 'February' || month == 'January'){
// //     alert(`Season is Winter`);
// // }
// // else if(month == 'March' || month == 'April' || month == 'May'){
// //     alert(`Season is Spring`);
// // }
// // else if(month == 'June' || month == 'July' || month == 'August'){
// //     alert(`Season is Summer`);
// // }
// // else{
// //     alert(`No Data`)
// // }

// let i = 0;
// for(let i = 0; i <= 10; i++){
//     console.log(i*i);
// }

// let g = 0;
// for(let g = 0; g <= 100; g++){
//     console.log(g+g);
// }

// let add = 0;
// for(let d = 1; d <= 100; d++)
//     {if(d % 2 === 0)
//         console.log(add += d);
// }

// let sum = 1;
// for(let h = 2; h <= 100; h++)
//     {if(h % 2 === 0)
//     console.log(sum += h);
// }


// let b;
// let sumx = 0;
// let sumv = 1;
// for(b = 1; b <= 100; b++){
//    if(b % 2 == 0) {
//         sumx += b
//     }
//     else{
//         sumv += b
//     }
//     // console.log(sumx, sumv);
//     console.log([sumx, sumv]);
// }

// let dev = ["HTML", "CSS", "JS", "React", "Redux", "Node", "Express", "MongoDB"]

// for(let u = 0; u < 8; u++){
//     console.log(dev[u]);
// }

// let o = 0;
// while( o < 8){
//     console.log(dev[o]);
//     o++;
// };

// let fruits = [`banana`, `orange`, `mango`, `lemon`]

// let r = "";

// for(let s = fruits. length -1; s >= 0; s--){
//     console.log(r = fruits[s]);
// }




// for(let w = 0; w <=10; w++){
//     console.log(`${w} * ${w} = ${w * w}`);
// }

// let sum = 1;
// for(let y = 0; y <= 100; y++){
//     sum = sum + y
// }
// console.log(sum);

// let even = 0;
// let odd = 0;
// let result = []
// for(let b = 0; b <= 100; b++){
//     if(b % 2 == 0){
//         even = even + b;
//     }else if(b % 2 == 1){
//         odd = odd + b;
//     }
   
// }
// console.log(even);
// console.log(odd);

// result.push(even);
// result.push(odd);

// console.log(result);

// const languages = ["html", "css", "js", "jquery"]
// console.log(languages.reverse());

// // for(let i = 0; i < languages.length; i++ ){
// //     console.log(languages[i]);
// // }

// for(let each of languages){
//     console.log(each);
// }

// let datas = []

// for(let i = 0; i < 4; i++){
//     let lastItem = languages.pop()
//     datas.push(lastItem)
//     console.log(datas);
// }
// console.log(datas);

// Assignment 2
// const countries = [`Albania`, `Bolivia`, `Canada`, `Denmark`, `Ethiopia`, `Finland`, `Germany`, `Hungary`, `Ireland`, `Japan`, `Kenya`]

// let check = countries.filter ((country) => country.endsWith("land") ) 
// console.log([check]);

// let a = '';
// let longest;
// for(let i = 0; i<countries.length; i++){
//     if(countries[i] > a){
//         let a = countries[i].length;
//         longest = countries[i];
//     }
// }
// console.log(longest);
 
// function longestCountryName(countryName){
//     return countryName.reduce(function(lname, country){
//         return lname.length > country.length ? lname : country ;
//     }, "");
// }
// console.log(longestCountryName([`Albania`, `Bolivia`, `Canada`, `Denmark`, `Ethiopia`, `Finland`, `Germany`, `Hungary`, `Ireland`, `Japan`, `Kenya`]));

const countries =  [`Albania`, `Bolivia`, `Canada`, `Denmark`, `Ethiopia`, `Finland`, `Germany`, `Hungary`, `Ireland`, `Japan`, `Kenya`]

function longestCountryName(countryName) {
    if(countryName.length === 0) {
        return "Input array is empty"
    }    
}
