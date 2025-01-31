const nodemailer = require('nodemailer');

const sendGridTransport = require('nodemailer-sendgrid-transport');

const transporter = nodemailer.createTransport(
    sendGridTransport({
        auth:{
            api_key: process.env.API_SENDGRID,
        }
    })
);


const sendEmailController = () => {
    try{
        const {name, email, msg} = req.body;
        if(!name || !email || !msg){
            return res.status(500).send({
                success: false,
                message: "Please provide all fields"
            });
        }
        transporter.sendMail({
            to:'sreyashee.sarkar9@gmail.com',
            from:'sreyashee.sarkar9@gmail.com',
            subject:"regarding Mern Portfolio App",
            html:`
            <h5>Detail Information</h5>
            <ul>
                <li><p>Name: ${name}</p></li>
                <li><p>Email: ${email}</p></li>
                <li><p>Message: ${msg}</p></li>
            </ul>
            `
        })

        return res.status(200).send({
            success: true,
            message:'Your message was sent succesfully'
        })
    }catch(error){
        console.log(error);
        return res.status(500).send({
            success: false,
            message:'Send email api error',
            error
        });
    }
};

module.exports = {sendEmailController};