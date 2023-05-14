const {getDb} = require('../connection');

exports.addEvent = async (req,res)=>{
    const obj = req.body;
    const newObj = {...obj};
    await getDb().collection('crud').insertOne(obj);
    res.send(obj);
}

exports.getByID= async (req,res)=>{
    let id=req.params.id;
    const obj = await getDb().collection('crud').findOne({id : id});
    res.send(obj);
}

exports.deletebyID= async(req,res)=>{
    let id=req.params.id;
    const obj = await getDb().collection('crud').deleteOne({id : id});
    res.json({
        status:"Deleted"
    })
}

// exports.getAll=(req,res)=>{
//     console.log(req.params);
//     let l = parseInt(req.params.l);
//     let arr =[];
//     for(let i=data.length-1;i>data.length-1-l;i--){
//         arr.push(data[i]);
//     }
//     res.status(202).send(arr);
// }


exports.updatebyId= async(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    await getDb().collection('crud').updateOne({id : id}, {$set : body});
    res.send("Data updated");

}

