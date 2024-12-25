const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

const con = mysql.createConnection({
    host : 'sql12.freesqldatabase.com',
    user : 'sql12754096',
    password : 'kwAHiaAg7u',
    database : 'sql12754096'
});


app.post('/save',(req,res) =>{
    let sql = 'insert into student values (?,?)';
    let data = [req.body.name,req.body.feedback];
    con.query(sql,data,(err,result)=>{
        if(err)
            result.send(err);
        else
            res.send(result);
    })
})

app.listen(9000, () =>[
    console.log('listening on port 9000')
])