// JavaScript Document

$(document).ready(function(){$('.flexslider').flexslider({animation:'fade',prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>',});$('.gallery-carousel').flexslider({animation:"slide",animationLoop:false,itemWidth:200,itemMargin:10,minItems:2,maxItems:4,prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>',});$('#tm-carousel').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,itemWidth:75,itemMargin:5,asNavFor:'#tm-slider',prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>',});$('#tm-slider').flexslider({animation:"slide",controlNav:false,animationLoop:false,slideshow:false,sync:"#tm-carousel",prevText:'<i class="fa fa-angle-left"></i>',nextText:'<i class="fa fa-angle-right"></i>',})})