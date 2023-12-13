function likeStarter(){
    let like = localStorage.getItem("like");
    if(like == null){
       localStorage.setItem("like", "0,");
    }
}

function like(id){
    let curtidas = localStorage.getItem("like");
    curtidas = curtidas.concat(id,",")
    localStorage.setItem("like", curtidas);
    changeToDislike(id)
}
  
function dislike(id){
    let curtidas = localStorage.getItem("like");
    var substituto = ',' + id + ','
    curtidas = curtidas.replaceAll(substituto,",")
    localStorage.setItem("like", curtidas);
    changeToLike(id)
}

function likeLoader(){
    let like = localStorage.getItem("like");
    let buttons = document.getElementsByClassName("like-button")
    for (let index in buttons){
        let button = buttons[index]
        let liked = verify(button.id)
        if (liked == true){
            changeToDislike(button.id)
        }
    } 
}

function changeToDislike(id){
    document.getElementById(id).innerHTML = "Descurtir"
    document.getElementById(id).className = "dislike-button"
    document.getElementById(id).onclick = () => dislike(id)
}

function changeToLike(id){
    document.getElementById(id).innerHTML = "Curtir"
    document.getElementById(id).className = "like-button"
    document.getElementById(id).onclick = () => like(id)
}

function verify (id){
    let curtidas = localStorage.getItem("like");
    var substituto = ',' + id + ','
    return curtidas.indexOf(substituto) !== -1
}

function search (){
    let text = document.getElementById("search-text").value.toUpperCase()
    let cards = document.getElementsByClassName("recipe-card")
    for (let index in cards){
        let card = cards[index]
        let title = card.getElementsByTagName("h2")[0].innerHTML.toUpperCase()
        if (title.indexOf(text) !== -1){
            card.style = ""
        }
        else {
            card.style = "display: none"
        }
    }
}

setTimeout( () => {
    likeStarter()
    likeLoader()
}, 100)