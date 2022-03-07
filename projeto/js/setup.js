$('.owl-carousel').owlCarousel({  /*scrip que faz carrosel funcionar*/
    loop:true,  /*cria efeito de loop infinito, caso coloque false ele fica limitado a quantidade de imagens*/
    margin:10, /*margin de uma imagem para outra*/
    nav:false, /*botao de navegaçao pode ser habilitado(true) ou desabilitado (false) para retirar botao de navegação*/
    responsive:{ /*fica responsavel pela responsividade,se ajustando a tela*/
        0:{ /*qiando estiver proximo de zero ele vai apresentar apenas 1 por vez*/
            items:2
        },
        600:{ /*quando tiver 600 pixel apenas 3 itens por vez*/
            items:3
        },
        1000:{ /*quando a tela tiver mil pixel pode colocar 5 elementos na tela*/
            items:5
        }
    }
})