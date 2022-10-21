import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css']
})
export class SplashComponent implements OnInit {

  controle_mensagem : any = 0;

  constructor( private router :Router, private activatedRoute : ActivatedRoute) {
    this.controle_mensagem=0;
  }

  ngOnInit(): void {

   
 
     
    setTimeout(function() {
      var altura : any = $(window).height();      
       $('.dark-bg').height(altura);
  }, 20);
   
 
  }



}
