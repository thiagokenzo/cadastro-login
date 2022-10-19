let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')



if (localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar está página')
    window.location.href = 'http://127.0.0.1:5500/index.html'
} else {
    logado.innerHTML = `Olá ${userLogado.nome}`
}



function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'http://127.0.0.1:5500/index.html'
}