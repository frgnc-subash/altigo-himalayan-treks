import express from "express";
import cors from "cors";
import { Resend } from "resend";
import "dotenv/config";

const app = express();

const apiKey = process.env.RESEND_API_KEY;
if (!apiKey) {
  console.error(
    "CRITICAL ERROR: RESEND_API_KEY is not defined in environment variables.",
  );
}

const resend = new Resend(apiKey);

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Mount Treks API Server is running...");
});

app.post("/api/send-email", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const VERIFIED_SENDER = "info@mounttreks.com";
  const ADMIN_RECEIVER = "mounttrekspvtltd@gmail.com";

  const ADMIN_HTML = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9fafb; padding: 40px 20px;">
      <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; border: 1px solid #e5e7eb; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        <div style="background-color: #0f172a; padding: 20px; text-align: center;">
          <span style="color: #3b82f6; font-size: 12px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase;">New Website Inquiry</span>
        </div>
        <div style="padding: 32px;">
          <h2 style="color: #111827; margin-top: 0; font-size: 24px; font-weight: 800;">Mountain Calling! 🏔️</h2>
          <p style="color: #4b5563; font-size: 16px; line-height: 24px;">A new adventurer wants to start a journey. Here are the details:</p>
          <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px; width: 100px;">Name</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Email</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #3b82f6; font-weight: 600;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #6b7280; font-size: 14px;">Interest</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #f3f4f6; color: #111827; font-weight: 600;">${subject}</td>
            </tr>
          </table>
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; border-left: 4px solid #3b82f6;">
            <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 24px; font-style: italic;">"${message}"</p>
          </div>
          <div style="margin-top: 32px; text-align: center;">
            <a href="mailto:${email}" style="background-color: #000000; color: #ffffff; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 700; font-size: 15px; display: inline-block;">Reply to Prospect</a>
          </div>
        </div>
      </div>
    </div>
  `;

  const CUSTOMER_HTML = `
    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #ffffff; color: #1a1a1a; margin: 0; padding: 0;">
      <table width="100%" border="0" cellspacing="0" cellpadding="0">
        <tr>
          <td align="center" style="padding: 20px 0;">
            <div style="max-width: 600px; text-align: left; border: 1px solid #eaeaea; border-radius: 16px; overflow: hidden;">
              <div style="background-color: #000; padding: 40px; text-align: center;">
                <h1 style="color: #fff; margin: 0; font-size: 28px; letter-spacing: 2px;">MOUNT TREKS</h1>
                <p style="color: #3b82f6; margin: 10px 0 0 0; font-size: 12px; font-weight: 700; text-transform: uppercase;">Himalayan Expedition Experts</p>
              </div>
              <div style="padding: 40px;">
                <h2 style="font-size: 24px; font-weight: 800; margin-bottom: 16px;">Namaste ${name},</h2>
                <p style="font-size: 16px; line-height: 26px; color: #444;">
                  Thank you for reaching out to us about the <strong>${subject}</strong>. Your passion for adventure is inspiring, and we'd love to help you reach the peaks!
                </p>
                <p style="font-size: 16px; line-height: 26px; color: #444;">
                  Our expert Sherpa guides are currently reviewing your request. We'll get back to you within 24 hours with a personalized itinerary and essential trekking details.
                </p>
                <div style="margin: 32px 0; padding: 24px; background-color: #f0f7ff; border-radius: 12px;">
                  <h4 style="margin: 0 0 12px 0; color: #1e40af; font-size: 14px; text-transform: uppercase;">What happens next?</h4>
                  <ul style="margin: 0; padding: 0; list-style: none; font-size: 14px; color: #374151;">
                    <li style="margin-bottom: 8px;">✅ Our team prepares your custom trek plan.</li>
                    <li style="margin-bottom: 8px;">✅ We check seasonal availability for ${subject}.</li>
                    <li>✅ We send you a comprehensive packing list.</li>
                  </ul>
                </div>
                <p style="font-size: 16px; line-height: 26px; color: #444;">
                  Best Regards,<br />
                  <span style="font-weight: 800; color: #000;">The Mount Treks Team</span>
                </p>
              </div>
              <div style="background-color: #f9fafb; padding: 30px; text-align: center; border-top: 1px solid #eaeaea;">
                <p style="margin: 0; font-size: 13px; color: #999;">
                  Thamel Marg, Kathmandu, Nepal <br />
                  +977 980-123-4567 | hello@mounttreks.com
                </p>
              </div>
            </div>
          </td>
        </tr>
      </table>
    </div>
  `;

  try {
    const data = await resend.batch.send([
      {
        from: `Mount Treks <${VERIFIED_SENDER}>`,
        to: [ADMIN_RECEIVER],
        reply_to: email,
        subject: `🏔️ New Lead: ${name} - ${subject}`,
        text: `New Lead from ${name} regarding ${subject}. Message: ${message}`,
        html: ADMIN_HTML,
      },
      {
        from: `Mount Treks <${VERIFIED_SENDER}>`,
        to: [email],
        subject: `Namaste ${name}! Journey to ${subject}`,
        text: `Namaste ${name}, we have received your inquiry for ${subject}.`,
        html: CUSTOMER_HTML,
      },
    ]);

    if (data.error) throw new Error(data.error.message);

    res.status(200).json({ success: true, data });
  } catch (error) {
    console.error("Submission Error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
