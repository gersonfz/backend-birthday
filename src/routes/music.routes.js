import { Router } from "express";
import sendMailUtil from "../utils/sendMail.utils.js";
import { transporter } from "../utils/transporter.js";



const routerMusic = Router();

routerMusic.post('/', async (req, res) => {
    const { nameMusic, song, link } = req.body;
    const musica = 'Musica'
    const contentHTML = `
        <h1> ${musica} </h1> 
        <ul>
            <li> Nombre: ${nameMusic} </li>
            <li> Nombre de cancion o autor: ${song} </li>
            <li> Enlace: ${link} </li>
        </ul>
    `
    const info = await transporter.sendMail(sendMailUtil(contentHTML, musica));


    res.json({ redirect: 'https://milagros-xv.vercel.app/' });
});

export default routerMusic;