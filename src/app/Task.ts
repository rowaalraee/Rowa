

export class Task {
public price : number;public errror : string=" " ;
    constructor (public description: string,
        public num : string) {
         
    }


    toString () {
        return `your order is : 
        {type of mobile: ${this.description} , num of stocks :  ${this.num}}.`
    }
   // setCompleted(checkd: boolean){
     //   this.completed = checkd;
    //}

calculate(d: string,n:string){
if (d="ph1"){

this.price= parseInt(n)*2000;
}
}
getprice(){
        return this.price;
    }
 
}
