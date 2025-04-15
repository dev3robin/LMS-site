
import express from "express";
import cors from "cors";
import nodemailer from "nodemailer"; // <-- must be here

const app = express();
app.use(cors({ origin: ["http://localhost:5173"] }));
app.use(express.json()); // <-- very important to parse JSON

let otpStore = {}; // simple store for demo

app.post("/send-otp", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ message: "Email is required" });
  const otp = Math.floor(1000 + Math.random() * 9000).toString();
  otpStore[email] = otp;
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mdr50843@gmail.com",
        pass: "dzcsgbbfjpnzxazw", // use an App Password if using Gmail
      },
    });

    await transporter.sendMail({
      from: "mdr50843@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
    });

    res.status(200).json({ message: "OTP sent successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

app.post("/verify-otp", (req, res) => {
  const { email, otp } = req.body;
  if (otpStore[email] === otp) {
    delete otpStore[email];
    res.status(200).json({ message: "OTP verified" });
  } else {
    res.status(401).json({ message: "Invalid OTP" });
  }
});

app.listen(8080, () => {
  console.log("Server running on http://localhost:8080");
});
