import { Router } from "express";
import sendMailUtil from "../utils/sendMail.utils.js";
import { transporter } from "../utils/transporter.js";


const router = Router();

router.post('/', async (req, res) => {
        const { attendance, name, importantData } = req.body;
        const asiste = '¿Asiste a la fiesta?'

        const contentHTML = `
            <h1> ${asiste} </h1> 
            <ul>
                <li> Asiste: ${attendance} </li>
                <li> Nombre: ${name} </li>
                <li> Dato importante: ${importantData} </li>
            </ul>
        `
    
        const info = await transporter.sendMail(sendMailUtil(contentHTML, asiste));

        console.log('Message sent: ', info.messageId);

        res.json({ redirect: 'https://milagros-xv.vercel.app/' });
    });

export default router;