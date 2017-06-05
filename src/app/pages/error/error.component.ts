import { Component } from '@angular/core';
declare var $:any;
@Component({
  selector: 'error',
  templateUrl: './error.html',
  styleUrls: ['./error.css'],
})
export class ErrorComponent { 
    ngOnInit(){
         window.scrollTo(0, 1);
        $('body').removeAttr("style")
         $('#fullpage').fullpage({
            lockAnchors: false,
		    anchors:['404'],
        });
    }
    ngOnDestroy(){
        $.fn.fullpage.destroy('all');
        window.scrollTo(0, 1);
         
        
    }

}