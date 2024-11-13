import { createTransport } from "nodemailer";

export const mailTransporter = createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'jedieebulley@gmail.com',
        pass: 'grfhgzkyxmvogatz'
    },
    from: 'jedieebulley@gmail.com'
});