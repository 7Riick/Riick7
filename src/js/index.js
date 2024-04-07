const botaoMostrarprojetos = document.querySelector('.btn-mostrar-projetos');
const projetosInativos = document.querySelectorAll('.projeto:not(.ativo)')
console.log(projetosInativos);  

botaoMostrarprojetos.addEventListener('click',() => {
    projetosInativos.forEach(projetosInativos => {
        projetosInativos.classList.add('ativo');

    });
    botaoMostrarprojetos.classList.add("remover")
    
})