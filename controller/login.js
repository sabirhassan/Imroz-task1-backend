const User = require("../models/users")
const becrypt = require('bcryptjs');
const e = require("express");



module.exports.loginUser = function (req, res) {

    console.log(req.body);
    User.query().where('email',req.body.email)
    .then(users=>{

        if(users.length>0)
        {

            const user = users[0]

            becrypt.compare(req.body.password, user.password, function(err, isMatch) {
                if (err) 
                {
                  throw err
                } 
                else if (isMatch) {
                    console.log(user)
                    res.json( {status:200,
                            user:user,
                        
                        } )                
                } 
                else {
                    res.json( { status:1 } )                
                }
              })

        }
        else{
            res.json( { status:2 } )
        }
    })

  
};