function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 22
    msg.innerHTML = `Agora são ${hora} horas.`
    if(hora >= 0 && hora < 12) {
        //Bom Dia!
        document.body.style.background = '#9b6a57'
        img.src = 'fotomanha.png'
    } else if (hora >= 12 && hora < 18) {
        //Boa Tarde!
        document.body.style.background = '#b25124'
        img.src = 'fototarde.png'
    } else {
    //Boa Noite!
        img.src = 'fotonoite.png'
        document.body.style.background = '#100a03'
    }
}

