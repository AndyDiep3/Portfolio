"use client";

import React from "react";
import ReactDOMServer from "react-dom/server";
import { Resend } from "resend";
import { validateString, getErrorMessage } from "@/lib/utils";
import ContactFormEmail from "@/email/contact-form-email";

// const resend = "";
const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
  const senderEmail = formData.get("senderEmail");
  const message = formData.get("message");

  // simple server-side validation
  if (!validateString(senderEmail, 500)) {
    return {
      error: "Invalid sender email",
    };
  }
  if (!validateString(message, 5000)) {
    return {
      error: "Invalid message",
    };
  }

  let data;
  try {
    const emailContent = ReactDOMServer.renderToString(
      React.createElement(ContactFormEmail, {
        message: message,
        senderEmail: senderEmail,
      })
    );

    data = await resend.emails.send({
      from: "Contact Form <onboarding@resend.dev>",
      to: "andydiep3@gmail.com",
      subject: "Message from contact form",
      reply_to: senderEmail,
      html: emailContent, // Use the rendered HTML content here
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return {
    data,
  };
};
