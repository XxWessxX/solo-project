const express = require('express');
const cors=require ('cors')
const mysql=require('mysql')
const app = express()
app.use(cors())
app.use(express.json())

const port = 5471


const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"147147",
    database:"mydb"
})

app.get("/",(req,res)=>{
   const sql="SELECT * FROM posts"
   db.query(sql, (err,resp)=>{
    if(err) return res.send(err) ;
    return res.send(resp)
   })
})

app.post('/create',(req,res)=>{
    const sql="INSERT INTO posts (`Title`,`ImageUrl`,`Description`) VALUES (?,?,?)"
    const values=[req.body.Title,
        req.body.ImageUrl,
        req.body.Description
    ]
    db.query(sql,values,(err,resp)=>{
        if(err) return res.json(err);
        return res.json(resp)
    })
})

app.put('/update/:id',(req,res)=>{
    const sql="UPDATE posts set `Title` = ?, `ImageUrl` = ? , `Description` = ? WHERE idposts= ? "
    const values=[
        req.body.Title,
        req.body.ImageUrl,
        req.body.Description
    ]

    const id = req.params.id;

    db.query( sql, [...values,id ], (err,resp)=>{
        if(err) return res.json(err);
        return res.json(resp)
    }) 
})

app.delete('/posts/:id',(req,res)=>{
    const sql="DELETE FROM posts WHERE idposts=?"
    console.log(req.params);
    const id = req.params.id;
    db.query( sql, [id], (err,resp)=>{
        if(err){
            console.log(err) 
            return res.status(500).json(err);}
       
        return res.status(203).json(resp)
    })
})


app.listen(port,()=>{
    console.log(`listening on port ${port}`)
})