import { Component } from '@angular/core';

@Component({
    selector:'my-app',
    template:`
  
  <nav class="navbar navbar-inverse  fixed-top" id="navbar1">
        <a class="navbar-brand" routerLink="/home" id="1">
            <img src="/assets/images/logo.png" width="158.7" height="38" alt="">
        </a>

        <div class="open" id="sidebar">
            <span class="cls"></span>
            <span>
		<ul class="sub-menu " >
			<li>
				<a routerLink="/home"   routerLinkActive="active">Introduction</a>
			</li>
			<li>
				<a routerLink="/our-story"  routerLinkActive="active" >Our Story</a>
			</li>
			<li>
				<a routerLink="/what-we-do" routerLinkActive="active" >What We Do</a>
			</li>
			<li>
				<a routerLink="/code-of-school" routerLinkActive="active" >Code of School</a>
			</li>
			<li>
				<a routerLink="/built-by-hatch"  routerLinkActive="active">Built By Hatch</a>
			</li>
			<li>
				<a routerLink="/news"  routerLinkActive="active" >News Ahem!</a>
			</li>
			<li>
				<a routerLink="/contact"   routerLinkActive="active">Contact</a>
			</li>
           <br>
           <a class="Linkedin" href="/contact" >Linkedin </a>
           <a class="facebook" >Facebook </a>
           <a class="medium" >Medium </a>
            <a class="dribble" >Dribble </a>
            <a class="instagram" >Instagram </a>
            <a class="twitter" >Twitter </a>
        </ul>
	</span>
            <span class="cls"></span>
        </div>
    </nav>
  <router-outlet></router-outlet>
`
    
})
export class AppComponent { }
