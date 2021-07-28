export class Customer{
    name;
    _id;

    get id(){
        return this.id;
    }

    constructor(name, id){
        this.name = name;
        this._id = id;
    }
}