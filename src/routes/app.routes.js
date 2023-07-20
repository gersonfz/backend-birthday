import { Router } from "express";
import nodemailer from 'nodemailer';


const router = Router();
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
        user: process.env.USER,
        pass: process.env.PASSWORD
    }
});

router.post('/form-birthday', async (req, res) => {
        const { attendance, name, importantData } = req.body;

        const contentHTML = `
            <h1> ¿Asiste a la fiesta? </h1> 
            <ul>
                <li> Asiste: ${attendance} </li>
                <li> Nombre: ${name} </li>
                <li> Dato importante: ${importantData} </li>
            </ul>
        `
    
        const info = await transporter.sendMail({
            from: "'XV - Milagros' <xvmilagros29@gmail.com>",
            to:'gersonfz17@gmail.com',
            subject: 'Asiste a la fiesta?',
            html: contentHTML
        });

        console.log('Message sent: ', info.messageId);

        res.json({ redirect: 'http://localhost:5173/' });
    });

router.post('/form-music', async (req, res) => {
    const { name, song, link } = req.body;
    const contentHTML = `
        <h1> Musica </h1> 
        <ul>
            <li> Nombre: ${name} </li>
            <li> Nombre de cancion o autor: ${song} </li>
            <li> Enlace: ${link} </li>
        </ul>
    `


    const info = await transporter.sendMail({
        from: "'XV - Milagros' <xvmilagros29@gmail.com>",
        to:'gersonfz17@gmail.com',
        subject: 'Musica',
        html: contentHTML
    });

    console.log('Message sent: ', info.messageId);

    res.json({ redirect: 'http://localhost:5173/' });
});

export default router;