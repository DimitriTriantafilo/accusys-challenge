import { Component, HostListener, OnInit } from '@angular/core';
import { BackEndService } from '../services/back-end-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( private backEndService: BackEndService) { }
  
  navbarfixed: boolean = false;
  lastScrollTop = 0;
  @HostListener('window:scroll', ['$event']) onscroll(){
      
      var scrollTop = window.pageYOffset
      
      if(scrollTop < this.lastScrollTop){
        this.navbarfixed = true
        }
      else{
        this.navbarfixed = false; 
        
    }
      this.lastScrollTop = scrollTop
     
  }
  ngOnInit(): void {
    this.onFetch()
  }

  onFetch(){
    this.backEndService.fetchData()
  }
}
