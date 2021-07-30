export class Customer{
    get id(){
        return this.id;
    }

    constructor(name, id, password){
        this.name = name;
        this._id = id;
        this._password = password;
    }

    authenticate(password){
        return this._password == password;
    }
}