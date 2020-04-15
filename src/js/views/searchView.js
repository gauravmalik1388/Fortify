import {elements} from './base'


export const getinput=()=>elements.searchinput.value;

export const removeinput=()=>{

elements.searchinput.value='';



};

const limitthetitle=(title,limit=17)=>{
const array1=[];
if(title.length>17){

title.split('').reduce((acc,cur)=>{


if(acc+cur.length<17){
array1.push(cur);



}

return acc+cur.length;


},0)
console.log(array1);
return `${array1.join(' ')}....`





}

return title;





};

export const clearlist =()=>{
elements.searchResList.innerHTML = '';

};


const renderReceipe=receipe =>{

	
const markup =`<li>
                    <a class="results__link results__link--active" href="#${receipe.recipe_id}">
                        <figure class="results__fig">
                            <img src="${receipe.image_url}" alt="Test">
                        </figure>
                        <div class="results__data">
                            <h4 class="results__name">${limitthetitle(receipe.title)}</h4>
                            <p class="results__author">${receipe.publisher}</p>
                        </div>
                    </a>
                </li>`;


                elements.searchResList.insertAdjacentHTML('beforebegin',markup);









}

export const renderResults=receipes =>{

console.log(11 + '' + receipes);
receipes.forEach(renderReceipe);





}
