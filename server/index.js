const express = require('express');
const cors = require('cors');

const authRoutes = require("./routes/auth.js");

const app = express();
const PORT = process.env.PORT || 5000;

require('dotenv').config();

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const messagingServiceSid = process.env.TWILIO_MESSAGING_SERVICE_SID;
// const twilioClient = require('twilio')(accountSid, authToken);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get('/', (req, res) => {
    res.send('Server sedang berjalan');
});

// app.post('/', (req, res) => {
//     const { message, user: sender, type, members } = req.body;

//     if(type === 'message.new') {
//         members
//             .filter((member) => member.user.id !== sender.id)
//             .foreach(({ user }) => {
//             if(!user.online) {
//                 twilioClient.messages.create({
//                     body: `Anda menerima pesan baru dari ${message.user.fullName} - ${message.text}`,
//                     messagingServiceSid: messagingServiceSid,
//                     to: user.phoneNumber
//                 })
//                     .then(() => console.log('Pesan telah terkirim!'))
//                     .catch((err) => console.log(err));
//             }
//         })

//         return res.status(200).send('Pesan telah terkirim!');
//     }

//     return res.status(200).send('Bukan pesan baru!');
// });

app.use('/auth', authRoutes);

app.listen(PORT, () => console.log(`Server sedang berjalan di port ${PORT}`));

