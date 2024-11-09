const imgHeros = document.getElementById("imgHeros")

function animation1 () {
    let timer = setInterval(() =>{
        imgHeros.style.transform = "translateY(-25px)"
        imgHeros.style.transition = 'all 2s'
        setTimeout(() => {
            imgHeros.style.transform = "translateY(15px)"
            imgHeros.style.transition = 'all 2s'
        }, 1000);
    }, 2500)
}

animation1()