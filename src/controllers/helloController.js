const hello = (req, res) =>{
    res.status(200).send("Hello world!");
};

const helloYou =(req,res) =>{
    res.status(200).send("Hello to you!");
};

export default{
    hello,
    helloYou
};