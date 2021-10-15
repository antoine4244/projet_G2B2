import userDb from "../db/userDb";

async function getAllUsers(req,res){
    let result = await userDb.getUsers();
    res.status(200).render('pages/users',{users: result.rows});
};


async function addUser(req,res){
    const { nom, mail, pwd } = req.body;

    if(nom !== null && mail !== null && pwd !== null && nom !== "" && mail !== "" && pwd !== ""){
        const result = await userDb.insertUser(nom, mail, pwd);
        res.status(200).send("User successfully inserted !");
    }else{
        res.status(400).send("All fields are required !");
    }
}


export default {
    getAllUsers,
    addUser
};