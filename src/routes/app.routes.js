import { Router } from "express";

const router = Router();

router.post('/', (req, res) => {
    console.log(req.body);
    res.json({ message: 'Correo enviado correctamente' });

});

export default router;