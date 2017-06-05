import { Component } from '@angular/core';
declare var $:any;
@Component({
    selector:'my-app',
    template:`
  
  <nav class="navbar navbar-inverse  fixed-top" id="navbar1" style="background-color:transparent;box-shadow:none;">
        <a class="navbar-brand" routerLink="/home" id="1" style="width:160px">
            <img src="/assets/images/logo.png" width="158.7" height="38" alt="" id="logo-image">
        </a>

        <div class="open" id="sidebar">
            <span class="cls"></span>
            
            <span>
		<ul class="sub-menu " >
			<li>
				<a routerLink="/home"   routerLinkActive="active-nav" (click) = close() >Introduction</a>
			</li>
			<li>
				<a routerLink="/ourStory"  fragment="landin" routerLinkActive="active-nav" (click) = close()>Our Story</a>
			</li>
			<li>
				<a routerLink="/whatWeDo" fragment="intro" routerLinkActive="active-nav" (click) = close()>What We Do</a>
			</li>
			<li>
				<a routerLink="/codeOfSchool" fragment="landin" routerLinkActive="active-nav" (click) = close()>Code of School</a>
			</li>
			
			<li>
				<a routerLink="/contact"   routerLinkActive="active-nav" (click) = close()>Contact</a>
			</li>
           <br><br>
            <div class="row"> </div>
           <div class="row col-lg-8 col-md-8" style="margin-left:-5px;color:white;font-size:20px;line-height:30px">
           <a class="Linkedin" href="/contact" class="col-lg-6 col-md-6" style="text-decoration:none;color:white">Linkedin </a>
           <a class="facebook" class="col-lg-6 col-md-6" style="text-decoration:none;color:white">Facebook </a>
           
            <a class="instagram" class="col-lg-6 col-md-6" style="text-decoration:none;color:white">Instagram </a>
            <a class="twitter" class="col-lg-6 col-md-6" style="text-decoration:none;color:white">Twitter </a>
            </div>
        </ul>
	</span>
            <span class="cls"></span>
        </div>
    </nav>
  <router-outlet></router-outlet>
`
    
})


export class AppComponent {
   close(){
       
         $('.open').removeClass('oppenned');
         event.stopPropagation();
   }
}
