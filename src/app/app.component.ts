import { Component } from '@angular/core';
import * as $ from 'jquery';
declare var bootstrap : any;



 

//main-container

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'app01';
   usuario_logado=0;

     sub_menu=false;

 
   constructor() { 
  }

  mustraSubMenu(){
    this.sub_menu = !this.sub_menu;
    if(this.sub_menu){
      $('.centerbutton .nav-link').addClass('active')
    }
    else{
      $('.centerbutton .nav-link').removeClass('active')
    }
      
  }

  ngOninit(){

 
 
    
    this.title = 'app01';

    

  }

  


 

  ngAfterViewInit(): void{


    
    setTimeout(function () { 
     
      var tema : any = localStorage.getItem('tema');
      tema =  JSON.parse(tema);
      if (tema==1) { 
        $('tema_geral').addClass('dark-mode');
        $('.choices__input').css("background-color","#ccc");
        $('.choices__input').css("border-radius","5px;");
        $('.choices__inner').css("background-color","rgb(197 201 209)");
        $('.choices__input').css("color","#333");
        $('.choices__list').css("color","#333"); 
        
     } else {
      $('tema_geral').removeClass('dark-mode');
      $('.choices__inner').css("background-color","#f9f9f9");
      $('.choices__list').css("background-color","#fff");

      console.log('claro');
     } 
   
      
   
    $('.loader-wrap').fadeOut('slow');
    $(window).removeClass('menu-open');
  //  $('#voltar_topo').hide();
//    $('#menu_topo').hide();  

    $('body').removeClass('menu-open');
    $('html').removeClass('menu-open');
 
    $('#div_loader').hide();

  }, 15000);

 
      
      $('#darkmodeswitch').on('click', function() {

        $('#div_loader').show();
        setTimeout(() => {
          $('#div_loader').hide();
        localStorage.removeItem('tema');
     if ($(this).prop("checked")) { 
        localStorage.setItem('tema', '1'); 
        $('#tema_geral').addClass('dark-mode');
        $('#tema_geral').removeClass('light-mode'); 
        $('.choices__input').css("background-color","#ccc");
        $('.choices__input').css("border-radius","5px;");
        $('.choices__inner').css("background-color","rgb(197 201 209)");
        $('.choices__input').css("color","#333");
        $('.choices__list').css("color","#333"); 
        
     } else {
       localStorage.setItem('tema', '0'); 
       $('#tema_geral').removeClass('dark-mode');
       $('#tema_geral').addClass('light-mode');
     }

  
          
    }, 500);
    
   });

   setTimeout(()=>{
       localStorage.removeItem('tema');
   localStorage.setItem('tema', '1'); 
        $('#tema_geral').addClass('dark-mode');
        $('#tema_geral').removeClass('light-mode'); 
        $('.choices__input').css("background-color","#ccc");
        $('.choices__input').css("border-radius","5px;");
        $('.choices__inner').css("background-color","rgb(197 201 209)");
        $('.choices__input').css("color","#333");
        $('.choices__list').css("color","#333"); 
   },1000)
 
 



    /**
     * 
     *     $('#darkmodeswitch').toggle( function() {
      $('.choices__inner').css("background-color","#f9f9f938");
  }, ()=> {
    $('.choices__inner').css("background-color","#f9f9f9");
  });
     */


    $('.menu-btn').on('click', function() {
  if ($('body').hasClass('menu-open') === true) {
    $('body').removeClass('menu-open');
      $('html').removeClass('menu-open');
  } else {
    $('body').addClass('menu-open');
      $('html').addClass('menu-open');
  }

  return false;
});
}
  
}
