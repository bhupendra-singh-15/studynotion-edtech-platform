const { Resend } = require("resend")

const resend = new Resend(process.env.RESEND_API_KEY)

const mailSender = async (email, title, body) => {
  try {
    const response = await resend.emails.send({
      from: "StudyNotion <onboarding@resend.dev>",
      to: email,
      subject: title,
      html: body,
    })

    console.log("✅ Email sent:", response.data?.id)
    return response
  } catch (error) {
    console.error("❌ Mail Sender Error:", error)
    throw error
  }
}

module.exports = mailSender
