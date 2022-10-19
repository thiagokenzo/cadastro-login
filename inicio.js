let userLogado = JSON.parse(localStorage.getItem('userLogado'))

let logado = document.querySelector('#logado')



if (localStorage.getItem('token') == null){
    alert('Você precisa estar logado para acessar está página')
    window.location.href = 'index.html'
} else {
    logado.innerHTML = `Olá ${userLogado.nome}`
}



function sair(){
    localStorage.removeItem('token')
    localStorage.removeItem('userLogado')
    window.location.href = 'index.html'
}