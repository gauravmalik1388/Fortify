export const elements ={

searchinput:document.querySelector('.search__field'),
searchform:document.querySelector('.search'),
searchResList:document.querySelector('.results__list'),
seachres:document.querySelector('.results'),
searchrespages:document.querySelector('.results__pages'),
//Receipes
Receipedetailingredinets:document.querySelector('.recipe'),
shoppinglist:document.querySelector('.shopping__list'),
shoppinglistdeletebutton:document.querySelector('.shopping__delete'),
Likes:document.querySelector('.recipe__love'),
Likemenu:document.querySelector('.likes__field'),
likespanel:document.querySelector('.likes__list')

};


const elementsstring={

loader:'loader'


};



export const renderimage=parent=>{

const imageloader =`
<div class="${elementsstring.loader}" >
<svg>
<use href="img/icons.svg#icon-cw">
</use>
</svg>
</div>`;

parent.insertAdjacentHTML('afterbegin',imageloader);

};

export const removeloader=()=>{

const Rloader =document.querySelector(`.${elementsstring.loader}`);

console.log(Rloader);
if(Rloader){

Rloader.parentElement.removeChild(Rloader);

}


};
