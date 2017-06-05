import { Component,HostListener } from '@angular/core';
import {footerComponent} from '../../footer.component';
import {Router,NavigationStart,NavigationEnd } from '@angular/router';
declare var $:any;

@Component({
  selector: 'what-we-do',
  templateUrl: './what-we-do.html',
  styleUrls: ['./what-we-do.css'],
})
export class whatWeDoComponent {
    private active;
   
    constructor(private router: Router) {}
    
        
    
    ngOnInit(){
        
        window.scrollTo(0, 1);
        $('body').removeAttr("style")
        $('#logo-image').attr("src","/assets/images/logo-reversed.png")
        $('#fullpage').fullpage({
            lockAnchors: false,
		    anchors:['intro','app-dev', 'design','iot'],
        });
        $.fn.fullpage.reBuild();
        
       
        
         this.router.events.subscribe(event => {
         
                    
                    this.active = this.router.url.split("#")
                    this.active  = this.active[1]
                    
                    if(this.active == "app-dev"){
                        $('.open span:nth-child(1)').css("background-color",'white')
                         $('.open span:nth-child(2)').css("background-color",'white')
                         $('.open span:nth-child(3)').css("background-color",'white')
                        
                        $('#logo-image').attr("src","/assets/images/logo-reversed.png")
                        $('#path1').css('stroke-dashoffset','0px')
                        $('#path2').css('stroke-dashoffset','0px')
                        $('#path3').css('stroke-dashoffset','0px')
                        $('#path4').css('stroke-dashoffset','0px')
                        $('#path5').css('stroke-dashoffset','0px')
                        $('#path8').css('stroke-dashoffset','0px')
                        $('#path6').css('stroke-dashoffset','0px')
                        $('#path7').css('stroke-dashoffset','0px')
                        $('#path9').css('stroke-dashoffset','0px')
                        $('#path10').css('stroke-dashoffset','0px')
                        $('#path11').css('stroke-dashoffset','0px')
                        $('#path12').css('stroke-dashoffset','0px')
                        $('#path13').css('stroke-dashoffset','0px')

                        $('#path1').css('fill','white')
                        $('#path2').css('fill','white')
                        $('#path3').css('fill','white')
                        $('#path4').css('fill','white')
                        $('#path5').css('fill','white')
                        $('#path6').css('fill','white')
                        $('#path7').css('fill','white')
                        $('#path8').css('fill','white')
                        $('#path9').css('fill','white')
                        $('#path10').css('fill','white')
                        $('#path11').css('fill','white')
                        $('#path12').css('fill','white')
                        $('#path13').css('fill','white')
                    }else if(this.active == "design"){
                        $('.open span:nth-child(1)').css("background-color",'white')
                         $('.open span:nth-child(2)').css("background-color",'white')
                         $('.open span:nth-child(3)').css("background-color",'white')
                        $('#logo-image').attr("src","/assets/images/logo-reversed.png")
                        $('.design-path').css('stroke-dashoffset','0px')
                        
                         $('.design-path').css('fill','white')
                    }else if(this.active == 'iot'){
                         $('.open span:nth-child(1)').css("background-color",'white')
                         $('.open span:nth-child(2)').css("background-color",'white')
                         $('.open span:nth-child(3)').css("background-color",'white')
                        $('#logo-image').attr("src","/assets/images/logo-reversed.png")
                        $('.iot-path').css('stroke-dashoffset','0px')
                        
                         $('.iot-path').css('fill','white')
                    }
                    if(this.active == "intro"){
                         $('.open span:nth-child(1)').css("background-color",'black')
                         $('.open span:nth-child(2)').css("background-color",'black')
                         $('.open span:nth-child(3)').css("background-color",'black')
                         $('#logo-image').attr("src","/assets/images/logo.png")
                    }
 
    
  }); 
        
    }
      navByUrl(id){
       $.fn.fullpage.moveSectionDown();
                  
        
    }
    
    ngAfterViewInit(){
        function generateAnimationQueue(max){
            var animationQueue = [];
            for(var i = 0; i < max; i++) {
                var numberIsInArray = false;
                var rand = randomNumberFromRange(max,1);
                for(var j = 0; j < animationQueue.length; j++){
                    if(rand === animationQueue[j]) {
                        numberIsInArray = true;
                        i--;
                    }
                }
                if(!numberIsInArray){
                   animationQueue.push(rand);
                }
            }
            return animationQueue;
        }
        
        function randomNumberFromRange(max,min)
        {
            return Math.floor(Math.random()*(max-min+min)+min);
        }
        function animateBubbles(order , obj){
            for(var i=0; i < 7 ; i++){
                if(order[i] == 1){
                    if(i == 3){
                        obj.transition({
                        x:-10,
                        y:-5,
                        easing: 'linear',
                        duration: 3000
                        
                        });
                    }else{
                         obj.transition({
                        x:-10,
                        y:-5,
                        easing: 'linear',
                        duration: 2500
                        })
                    }
                }else if(order[i] == 2){
                     if(i == 3){
                        obj.transition({
                        y:-10,
                        x:-5,
                        easing: 'linear',
                        duration: 2000
                        
                            
                        });
                    }else{
                         obj.transition({
                        y:-10,
                        x:-5,
                        easing: 'linear',
                        duration: 2000
                        })
                    }
                }else if(order[i] == 3){
                     if(i == 3){
                        obj.transition({
                        x:10,
                        y:5,
                        easing: 'linear',
                        duration: 4000
                        
                            
                        });
                    }else{
                         obj.transition({
                        x:10,
                        y:5,     
                        easing: 'linear',
                        duration: 3500
                        })
                    }
                }else if(order[i] == 4){
                     if(i == 3){
                        obj.transition({
                        x:5,
                        y:10,
                        easing: 'linear',
                        duration: 2000
                        
                            
                        });
                    }else{
                         obj.transition({
                        x:5,
                        y:10,
                        easing: 'linear',
                        duration: 4500
                     })
                    }
                }else if(order[i] == 5){
                     
                        obj.transition({
                        x:-10,
                        y:5,
                        easing: 'linear',
                        duration: 5000
                     })
                    
                }else if(order[i] == 6){
                     
                        obj.transition({
                        x:-5,
                        y:10,
                        easing: 'linear',
                        duration: 1500
                     })
                    
                }else if(order[i] == 7){
                     
                        obj.transition({
                        x:10,
                        y:10,
                        easing: 'linear',
                        duration: 2800
                     })
                    
                }else if(order[i] == 8){
                     
                        obj.transition({
                        x:-10,
                        y:-10,
                        easing: 'linear',
                        duration: 1900
                     })
                    
                }
            }
            
        }
       for(var i =0; i<50 ; i++){
             $(".wavy").each(function(i,obj){
                var order = []
                order = generateAnimationQueue(8);
                animateBubbles(order,$(this));
            
            })
        }
        
        
        var animation= 0;
         $(".bubble-image").hover(function(){
            var order = [];
            animation =0;
           
            order = generateAnimationQueue(8)
            
            if(order[0] == 1){
                 if(animation ==0 && !$(this).hasClass("under-animation")){
                    $(this).addClass("under-animation");
                    animation = 1 ;
                     $(this)
                    .transition({
                    x:'-40px',
                    y:'-40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0; $(this).removeClass("under-animation") }
                    })
                   
                }
            }else if(order[0] == 2){
                 if(animation ==0 && !$(this).hasClass("under-animation")){
                     $(this).addClass("under-animation"); 
                    animation = 1 ;
                     $(this)
                    .transition({
                    x:'40px',
                    y:'-40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 3){
                 if(animation ==0 && !$(this).hasClass("under-animation")){
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'-40px',
                    y:'40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 4){
                 if(animation ==0 && !$(this).hasClass("under-animation"))  {
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'40px',
                    y:'40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 5){
                 if(animation ==0 && !$(this).hasClass("under-animation"))  {
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'0px',
                    y:'40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 6){
                 if(animation ==0 && !$(this).hasClass("under-animation"))  {
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'40px',
                    y:'0px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 7){
                 if(animation ==0 && !$(this).hasClass("under-animation"))  {
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'-40px',
                    y:'0px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }else if(order[0] == 8){
                 if(animation ==0 && !$(this).hasClass("under-animation"))  {
                     $(this).addClass("under-animation");
                     animation = 1 ;
                     $(this)
                    .transition({
                    x:'0px',
                    y:'-40px',
                    duration:'500',
                    easing:'linear'
                    })
                    .transition({
                    x:'0px',
                    y:'0px',
                    duration:'2000',
                    easing:'linear',
                    complete: function(){animation = 0 ; $(this).removeClass("under-animation")}
                    })
                    
                }
            }
        
           
               
        });
        
    }
    
    ngOnDestroy(){
        
        $.fn.fullpage.destroy('all');
        
         $('.open span:nth-child(1)').css("background-color",'black')
         $('.open span:nth-child(2)').css("background-color",'black')
         $('.open span:nth-child(3)').css("background-color",'black')
        
        $('#logo-image').attr("src","/assets/images/logo.png")
        
        
    }
 

}