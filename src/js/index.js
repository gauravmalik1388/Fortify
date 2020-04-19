// Global app controller

import search from './models/search';
import {elements,renderimage,removeloader} from './views/base';
import * as searchview from './views/searchview';
import  receipe from './models/receipe'
const state ={};


const controlSearch=async ()=>{
//1 -get query from view
const query =searchview.getinput();
//2 -  new search object and add to state
if(query){
state.search=new search(query);
}
//3 prepare ui for display
searchview.removeinput();
searchview.clearlist();
renderimage(elements.seachres);
//4search for receipes
await state.search.getresults();
//5 render results from ui
removeloader();
searchview.renderResults(state.search.result);
}

elements.searchform.addEventListener('submit',e=>{
e.preventDefault();
controlSearch();
}) ;



//receipe Data
const ControlReceipe = async () => {

const id = window.location.hash.replace('#','');
console.log(id);

if(id){
//prepare ui for changes

//create new receipe object
state.receipes =new receipe(id);
//get receipe dat
try{
await state.receipes.getreceipe();
//console.log(state.receipes.getinput);
state.receipes.parseingrdeient();

//calculate serving and time
state.receipes.calculatetime();
state.receipes.calculateserving();





}
catch(err){

	alert(err);
}

//Render Receipe

}



}


//window.addEventListener('hashchange',ControlReceipe);
//window.addEventListener('load',ControlReceipe);
//or
['hashchange','load'].forEach(event=>window.addEventListener(event,ControlReceipe));




elements.searchrespages.addEventListener('click',e=>{

const btn =e.target.closest('.btn-inline');

console.log(btn);

if(btn){

const goto = parseInt(btn.dataset.goto,10);
searchview.clearlist();
searchview.renderResults(state.search.result,goto);
}



});





