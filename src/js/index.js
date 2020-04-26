// Global app controller

import search from './models/search';
import  receipe from './models/receipe'
import  list from './models/list'
import  like from './models/like'
import {elements,renderimage,removeloader} from './views/base';
import * as searchview from './views/searchview';
import * as receipeview from './views/Receipeview';
import * as listview from './views/listview';
import * as likeview from './views/likeview';
const state ={};

//searchcontroller
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
//searchview.cleanpreviouspagedata();
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



//receipe controller
const ControlReceipe = async () => {

const id = window.location.hash.replace('#','');


if(id){
//prepare ui for changes
receipeview.clearReceipe();
renderimage(elements.Receipedetailingredinets);

//highlight selected item

searchview.highlighted(id);


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

//Render Receipe
removeloader(elements.Receipedetailingredinets);
receipeview.renderingredients(state.receipes
,state.likes.isliked(id)
	);




}
catch(err){

	alert(err);
}


}



}


//window.addEventListener('hashchange',ControlReceipe);
//window.addEventListener('load',ControlReceipe);
//or
['hashchange','load'].forEach(event=>window.addEventListener(event,ControlReceipe));

//list controller

const controlist=()=>{

if(!state.list)state.list = new list();


state.receipes.ingredients.forEach(el2=>{

const item=state.list.additems(el2.count,el2.unit,el2.ingredients);

listview.render(item);

});




};


//Delete in shopping list
elements.shoppinglist.addEventListener('click',e=>{


const id=e.target.closest('.shopping__item').dataset.itemid;
console.log(id);
if(id)

{
	state.list.deleteitem(id);
	listview.deleteitem(id);
}


});



elements.searchrespages.addEventListener('click',e=>{

const btn =e.target.closest('.btn-inline');

console.log(btn);

if(btn){

const goto = parseInt(btn.dataset.goto,10);

//searchview.removelist138();
searchview.clearlist();
searchview.renderResults(state.search.result,goto);
}



});


//window.l=new list();
//l.additem()

//increase or dec the servings
elements.Receipedetailingredinets.addEventListener('click',el2=>{

if(el2.target.matches('.btn-dec ,.btn-dec *')){
	
	if(state.receipes.serving>1){
		
state.receipes.updateserving('dec');
receipeview.update_Serving_ingredients(state.receipes);
}
}
else if(el2.target.matches('.btn-inc ,.btn-inc *')) {

state.receipes.updateserving('inc');
receipeview.update_Serving_ingredients(state.receipes);
}

else if (el2.target.matches('.recipe__btn--add,.recipe__btn--add *'))
{
controlist();

}
else if(el2.target.matches('.header__likes,.header__likes *')){

consolelikes();

}


});


/// for likes
state.likes=new like();
likeview.likemenu(state.likes.getnumlikes());
const consolelikes=()=>{

if(!state.likes) state.likes=new like();
const currentid=state.receipes.id;
console.log(currentid);
//user has not yet likes current recee
if(!state.likes.isliked(currentid)){
const likeitem =state.likes.addlike(state.receipes.id,state.receipes.author,state.receipes.title,state.receipes.img);


likeview.togglebutton(true);

likeview.renderlike(likeitem);

}
//user has liked the current receipe
else {

likeview.togglebutton(false);

state.likes.deletelike(currentid);
likeview.deletelikeitem(currentid);

}
//state.likes.addlike();
likeview.likemenu(state.likes.getnumlikes());
};


