import {elements} from './base';
import {Fraction} from 'fractional'

export const clearReceipe =()=>{


elements.Receipedetailingredinets.innerHTML= '' ;



} ;

const format=count=>{
//destructring

if(count){ 
const [int,dec1]=count.toString().split('.').map(el2=>parseInt(el2,10));
if(!dec1) return count;


if(int ===0){
const fr =new Fraction(dec1);
return `${fr.numerator}/${fr.denominator}`;
}
else {
console.log(dec1);
const fr =new Fraction(count-int);
return `${int} ${fr.numerator}/${fr.denominator}`;

}


}

return '?';
};

const createingredients=ingredients=>
`
<li class="recipe__item">
                        <svg class="recipe__icon">
                            <use href="img/icons.svg#icon-check"></use>
                        </svg>
                              <div class="recipe__count">${format(ingredients.count)}</div>
                          <div class="recipe__ingredient">
                            <span class="recipe__unit">${ingredients.unit}</span>
                          ${ingredients.ingredients}
                        </div>
                    </li>

`
;

export const renderingredients=(receipe,isliked)=>{

const markup=`<figure class="recipe__fig">
                <img src="${receipe.img}" alt="${receipe.title}" class="recipe__img">
                <h1 class="recipe__title">
                    <span>${receipe.title}</span>
                </h1>
            </figure>
            <div class="recipe__details">
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-stopwatch"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--minutes">${receipe.time}</span>
                    <span class="recipe__info-text"> minutes</span>
                </div>
                <div class="recipe__info">
                    <svg class="recipe__info-icon">
                        <use href="img/icons.svg#icon-man"></use>
                    </svg>
                    <span class="recipe__info-data recipe__info-data--people">${receipe.serving}</span>
                    <span class="recipe__info-text"> servings</span>

                    <div class="recipe__info-buttons">
                        <button class="btn-tiny btn-dec">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-minus"></use>
                            </svg>
                        </button>
                        <button class="btn-tiny btn-inc">
                            <svg>
                                <use href="img/icons.svg#icon-circle-with-plus"></use>
                            </svg>
                        </button>
                    </div>

                </div>
                <button class="recipe__love">
                    <svg class="header__likes">
                        <use href="img/icons.svg#icon-heart${isliked?'':'-outlined'}"></use>
                    </svg>
                </button>
            </div>



            <div class="recipe__ingredients">
                <ul class="recipe__ingredient-list">
                    
${receipe.ingredients.map(el=>createingredients(el)).join('')}

                    

                    </ul>

                <button class="btn-small recipe__btn--add">
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-shopping-cart"></use>
                    </svg>
                    <span>Add to shopping list</span>
                </button>
            </div>

            <div class="recipe__directions">
                <h2 class="heading-2">How to cook it</h2>
                <p class="recipe__directions-text">
                    This recipe was carefully designed and tested by
                    <span class="recipe__by">${receipe.author}</span>. Please check out directions at their website.
                </p>
                <a class="btn-small recipe__btn" href=${receipe.url} target="_blank">
                    <span>Directions</span>
                    <svg class="search__icon">
                        <use href="img/icons.svg#icon-triangle-right"></use>
                    </svg>

                </a>
            </div>`;



elements.Receipedetailingredinets.insertAdjacentHTML('afterbegin',markup);






}


export const ClearLastreceipe=()=>{

elements.Receipedetailingredinets.innerHTML='';




}


export const update_Serving_ingredients=receipe=>{

//Updating the servings
document.querySelector('.recipe__info-data--people').textContent =receipe.serving;

//update the count of ingredients
const arrayofcount=Array.from(document.querySelectorAll('.recipe__count'));

arrayofcount.forEach((el2,i)=>{

el2.textContent=format(receipe.ingredients[i].count);


});


};








