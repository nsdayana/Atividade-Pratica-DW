// Recebe como parâmetro um elemento HTML
function ativaletra(elemento) {

    // Transforma o conteúdo do elemento em um array de letras
    const arrTexto = elemento.innerHTML.split('');

    elemento.innerHTML = '';

    arrTexto.forEach((letra, i) => {
        
    // Define um timeout para adicionar a letra ao elemento com um intervalo de 75ms multiplicado pelo índice atual
    setTimeout(() => {
    elemento.innerHTML += letra;
    }, 75 * i);
    });
    }
    
    // Seleciona o elemento com a classe "digitando"
    const titulo = document.querySelector('.digitando');
    
    // Chama a função para animar a digitação no elemento
    ativaletra(titulo);