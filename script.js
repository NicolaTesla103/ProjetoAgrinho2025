document.addEventListener('DOMContentLoaded', function() {
    
    let aumentar_fonte = document.getElementById('aumentar-fonte');
    let diminuir_fonte = document.getElementById('diminuir-fonte');
    let alto_contraste = document.getElementById('alto-contraste');
    let fechar_acesso = document.getElementById('fechar-acesso');
    let acesso = document.getElementById('acesso');
    
    let botao_mobile = document.getElementById('area-b-mobile');

    let body = document.body;
    let tamanho_fonte = 1.5;
    
    body.style.fontSize = `${tamanho_fonte}rem`;
    
    /* Detectar scroll*/
    document.addEventListener('scroll', (event) => {
        if (window.scrollY > 0) {
            body.classList.add('navbar-opaca');
        } else {
            body.classList.remove('navbar-opaca');
        }
    });

    /* botão mobile */
    botao_mobile.addEventListener('click', function() {
        body.classList.toggle('b-mobile-ativo');
    });

    /* + fonte */
    aumentar_fonte.addEventListener('click', function() {
        if (tamanho_fonte < 2.5)
            tamanho_fonte += 0.5;
        body.style.fontSize = `${tamanho_fonte}rem`;
        localStorage.setItem('tamanho_fonte', String(tamanho_fonte));
    });

    /* - fonte */
    diminuir_fonte.addEventListener('click', function() {
        if (tamanho_fonte > 1)
            tamanho_fonte -= 0.5;
        body.style.fontSize = `${tamanho_fonte}rem`;
        localStorage.setItem('tamanho_fonte', String(tamanho_fonte));
    });
    
    if (localStorage.getItem('contraste') == 'true')
        body.classList.toggle('contraste');
    
    /* botão alto contraste */
    alto_contraste.addEventListener('click', function() {
        localStorage.setItem('contraste', body.classList.toggle('contraste'));
    });
    
    // Fechar ' [X] ' o menu de acessibilidade
    fechar_acesso.addEventListener('click', function() {
        acesso.classList.remove('ativo');
        document.getElementById('acesso-hand').style.display = 'block';
        document.getElementById('texto-acesso').style.display = 'none';
    });

    // Abrir o menu de acessibilidade
    acesso.addEventListener('mouseup', function() {
        acesso.classList.add('ativo');
        document.getElementById('acesso-hand').style.display = 'none';
        document.getElementById('texto-acesso').style.display = 'inline';
    });
});