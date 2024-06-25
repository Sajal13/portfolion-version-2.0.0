import { NextRequest, NextResponse } from "next/server";
import nodemailer  from 'nodemailer'

export async function POST(request: any){
  const username = process.env.SMTP_USER;
  const password = process.env.SMTP_PASS;
  const myEmail = process.env.SMTP_PERSONAL_EMAIL;
 
  const {name, email, subject, message} = await request.json();

  const transporter = nodemailer.createTransport({
    host: 'smtp.elasticemail.com',
    port: 587,
    secure: false,
    tls: {
      rejectUnauthorized: false
    },
    auth: {
      user: username,
      pass: password
    }
  });
  try{
    const mail = await transporter.sendMail({
      from: username,
      to: myEmail,
      sender: email,
      replyTo: email,
      subject: subject,
      html: `
      <p>Name: ${name} </p>
      <p>Email: ${email} </p>
      <p>Message: ${message} </p>`
    });

    return NextResponse.json({ message: 'Success email was sent.'})
  }catch (err) {
    console.log(err);
    NextResponse.json({message: 'could not sent message'})
  }
}