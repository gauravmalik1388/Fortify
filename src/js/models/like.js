export default class like {

constructor (){

this.likes=[];


}

addlike(id,title,author,image){
console.log('hello'+id);
const like ={id,title,author,image};

this.likes.push(like);
return like;


}



deletelike(id){
	console.log('h1');
const index =this.likes.findIndex(el=>el.id===id);
this.likes.splice(index,1);


}


isliked(id){

return this.likes.findIndex(el=>el.id===id)!==-1;

}

getnumlikes(){

return this.likes.length;


}

}



