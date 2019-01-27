/** CODE IN GREEN IS THE EQUIVALENT CODE BUT IN JAVA TO MAKE A COMPARISON */
//package com.personalapp.springboot.web;


//import org.springframework.boot.SpringApplication;
import { Component, OnInit } from '@angular/core'; //'./app.component';
import { ActivatedRoute } from '@angular/router';


//@ComponentScan(value="com.personalapp.springboot.web")
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})


//public class SpringBootFirstWebApplication implements SomeInterface { }
export class WelcomeComponent implements OnInit {

  //String message = "Some Welcome Message"
  message : string = 'Some Welcome Message';
  name = '';

  //public SpringBootFirstWebApplication() { }
  /**ActivatedRoute*/
  constructor(private route : ActivatedRoute) { 

  }


  //void init() { } (this code does not return anything back, hence the void)
  ngOnInit() : void {
    console.log(this.message);
    //console.log(this.route.snapshot.params['name']);
    this.name = this.route.snapshot.params['name'];
  }
}
