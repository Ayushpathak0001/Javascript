let data="secret information";

class user{
    constructor(name,email){
       
        this.name=name;
        this.email=email;
        console.log("information entering")
    }
viewData(){
    console.log("user data",data);
}
}

class Admin extends user{
    constructor(name,email){
        super(name,email);
    }
    editdata(){
        data="new value"
    }
}


let student1=new user("ayush","ayush@gmail");
let student2=new user("amit","amit@123");

let admin= new Admin("raman","raman@1233");
