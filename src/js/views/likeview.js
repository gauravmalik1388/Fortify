import {elements} from './base';
import {limitthetitle} from './searchView';

export const togglebutton=isliked=>{

const iconstring =isliked?'icon-heart':'icon-heart-outlined';
document.querySelector('.recipe__love use').setAttribute('href',`img/icons.svg#${iconstring}`);
//icons.svg#icon-heart-outlined

}

export const likemenu =numlikes=>{



elements.Likemenu.style.visibility=numlikes>0?'visible':'hidden';



}





export const renderlike=likeitem=>{

const markup=`<li>
                            <a class="likes__link" href="#${likeitem.id}">
                                <figure class="likes__fig">
                                    <img src="${likeitem.image}"alt="Test">
                                </figure>
                                <div class="likes__data">
                                 <h4 class="likes__name">${limitthetitle(likeitem.author)}</h4>
                                    <p class="likes__author">${likeitem.title}</p>
                                </div>
                            </a>
                        </li>`;



elements.likespanel.insertAdjacentHTML('beforeend',markup);


};


export const deletelikeitem =id =>{

const el = document.querySelector(`.likes__link[href*="${id}"]`).parentElement;
if(el) el.parentElement.removeChild(el);


}