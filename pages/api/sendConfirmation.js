import nodemailer from "nodemailer";

export default async (req, res) => {
	const { EMAIL_NAME, EMAIL_PW } = process.env;
	console.log(EMAIL_NAME, EMAIL_PW);
    const { 
        name, 
        email, 
        phone,
        cause,
        quantity,
        campaignName,
        campaignIntro,
        campaignPurpose,
        campaignExplanation,
        shirtChoice,
        // uploadArtwork
    } = req.body
	console.log("Here IS THE PAYLOAD", (req.body));
	let transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: EMAIL_NAME,
			pass: EMAIL_PW,
		},
	});

	let info = {
			from: EMAIL_NAME,
			to: "1996.sean.alexander@gmail.com",
			subject: "Hello ✔", // Subject line
			text: "Hello world?", // plain text body
			html: `<div>
                <h1>Thank you for your purchase, ${name} your appointment at 7:13 PM, on 12/29/2020</p>!</h1>
                <p>We have you scheduled in for your app
                <p>We will reach out to you 5 minutes prior at the number you provided us to confirm your appointment: ${phone}</p>
                <p>Speak to you soon!</p>
        
                <div>
                  <h2>Purchase Details</h2>
                  <ul>
                    <li>Purchase Total: $429</li>
                    <li>Package: Standard</li>
                    <li>Initial Appointment Time: 7:13 PM, 12/29/2020</li>
                  </ul>
                </div>
              </div>`,
		};
    
    await transporter.sendMail(info, (err,data) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            console.log('EMAIL SENT SUCCESSFULLY');
            res.json(data)
        }
    })
};
