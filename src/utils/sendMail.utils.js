const sendMailUtil = (contentHTML, evento) => {
    return {
        from: `'XV - Milagros' < ${process.env.USER} >`,
        to:process.env.TOMAIL,
        subject: evento,
        html: contentHTML
    }
}

export default sendMailUtil;