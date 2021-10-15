import DbConnection from "./db";

const getUsers = async () =>{
    const connection = new DbConnection();
    return await connection.performQuery("SELECT * FROM users",[]);
};

const insertUser = async (nom,mail,pwd) =>{
    const connection = new DbConnection();
    return await connection.performQuery("INSERT INTO `users` (nom, mail, pwd) values (?,?,?)",[nom,mail,pwd]);
};

export default {
    getUsers,
    insertUser
};