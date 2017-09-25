/**
 * Created by nitish
 */
const  Promise = require('bluebird');
const nodemailer = require('nodemailer');

//============================================ Exports ==========================================================//

module.exports = {
    sendEmail : _sendEmail
}

//============================================ Implementation ===================================================

function _sendEmail( email ){

    //Prepare Email Payload
    let mailOptions = {
        from: 'noreply@bathwaterkids.com',
        to: email.teacherEmailID,
        subject: 'Your Credentials from Online School',
        html: '<b>'+ email.teacherName +" " + 'your user name to login is ' + email.teacherUserName + '</b>',
        text: email.teacherName
    };
    //Send Mail
   return _sendMail(mailOptions )
        .then( function (  data ) {
            return Promise.resolve("success");
        })
        .catch( function (err) {
            //Error Sending Mail
            console.log("Error while sending Email :" + err);
        })

}


function  _sendMail( argument ) {
    let transporter = nodemailer.createTransport(
        {
            service: 'gmail',
            auth: {
                user: 'supriyasingh9327@gmail.com',
                pass: 'supriya@123'
            }
        }
    );
    return new Promise( function ( resolve , reject ) {
        transporter.sendMail( argument , function ( err , data) {
            if( err){
                return reject( err )
            }
            resolve( data );
        })
    })
}

//==================================================================================================================