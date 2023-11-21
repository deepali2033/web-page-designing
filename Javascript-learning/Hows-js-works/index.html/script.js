'use script'
          /////----- Hosting-practice -----/////

/*
 //variable  

console.log(me);
console.log(job);      
console.log(year);
var me='jonas'
 let job='student'
const year=2000
*/

//Function
console.log(addDecl(3,7))
// console.log(addExpr(7,4))
console.log(addArrow(3,4))
function addDecl(a,b){
    return a+b;
}
var addExpr=function(a,b){
    return a+b;
}
var addArrow=(a,b)=>a+b;