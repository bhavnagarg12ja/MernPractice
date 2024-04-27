import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(username: string, password: string, firstName: string, lastName: string) {
    const res = await prisma.user.create({
        data: {
            password,
            email:username,
            firstName,
            lastName
        },
        select:{
            id:true,
            password:true,
            firstName:true
        }
    })
  console.log(res);
}
// insertUser("bhavnagarg@gmail.com", "paswordd", "Bhaasvna", "Gssarg")

interface UpdateParams {
    firstName: string;
    lastName: string;
}

async function updateUser(username: string, {
    firstName,
    lastName
}: UpdateParams) {
    const res = await prisma.user.update({
        where: {
            email: username
        },
        data:{
            firstName,
            lastName
        }
    })
    console.log(res);
}
// updateUser('bhavnagarg@gmail.com',{
//     firstName: 'Billo',
//     lastName: 'Bhavna'
// })

async function getUser(username: string) {
  const user = await prisma.user.findFirst({
    where: {
        email: username
    }
  })
  console.log(user);
}

getUser("bhavnagarg@gmail.com");

// async function createTodoForUser(userId: number, title: string, description: string) {
//     const todo = await prisma.todo.create({
//       data: {
//         title,
//         description,
//         user: {
//           connect: { id: userId },
//         },
//       },
//     });
//     return todo;
//   }