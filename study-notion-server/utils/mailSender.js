const nodemailer = require("nodemailer")
const { google } = require("googleapis")

const OAuth2 = google.auth.OAuth2

const mailSender = async (email, title, body) => {
  try {
    const oauth2Client = new OAuth2(
      process.env.GOOGLE_CLIENT_ID,
      process.env.GOOGLE_CLIENT_SECRET,
      "https://developers.google.com/oauthplayground"
    )

    oauth2Client.setCredentials({
      refresh_token: process.env.GOOGLE_REFRESH_TOKEN,
    })

    const accessToken = await oauth2Client.getAccessToken()

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: process.env.MAIL_USER,
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        refreshToken: process.env.GOOGLE_REFRESH_TOKEN,
        accessToken: accessToken.token,
      },
    })

    const info = await transporter.sendMail({
      from: `"Studynotion" <${process.env.MAIL_USER}>`,
      to: email,
      subject: title,
      html: body,
    })

    console.log("Email sent:", info.response)
    return info
  } catch (error) {
    console.log("Mail Error:", error)
    return error.message
  }
}

module.exports = mailSender
