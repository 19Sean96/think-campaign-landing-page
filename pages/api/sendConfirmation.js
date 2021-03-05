import nodemailer from 'nodemailer'

export default async (req, res) =>  {
    const { EMAIL_NAME, EMAIL_PW } = process.env


    console.log("Here IS THE PAYLOAD", req.body )
}