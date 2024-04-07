import { Client } from 'pg'

// const client = new Client({
//     //    connectionString: "postgresql://postgres:password@localhost:5432/postgres"
//     host: 'localhost',
//     port: 5432,
//     database: 'postgres',
//     user: 'postgres',
//     password: 'password',
// })

// async function createUsersTable() {
//     await client.connect()
//     const result = await client.query(`
//         CREATE TABLE users (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//         );
//     `)
//     console.log(result)
// }
// createUsersTable();


//This is an insecure way to store data in your tables. 
//When you expose this functionality eventually via HTTP, someone can do an SQL INJECTION to get access to your data/delete your data.
//Async function to insert data into a table
// async function insertData() {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'password',
//     })
//     try {
//         await client.connect();  // Ensure client connection is established
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ('username1', 'abc@email.com', '12345678')";
//         const res = await client.query(insertQuery);
//         console.log('Insertion success:', res);   // Output insertion result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end();   // Close the client connection
//     }
// }
// insertData();


//Update the code so you don’t put user provided fields in the SQL string
// async function insertData(username: string, email: string, password:string) {
//     const client = new Client({
//         host: 'localhost',
//         port: 5432,
//         database: 'postgres',
//         user: 'postgres',
//         password: 'password',
//     })
//     try {
//         await client.connect();  // Ensure client connection is established
//         // Use parameterized query to prevent SQL injection
//         const insertQuery = "INSERT INTO users (username, email, password) VALUES ($1, $2, $3)";
//         const values = [username, email, password];
//         const res = await client.query(insertQuery, values);
//         console.log('Insertion success:', res);   // Output insertion result
//     } catch (err) {
//         console.error('Error during the insertion:', err);
//     } finally {
//         await client.end();   // Close the client connection
//     }
// }
// insertData('username2', 'abcd@email.com', '123456789').catch(console.error);

// a function to fetch user data from the database given an email, using parameterized queries for security.
async function getUser(email: string) {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        database: 'postgres',
        user: 'postgres',
        password: 'password',
    });


    try {
        await client.connect(); // Ensure client connection is established
        const query = 'SELECT * FROM users WHERE email = $1';
        const values = [email];
        const result = await client.query(query, values);

        if (result.rows.length > 0) {
            console.log('User found:', result.rows[0]); // Output user data
            return result.rows[0]; // Return the user data
        } else {
            console.log('No user found with the given email.');
            return null; // Return null if no user was found
        }
    } catch (err) {
        console.error('Error during fetching user:', err);
        throw err; // Rethrow or handle error appropriately
    } finally {
        await client.end(); // Close the client connection
    }
}   

// Example usage
getUser('user5@example.com').catch(console.error);