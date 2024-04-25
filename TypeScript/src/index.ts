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
//withput record
interface Userr {
    id: string;
    name: string;
  }
  
  type Userss = { [key: string]: Userr };
  
  const userss: Userss = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
//record
interface User3 {
    id: string;
    name: string;
  }
  
  type Users = Record<string, User3>;
  
  const users: Users = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
  };
  
  console.log(users['abc123']); // Output: { id: 'abc123', name: 'John Doe' }

//map
interface User4 {
    id: string;
    name: string;
  }
  
  // Initialize an empty Map
  const usersMap = new Map<string, User4>();
  
  // Add users to the map using .set
  usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
  usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });
  
  // Accessing a value using .get
  console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }


//exclude
type EventType = 'click' | 'scroll' | 'mousemove';
type ExcludeEvent = Exclude<EventType, 'scroll'>; // 'click' | 'mousemove'

const handleEvent = (event: ExcludeEvent) => {
  console.log(`Handling event: ${event}`);
};

handleEvent('click'); // OK

// Type Inference Zod
import { z } from 'zod';
import express from "express";

const app = express();

// Define the schema for profile update
const userProfileSchema = z.object({
  name: z.string().min(1, { message: "Name cannot be empty" }),
  email: z.string().email({ message: "Invalid email format" }),
  age: z.number().min(18, { message: "You must be at least 18 years old" }).optional(),
});
type FinalUserSchema = z.infer<typeof userProfileSchema>;

app.put("/user", (req, res) => {
  const { success } = userProfileSchema.safeParse(req.body);
  const updateBody: FinalUserSchema = req.body; // how to assign a type to updateBody?

  if (!success) {
    res.status(411).json({});
    return
  }
  // update database here
  res.json({
    message: "User updated"
  })
});

app.listen(3000);