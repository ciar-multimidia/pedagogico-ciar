jQuery(document).ready(function($) {
    window.FakeLoader.init( { auto_hide: true } );
    
    var janela = $(window),
        scrollAtual = janela.scrollTop,
        headerInterno = $('#header-volume');

    ///////////////////////////////// CABECALHO AO ROLAR
    janela.on('scroll', function () {
      var thisScroll = $(this).scrollTop();
      if (thisScroll > scrollAtual && thisScroll > 300) {
        headerInterno.addClass('ao-rolar');
      } 

      if (thisScroll < scrollAtual && thisScroll < 301) {
        headerInterno.removeClass('ao-rolar');
      }

      scrollAtual = thisScroll;
    }); 



    ///////////////////////////////// APLICACAO DE GRAFISMOS
    var h2 = $('article').find('h2'),
        h4 = $('article').find('h4');

    h2.append('<svg xmlns="http://www.w3.org/2000/svg" role="img" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 1451 151"><path fill-rule="nonzero" d="M150.17 75.66a75 75 0 01-75 75 75 75 0 01-75-75 75 75 0 0175-75 75 75 0 0175 75M475.17 75.66a75 75 0 01-75 75 75 75 0 01-75-75 75 75 0 0175-75 75 75 0 0175 75M800.17 75.66a75 75 0 01-75 75 75 75 0 01-75-75 75 75 0 0175-75 75 75 0 0175 75M1125.17 75.66a75 75 0 01-75 75 75 75 0 01-75-75 75 75 0 0175-75 75 75 0 0175 75M1450.17 75.66a75 75 0 01-75 75 75 75 0 01-75-75 75 75 0 0175-75 75 75 0 0175 75"/></svg>');
    h4.prepend('<svg xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" clip-rule="evenodd" viewBox="0 0 854 201"><path fill-rule="nonzero" d="M120.17 200.73H.17L133.5.73h120l-133.33 200zM320.17 200.73h-120L333.5.73h120l-133.33 200zM520.17 200.73h-120L533.5.73h120l-133.33 200zM720.17 200.73h-120L733.5.73h120l-133.33 200z"/></svg>');

    
    ///////////////////////////////// BARRA DE NAVEGACAO ORIENTADORA
    var getMax = function(){
        return $(document).height() - janela.height();
    }
    
    var getValue = function(){
        return janela.scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        janela.resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        janela.on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }

    $(document).on('scroll', function(){
      maxAttr = $('#progressBar').attr('max');
      valueAttr = $('#progressBar').attr('value');
      percentage = (valueAttr/maxAttr) * 100;
    });


});