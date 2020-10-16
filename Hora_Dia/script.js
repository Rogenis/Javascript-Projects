
function carregar(){
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()

    if(hora >= 0 && hora < 12){
        img.src = "manha.png"
        document.body.style.background = "#e2cd9f"
        msg.innerHTML = `Bom dia! Agora são ${hora} horas e ${minuto} minutos`
    }else if(hora >= 12 && hora < 18){
        img.src = "tarde.png"
        document.body.style.background = "#b9846f"
        msg.innerHTML = `Boa tarde! Agora são ${hora} horas e ${minuto} minutos`
    }else{
        img.src = "noite.png"
        document.body.style.background = "#515154"
        msg.innerHTML = `Boa noite! Agora são ${hora} horas e ${minuto} minutos`
    }
}