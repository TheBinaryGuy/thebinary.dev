import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method == 'POST') {
        try {
            console.log(req.body);
            const { queryFor, email, firstName, lastName, queryDetails } =
                JSON.parse(req.body);
            const transporter = nodemailer.createTransport({
                service: 'Gmail',
                auth: {
                    user: process.env.SMTP_GMAIL_USERNAME,
                    pass: process.env.SMTP_GMAIL_APP_PASSWORD
                }
            });
            transporter.verify((error, success) => {
                if (error) {
                    res.status(500);
                    res.end();
                }
            });
            const messageOptions = {
                subject: `New Query For - ${queryFor}`,
                text: `New query!\nQuery For: ${queryFor}\nName: ${firstName} ${lastName}\nEmail: ${email}\nQuery Details: ${JSON.stringify(
                    queryDetails,
                    null,
                    2
                )}`,
                to: process.env.SMTP_GMAIL_USERNAME,
                from: process.env.SMTP_GMAIL_USERNAME
            };
            transporter.sendMail(messageOptions);
            res.status(200).send({});
        } catch {
            res.status(500);
        }
    } else {
        res.status(405);
    }

    res.end();
};
