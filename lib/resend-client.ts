import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const FROM_EMAIL = "Security Mood <hello@securitymood.com>";
const AUDIENCE_ID = process.env.RESEND_AUDIENCE_ID;

export async function subscribeToNewsletter(email: string) {
  let subscribed = false;

  if (AUDIENCE_ID) {
    try {
      await resend.contacts.create({ email, audienceId: AUDIENCE_ID });
      subscribed = true;
    } catch (error) {
      console.error("[RESEND] Failed to add contact to audience:", error);
    }
  } else {
    subscribed = true;
  }

  let welcomeEmailSent = false;
  try {
    await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "You're on the list — Security Mood",
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; color: #1a1a1a;">
          <div style="text-align: center; margin-bottom: 24px;">
            <h1 style="margin: 0; font-size: 22px; font-weight: 700;">Security Mood</h1>
            <p style="margin: 8px 0 0 0; color: #666; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em;">Hardened defense. Total readiness.</p>
          </div>
          <div style="background: #f9f7f2; border-left: 4px solid #c9a96e; padding: 18px 20px; border-radius: 6px; margin-bottom: 20px;">
            <p style="margin: 0; color: #333; font-size: 14px; line-height: 1.6;">
              You're subscribed. Expect practical buying guides and new gear picks for home security, personal safety, and emergency preparedness — no fluff.
            </p>
          </div>
          <div style="text-align: center; margin-bottom: 20px;">
            <a href="https://securitymood.com/shop" style="display: inline-block; background: #c9a96e; color: #000; text-decoration: none; padding: 12px 28px; border-radius: 6px; font-weight: 700; font-size: 14px;">
              Browse the Shop
            </a>
          </div>
          <hr style="border: none; border-top: 1px solid #e5e5e5; margin: 20px 0;">
          <p style="color: #999; font-size: 12px; text-align: center; margin: 0;">
            © ${new Date().getFullYear()} Security Mood · securitymood.com
          </p>
        </div>
      `,
      text: `You're subscribed to Security Mood.

Expect practical buying guides and new gear picks for home security, personal safety, and emergency preparedness.

Browse the shop: https://securitymood.com/shop

© ${new Date().getFullYear()} Security Mood`,
      headers: {
        "List-Unsubscribe": "<mailto:unsubscribe@securitymood.com?subject=unsubscribe>",
      },
    });
    welcomeEmailSent = true;
  } catch (error) {
    console.error("[RESEND] Failed to send welcome email:", error);
  }

  return { subscribed, welcomeEmailSent };
}
