import { Component,OnInit, NgZone,ApplicationRef ,AfterViewInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Compiler } from '@angular/core';
declare var $:any;
declare var WheelIndicator:any;
declare var lastElement:any;
declare var firstElement: any;
declare var currentPosition :any;


@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})


export class HomeComponent{     

    
    ngOnInit(){
        $(window).scrollTop(0);
        currentPosition = 2;
    
    }
    ngAfterViewInit(){
        
        var elem = $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
        {
            width: 'auto',
            height: 12000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                //console.log(percent);
            }
        });
        var indicator = new WheelIndicator({
        elem: document.querySelector('.container'),
        callback: function (e) {
            
            if (!($('.logo-element').hasClass("active-loading"))) {



                if (e.direction == "up") {
                    if (currentPosition - 1 >= firstElement) {
                        var temp = currentPosition;
                        currentPosition = currentPosition - 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();

                        $("#" + string + "link").addClass("active")
                        $("#" + tempString + "link").removeClass("active")
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                    }
                } else {
                    if (currentPosition + 1 <= lastElement) {
                        var temp = currentPosition;
                        currentPosition = currentPosition + 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();
                        $("#" + string + "link").addClass("active")
                        $("#" + tempString + "link").removeClass("active")
                        $("a").animate({
                            color: '​#f31c31'
                        }, 1000);
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                    }
                }
            }
        }
    });
    indicator.getOption('preventMouse');
    }
   
 
}
