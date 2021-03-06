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
        colorChoice,
        additionalComments
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
    const to = [
        "webninja@thinkpro.net",
        "tommy@thinkpro.net"
    ]

	let info = {
			from: EMAIL_NAME,
			to: to,
            cc: 'randy@thinkpro.net',
			subject: "NEW CAMPAIGN REQUEST (2.0)", // Subject line
			// text: "Hello world?", // plain text body
			html: `<div>
                <h1>New Campaign Request</h1>
                <ul>
                <li><strong>Customer's Name:</strong> ${name}</li>
                <li><strong>Customer's Email:</strong> ${email}</li>
                <li><strong>Customer's Phone:</strong> ${phone}</li>
                <li><strong>Sales Goal:</strong> ${quantity}</li>
                <li><strong>Cause For Campaign:</strong> ${cause}</li>
                </ul>
              </div>`,
		};
    
    await transporter.sendMail(info, (err,data) => {
        if (err) {
            console.log(err);
            res.json(err)
        } else {
            console.log('EMAIL SENT SUCCESSFULLY');

            res.json({success: true})
        }
    })
};


{/* <div>
                <h1>New Campaign Request</h1>
                <ul>
                <li><strong>Customer's Name:</strong> ${name}</li>
                <li><strong>Customer's Email:</strong> ${email}</li>
                <li><strong>Customer's Phone:</strong> ${phone}</li>
                <li><strong>Campaign Name:</strong> ${campaignName}</li>
                <li><strong>Sales Goal:</strong> ${quantity}</li>
                <li><strong>Cause For Campaign:</strong> ${cause}</li>
                <li><strong>Campaign Intro/Tagline:</strong> ${campaignIntro}</li>
                <li><strong>Campaign Purpose:</strong> ${campaignPurpose}</li>
                <li><strong>Campaign Explanation:</strong> ${campaignExplanation}</li>
                <li><strong>Shirt Choice:</strong> ${shirtChoice}</li>
                <li><strong>Color Choice:</strong> ${colorChoice}</li>
                <li><strong>Comments, Questions & Concerns:</strong> ${additionalComments}</li>

                </ul>
              </div> */}