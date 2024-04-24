"use strict";
;
function sumOfAges(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfAges({
    name: 'Taro',
    age: 20
}, {
    name: 'Paro',
    age: 30
});
console.log(age);
