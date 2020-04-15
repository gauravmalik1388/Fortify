// Global app controller

import search from './models/search';
import {elements,renderimage,removeloader} from './views/base';
import * as searchview from './views/searchview'
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




document.querySelector('.search').addEventListener('submit',e=>{

e.preventDefault();
controlSearch();

}) ;





