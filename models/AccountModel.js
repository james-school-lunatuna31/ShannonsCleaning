// HANDLED BY AUTH0

// const accountModel = {};
// /* eslint-disable camelcase */
// const bcrypt = require('bcrypt');
// const { Pool } = require('pg');
// const dotenv = require('dotenv');
// dotenv.config();

// const pool = new Pool({
//     connectionString: process.env.DB_URL,
//     ssl: {
//         rejectUnauthorized: false
//     }
// });

// // accountModel.login = async function (email, password, callback) {
// //     try {
// //         const client = await pool.connect();
// //         try {
// //             const query =
// //                 'SELECT id, nickname, email, password FROM users WHERE email = $1';
// //             const result = await client.query(query, [email]);
// //             client.release();

// //             if (result.rows.length === 0) {
// //                 return callback(new WrongUsernameOrPasswordError(email));
// //             }

// //             const user = result.rows[0];
// //             const isValid = await bcrypt.compare(password, user.password);

// //             if (!isValid) {
// //                 return callback(new WrongUsernameOrPasswordError(email));
// //             }

// //             return callback(null, {
// //                 user_id: user.id,
// //                 nickname: user.nickname,
// //                 email: user.email
// //             });
// //         } catch (err) {
// //             client.release();
// //             return callback(err);
// //         }
// //     } catch (err) {
// //         return callback(err);
// //     }
// // };

// accountModel.create = async function (user, callback) {
//     try {
//         const client = await pool.connect();
//         try {
//             const hashedPassword = await bcrypt.hash(user.password, 10);
//             const query =
//                 'INSERT INTO users(email, password, nickname) VALUES ($1, $2, $3)';
//             await client.query(query, [
//                 user.email,
//                 hashedPassword,
//                 user.nickname
//             ]);
//             client.release();
//             return callback(null);
//         } catch (err) {
//             client.release();
//             return callback(err);
//         }
//     } catch (err) {
//         return callback(err);
//     }
// };

// accountModel.getUser = async function (email, callback) {
//     try {
//         const client = await pool.connect();
//         try {
//             const query =
//                 'SELECT id, nickname, email FROM users WHERE email = $1';
//             const result = await client.query(query, [email]);
//             client.release();

//             if (result.rows.length === 0) {
//                 return callback(null, null);
//             }

//             const user = result.rows[0];
//             return callback(null, {
//                 user_id: user.id,
//                 nickname: user.nickname,
//                 email: user.email
//             });
//         } catch (err) {
//             client.release();
//             return callback(err);
//         }
//     } catch (err) {
//         return callback(err);
//     }
// };

// module.exports = accountModel;
