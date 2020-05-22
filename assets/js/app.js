jQuery(document).ready(function($) {
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