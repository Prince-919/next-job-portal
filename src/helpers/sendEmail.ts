import { config } from "@/config/config";
import nodemailer from "nodemailer";

export async function sendEmail({ to, subject, text, html }: any) {
  try {
    const transporter = await nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: config.authUser,
        pass: config.authPassword,
      },
    });
    await transporter.sendMail({
      from: "APS Jobs",
      to: to,
      subject,
      text,
      html,
    });
  } catch (error) {
    console.log(error);
    return error;
  }
}
