import {elements} from './base'

//input value
export const getinput=()=>elements.searchinput.value;




//clean input value
export const removeinput=()=>{
elements.searchinput.value='';
};




//limit the length of the title
const limitthetitle=(title,limit=17)=>{
const array1=[];
if(title.length>17){
title.split('').reduce((acc,cur)=>{
if(acc+cur.length<17){
array1.push(cur);
}
return acc+cur.length;
},0)
return `${array1.join(' ')}....`
}
return title;
};




//clear the innerhtml tages

export const clearlist =()=>{
elements.searchResList.innerHTML = '';
elements.searchrespages.innerHTML = '';
};



//put receipes on the html

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
};


//Create button from data to html
const createButton = (page, type) => `
    <button class="btn-inline results__btn--${type}" data-goto=${type === 'prev' ? page - 1 : page + 1}>
        <span>Page ${type === 'prev' ? page - 1 : page + 1}</span>
        <svg class="search__icon">
            <use href="img/icons.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
        </svg>
    </button>
`;



///logic behind buttons

const renderbutton=(page,totalreceipes,ResperPage)=>{
	console.log('Hello');
const pages =Math.ceil(totalreceipes/ResperPage);

let button;
if(page===1&&pages>1)

{
	console.log('Hello45');
//Go to next
button=createButton(page,'next');
}
else if(page<pages){
console.log('Hello48');
//go to next and previous
button=`${createButton(page,'prev')}${createButton(page,'next')};
`;
}
else if(pages===page &&pages>1){
button=createButton(page,'prev');
}
elements.searchrespages.insertAdjacentHTML('afterbegin',button);
} 





//main function for processing the receipes from the controller
export const renderResults=(receipes,page=1,ResperPage=10 )=>{
console.log(receipes);
const start = (page-1)*ResperPage;
const end = page * ResperPage ;
receipes.slice(start,end).forEach(renderReceipe);
renderbutton(page,receipes.length,ResperPage);
}
