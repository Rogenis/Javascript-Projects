function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById("txtano")
    var res = document.querySelector("div#res")

    if(fano.value.length == 0 || fano.value > ano){
        window.alert("[ERRO] Verifique os dados e tente novamente!")
    }else{
        var fsex = window.document.getElementsByName("radsex")
        var idade = ano - fano.value
        var genero = ""
        var img = document.createElement("img")
        img.setAttribute('id','foto')

        if(fsex[0].checked){
            genero = "homem"
            if(idade >= 0 && idade <= 15){
                img.setAttribute("src", "criancahomem.png")
            }else if(idade > 15 && idade <= 21){
                img.setAttribute("src", "jovem.png")
            }else if(idade > 21 && idade <= 50){
                img.setAttribute("src", "adulto.png")
            }else{
                img.setAttribute("src", "idoso.png")
            }
        }else if(fsex[1].checked){
            genero = "mulher"
            if(idade >= 0 && idade <= 15){
                img.setAttribute("src", "criancamulher.png")
            }else if(idade > 15 && idade <= 21){
                img.setAttribute("src", "jovemmulher.png")
            }else if(idade > 21 && idade <= 50){
                img.setAttribute("src", "adulta.png")
            }else{
                img.setAttribute("src", "idosa.png")
            }
        }
        res.style.textAlign = "center"
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
