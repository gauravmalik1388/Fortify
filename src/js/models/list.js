import uniqid from 'uniqid';

export default class list{


constructor(){

this.items=[];

}


additems(count,unit,ingredients){


const item={

id:uniqid(),
count,
unit,
ingredients




}

this.items.push(item);

return item;

};

deleteitem(id){

const delitem=this.items.findIndex(el=>el.id===id);

this.items.splice(delitem,1);
console.log(this.items);

};


updateitem(id,count){

this.list.find(el2=>el2.id===id).count=count;

}







};