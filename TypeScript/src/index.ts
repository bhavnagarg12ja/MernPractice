interface User {
    name : string;
    age : number;
};

function sumOfAges(user1: User, user2 : User){
    return user1.age + user2.age;
}

const age = sumOfAges({
    name : 'Taro',
    age : 20
},{
    name : 'Paro',
    age : 30
});

console.log(age);

//pick
interface User1{
    id : number;
    name : string;
    email : string;
    password : string;
};
//Pick
type UpdateUser = Pick<User1, 'name' | 'password'>
//Partial
type UpdateUserOptional = Partial<UpdateUser>;
function updateUser(updateUser : UpdateUserOptional){

}
//readOnly
const user : Readonly<User> = {
    name: 'John',
    age: 20
}
