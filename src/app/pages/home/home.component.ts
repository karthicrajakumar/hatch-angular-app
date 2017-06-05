import { Component,OnInit, NgZone,ApplicationRef ,AfterViewInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Compiler } from '@angular/core';
declare var $:any;
declare var WheelIndicator:any;

declare var lastElement:any;
declare var firstElement: any;
declare var currentPosition :any;
declare var keyboardJS:any;

@Component({
  selector: 'home',
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})

export class HomeComponent{ 
     
   private val = 0;
   
    constructor(private router: Router) {}
    
    ngOnInit(){
        
        $(window).scrollTop(0);
        currentPosition = 2;
        lastElement = 5;
        
       
     
        

    
    }
    navByUrl(id){
        this.val =  $('#sidebar').hasClass("oppenned");
        
        var focus = id;
        
        if (focus == 1 && this.val == 0) {
              this.router.navigateByUrl('/whatWeDo#app-dev');
           
        }else if(focus ==2 && this.val == 0){
              this.router.navigateByUrl('/whatWeDo#design');
            
        }else if(focus ==3 && this.val == 0){
              this.router.navigateByUrl('/whatWeDo#iot');
            
        }
         else if(focus ==4 && this.val == 0){
              this.router.navigateByUrl('/codeOfSchool');
            
        }
       
        
    }

    
    ngAfterViewInit(){
         keyboardJS.resume()
        keyboardJS.reset()
        var scrolling = 0;
        keyboardJS.bind('left', function(e) { 
        keyboardJS.pause()
            
        if ((currentPosition - 1 >= firstElement) && scrolling == 0) {
                        
                        scrolling =1;
                        var temp = currentPosition;
                        currentPosition = currentPosition - 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();

                        $("#" + string + "link").addClass("active-nav")
                        $("#" + tempString + "link").removeClass("active-nav")
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                        setTimeout(function(){
                             scrolling = 0;
                             keyboardJS.resume()
                        },500)
                       
             
                    }
            else{
                keyboardJS.resume()
            }
        
        
       
    
    
            });
        
        keyboardJS.bind('right', function(e) { 
        keyboardJS.pause()
        if (currentPosition + 1 <= lastElement && scrolling == 0 ) {
            
                        scrolling =1;
                        var temp = currentPosition;
                        currentPosition = currentPosition + 1;
                        var tempString = temp.toString();
                        var string = currentPosition.toString();
                        $("#" + string + "link").addClass("active-nav")
                        $("#" + tempString + "link").removeClass("active-nav")
                        $("a").animate({
                            color: '​#f31c31'
                        }, 1000);
                        $('html,body').animate({
                                scrollTop: $("#" + string).offset().left
                            },
                            'slow');
                         setTimeout(function(){
                             scrolling = 0;
                              keyboardJS.resume()
                        },500)
                        setTimeout(function(){
                            changePositionOfElement(currentPosition)
                        },500)
                        
                        
                    }
            else{
                keyboardJS.resume()
            }
       
    
        });
        keyboardJS.on('up',function(e){
            e.preventDefault();
        });
        keyboardJS.on('down',function(e){
            e.preventDefault();
        });
        keyboardJS.on('space',function(e){
            e.preventDefault();
        }); 
        keyboardJS.on('pageup',function(e){
            e.preventDefault();
        });
        keyboardJS.on('pagedown',function(e){
            e.preventDefault();
        }); 
        keyboardJS.on('home',function(e){
            e.preventDefault();
        });
        keyboardJS.on('end',function(e){
            e.preventDefault();
        }); 

       
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
       
         function changePositionOfElement(currentPos){
            var elem  = document.getElementById("row"+currentPos)
            var offsetLeft = elem.offsetLeft;
            var rect = elem.getBoundingClientRect()
            
            
            if(rect.left < 0  && !$(elem).hasClass("alter")){
                
                
                if(screen.width < 900) {
                    var offset = screen.width * (25/100);
                    var temp = Math.abs(rect.left) + offsetLeft - offset
                }else if(screen.width > 900){
                    var offset = screen.width * (5/100);
                    
                    var temp = Math.abs(rect.left) + offsetLeft + offset
                }
                $(elem).animate({
                    marginLeft :temp+"px"
                },500)
                //elem.style.marginLeft = temp+"px";
                
            }else if(rect.left > 0 && !$(elem).hasClass("alter")){
                if(screen.width < 900) {
                    var offset = screen.width * (6/100);
                    var temp = Math.abs(rect.left) + offsetLeft - offset
                }else{
                    var offset = screen.width * (5/100);
                    var temp = offsetLeft - Math.abs(rect.left) + offset;
                }
                
                $(elem).animate({
                    marginLeft :temp+"px"
                },500)
                //elem.style.marginLeft = temp+"px";
            }
            if(!$(elem).hasClass("alter")){
                elem.className += " alter";
            }
        }
        
        
        var elem = $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
        {
            width: 'auto',
            height: 12000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
            onScroll: function (percent) { //optional: callback function that will be called when the user scrolls down, useful for animating other things on the page
                //console.log(percent);
            }
        });
        var scrollWheel = 0;
        var indicator = new WheelIndicator({
        
        elem: document.querySelector('.container'),
        callback: function (e) {
            
            if (!($('.logo-element').hasClass("active-loading"))) {



                if (e.direction == "up") {
                    if (currentPosition - 1 >= firstElement && scrollWheel == 0) {
                        scrollWheel = 1;
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
                        setTimeout(function(){
                            
                            scrollWheel = 0;
                        },500)
                    }
                } else {
                    if (currentPosition + 1 <= lastElement && scrollWheel == 0) {
                        scrollWheel = 1;
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
                        setTimeout(function(){
                            changePositionOfElement(currentPosition)
                            
                        },1000)
                         setTimeout(function(){
                            
                            scrollWheel = 0;
                        },500)
                        
                    }
                }
            }
        }
    });
    indicator.getOption('preventMouse');
    
    $('#page').touchwipe({
    wipeLeft: function () {
    
        if (currentPosition + 1 <= lastElement) {
            var temp = currentPosition;
            currentPosition = currentPosition + 1;
            var tempString = temp.toString();
            var string = currentPosition.toString();
            $("#" + string + "link").addClass("active-nav")
            $("#" + tempString + "link").removeClass("active-nav")
            $("a").animate({
                color: '​#f31c31'
            }, 1000);
            $('html,body').animate({
                    scrollTop: $("#" + string).offset().left
                },
                'slow');
             setTimeout(function(){
                            changePositionOfElement(currentPosition)
                        },1000)
        }
    },
    wipeRight: function () {
        if (currentPosition - 1 >= firstElement) {
            var temp = currentPosition;
            currentPosition = currentPosition - 1;
            var tempString = temp.toString();
            var string = currentPosition.toString();

            $("#" + string + "link").addClass("active-nav")
            $("#" + tempString + "link").removeClass("active-nav")
            $('html,body').animate({
                    scrollTop: $("#" + string).offset().left
                },
                'slow');
           
        }
    },
    min_move_x: 100,
    min_move_y: 100,
    preventDefaultEvents: true

    });
    
     var x,y,x2,y2,X,Y;
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
      keyboardJS.pause();

         
        
    }
   
 
}
