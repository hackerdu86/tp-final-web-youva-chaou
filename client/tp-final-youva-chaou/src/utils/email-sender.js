import { send } from "@emailjs/browser";

async function sendEmail(toEmail, emailContent) {
  const emailService = "service_jaweb16";
  const emailTemplate = "template_xsm7p4c";
  const publicKey = "zSXUAj79rdO8ClV8J";

  const emailParams = {
    to_email: toEmail,
    message: emailContent,
    PublicKeyCredential: "zSXUAj79rdO8ClV8J",
  };
  return await send(emailService, emailTemplate, emailParams, publicKey);
}

export default sendEmail;
