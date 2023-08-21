const express = require("express");
const cors = require("cors");


const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res)=>{

    res.send (Hello)
        

});

const employees = [
   {
     name:"Syed",
     employee_code: 9090
},
{
    name:"Ameer",
    employee_code: 9091
},
{
    name:"Nase",
    employee_code: 9092
},
{
    name:"Saifullah",
    employee_code: 9093
},
{
    name:"Razik",
    employee_code: 9094
},

]
app.get("/users",(req, res)=>{
    console.log(req.body);
    res.send({
        data: employees,
        message: "Success"
    })
});
app.post('/login',(req,res)=>{
    console.log({body: req.body});
    const {email, password} = req.body;
    const rightEmail = "nase@nase.com";
    const rightPassword = " 12345";
    if(email ===rightEmail) {
     if (password === rightPassword){
        res.send({
            message: "Login success!",
            user:{
                name:"Rasik",
                role:"Admin",
                Employeecode: 8797
            }
        });

    }else{
        res.status(401).send({
            message: " Password does not match!"
        
        })
    
    }
    } else{
            res.status(401).send({
                message: "Account does not exist"
            })  
       

    }

    
}

)
app.listen ( PORT,()=>{
    console.log(`Server is running at port ${PORT}`)
});