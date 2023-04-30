const fs = require('fs');

const data = JSON.parse(fs.readFileSync(`${__dirname}/../models/data.json`));

exports.addEvent = (req,res)=>{
    const obj = req.body;
    data.push(obj);
    fs.writeFile(`${__dirname}/../models/data.json`,JSON.stringify(data),(err)=>{
        console.log(err);
    });
    res.send(obj);
}

exports.getByID=(req,res)=>{
    let id=req.params.id;
    console.log(id,typeof id);
    const obj = data.find((ele)=>{
        return ele.uid == id;
    })
    res.send(obj);
}

exports.deletebyID=(req,res)=>{
    let id=req.params.id;
    const idx = data.findIndex((ele)=>{
        return ele.uid == id;
    })
    data.splice(idx,1);
    res.json({
        status:"Deleted"
    })

}

exports.getAll=(req,res)=>{
    res.status(202).send(data);
}


exports.updatebyId=(req,res)=>{
    let id=req.params.id;
    let body=req.body;
    const idx = data.findIndex((ele)=>{
        return ele.uid == id;
    })
    data[idx]=body;
    fs.writeFile(`${__dirname}/../data.json`,JSON.stringify(data),(err)=>{
        console.log(err);
    });
    res.send("Data updated");

}

