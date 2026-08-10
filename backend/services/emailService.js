const nodemailer = require('nodemailer');

/**
 * Sends an email notification when a new contact submission arrives.
 * Falls back cleanly to console log if SMTP credentials are not configured.
 */
const sendContactNotification = async (contactMessage) => {
  const host = process.env.EMAIL_HOST;
  const port = process.env.EMAIL_PORT || 587;
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_PASS;
  const recipient = process.env.NOTIFICATION_RECIPIENT || 'samvrithalathish67@gmail.com';

  if (!user || !pass || user === 'your_email@gmail.com') {
    console.log(`✉️ [EMAIL SERVICE] Simulated Email Alert for Samvritha Lathish:
--------------------------------------------------
From: ${contactMessage.name} <${contactMessage.email}>
Subject: New Inquiry - ${contactMessage.subject}
Message: ${contactMessage.message}
Date: ${new Date(contactMessage.createdAt).toLocaleString()}
--------------------------------------------------`);
    return { success: true, mode: 'simulated' };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: host,
      port: Number(port),
      secure: Number(port) === 465,
      auth: { user, pass }
    });

    const mailOptions = {
      from: `"Samvritha Portfolio" <${user}>`,
      to: recipient,
      replyTo: contactMessage.email,
      subject: `[Portfolio Contact] ${contactMessage.subject} from ${contactMessage.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #1A2140; background-color: #EEF1F7;">
          <h2 style="color: #29847E; margin-bottom: 10px;">New Portfolio Contact Message</h2>
          <p>You have received a new contact inquiry through your website portfolio:</p>
          <hr style="border: 0; border-top: 1px solid #C7CEE0; margin: 15px 0;" />
          <p><strong>Name:</strong> ${contactMessage.name}</p>
          <p><strong>Email:</strong> <a href="mailto:${contactMessage.email}">${contactMessage.email}</a></p>
          <p><strong>Subject:</strong> ${contactMessage.subject}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #ffffff; padding: 15px; border-left: 4px solid #D69A2D; margin: 10px 0;">
            ${contactMessage.message.replace(/\n/g, '<br/>')}
          </div>
          <p style="font-size: 12px; color: #7B84A6; margin-top: 20px;">Sent automatically from Samvritha Lathish Portfolio API</p>
        </div>
      `
    };

    const info = await transporter.sendMail(mailOptions);
    console.log(`✅ [EMAIL SERVICE] Email sent successfully: ${info.messageId}`);
    return { success: true, mode: 'smtp', messageId: info.messageId };
  } catch (error) {
    console.error(`❌ [EMAIL SERVICE] Failed to send email via SMTP:`, error.message);
    return { success: false, error: error.message };
  }
};

module.exports = {
  sendContactNotification
};
