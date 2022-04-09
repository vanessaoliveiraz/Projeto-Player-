let musicas = [
    {titulo: 'Forma de cuidado', artista: 'Valesca Maysa', src: 'musicas/11.Forma De Cuidado.mp3', img:'imagens/tony-eight-media-iy34kwDyJ4E-unsplash.jpg'},
    {titulo: 'Dependente', artista: 'Stella Laura', src: 'musicas/Dependente.mp3', img:'imagens/kazuend-2KXEb_8G5vo-unsplash.jpg'},
    {titulo:'Dias de Guerra', artista: 'Vallesca Mayssa e Stella Laura', src: 'musicas/Dias de Guerra - Vallesca Mayssa e Stella Laura.mp3', img: 'imagens/aaron-burden-UIib0bAvWfs-unsplash.jpg'},
    {titulo: 'Calmaria', artista: 'Cancao e Louvor', src: 'musicas/3.mp3', img:'imagens/taylor-van-riper-yQorCngxzwI-unsplash.jpg'}
];

let musica = document.querySelector('audio');

let indexMusica = 0;
let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');


duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));


// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica--;
    renderizarMusica(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica++;
    renderizarMusica(indexMusica);
});

// Funcoes
function renderizarMusica (index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas [index].titulo;
        nomeArtista.textContent = musicas [index].artista;
        imagem.src = musicas [index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));

    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}


function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos + ':' + campoSegundos;

}

