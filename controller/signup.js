const User = require("../models/users")
const becrypt = require('bcryptjs')


module.exports.registerUser = function (req, res) {



    let newuser = {
        fullname: req.body.fullname,
        email : req.body.email,
        password: req.body.password,
        gender: req.body.gender
    } 

    User.query().where('email',req.body.email)
    .then(users=>{

        if(users.length>0)
        {
            res.json( { status:2 } )
        }
        else
        {
            becrypt.genSalt(10, (err,salt)=>
            becrypt.hash(newuser.password,salt,(err,hash)=>{
                if(err) throw err
                newuser.password = hash
    
                User.query().insert(newuser)
                .then(user=>{
                    console.log(user)
                    res.json( {status:200,
                            user:user,          
                    })
                })
                
            }))


        }
    })

        
    becrypt.genSalt(10, (err,salt)=>
        becrypt.hash(newuser.password,salt,(err,hash)=>{
            if(err) throw err
            newuser.password = hash

            User.query().insert(newuser)
            .then(user=>{
                console.log(user)
                res.json( user )
            })
            
        })    
    )

};

