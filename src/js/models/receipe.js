import axios from 'axios';



export default class receipe{
//Getting Receipe Id from Controller
constructor(id){
	
this.id=id;
}

//Getting Receipes
async getreceipe(){
try{

const res =await axios(`https://forkify-api.herokuapp.com/api/get?rId=${this.id}`);
this.ingredients =res.data.recipe.ingredients;




}
catch(error)
{
console.log(error);
}};

calculatetime(){

const numImg=this.ingredients.length;
const period =Math.ceil(numImg/3);
this.time=period*15;
}

calculateserving(){
this.serving =4;
 


}

parseingrdeient(){

     const unitlong = ['tablespoons', 'tablespoon', 'ounces', 'ounce', 'teaspoons', 'teaspoon', 'cups', 'pounds'];
        const unitsShort = ['tbsp', 'tbsp', 'oz', 'oz', 'tsp', 'tsp', 'cup', 'pound'];
        const units = [...unitsShort, 'kg', 'g'];

  let newingredient=this.ingredients.map(el=>{

let ingredients=el.toLowerCase();
  	

  
//look for the ingredient in unitlong array
unitlong.forEach((unit,i)=>{

ingredients=ingredients.replace(unit,unitsShort[i]);




})

//remove parenthesis
    ingredients = ingredients.replace(/ *\([^)]*\) */g, ' ');
//ingredients =ingredients.replace(/[()]/g, ''); 
console.log(ingredients);
const arry=ingredients.split(' ');
console.log(arry);
const unitIndex =arry.findIndex(el2=>unitsShort.includes(el2));
console.log(unitIndex);
let obj;

if(unitIndex>-1){


const arrycount=arry.slice(0,unitIndex);

let count;
if(arrycount.length===1){
count=parseInt(arry[0],10);
}
else {
count= eval(arry.slice(0,unitIndex).join('+'));
}
obj={
count,
unit:arry[unitIndex],
ingredients:arry.slice(unitIndex+1).join(' ')

}}
else if (parseInt(arry[0],10))
{
obj={
count:parseInt(arry[0],10),
unit:'',
ingredients:arry.slice(1).join('')
}}

else if(unitIndex===-1) 
{
	
obj={
count:1,
unit:'',
ingredients
}}


console.log(obj);

return obj;
//


  }) 
this.ingredients=newingredient;
console.log(this.ingredients);

};
//end of parse



//end of class
}