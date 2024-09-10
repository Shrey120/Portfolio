import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { name, phone, email, message } = await req.json(); // Parse incoming request data

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_GMAIL_USER, // Your Gmail address
        pass: process.env.NEXT_PUBLIC_GMAIL_PASS, // Your Gmail password or app-specific password
      },
    });

    // Send the email
    await transporter.sendMail({
      from: email, // Sender's email
      to: process.env.NEXT_PUBLIC_GMAIL_USER, // Your Gmail address (to receive the message)
      subject: `New message from ${name}`, // Subject line
      text: message, // Message body in plain text
      html: `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>`, // Message body in HTML
    });

    return NextResponse.json(
      { message: "Message sent to Shreyash" },
      { status: 200 }
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, message: "Failed to send message" },
      { status: 500 }
    );
  }
}
