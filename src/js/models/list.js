import uniqid from 'uniqid';

export default class list{


constructor(){

this.list=[];

}


additems(count,unit,ingredients){


const item={

id=uniqid(),
count,
unit,
ingredients




}
this.list.push(item);
return list;

};

deleteitem(id){

const delitem=this.item.findIndex(el=>el.id);

this.list.splice(delitem);


};


updateitem(id,count){

this.list.find(el2=>el2.id===id).count=count;

}







}