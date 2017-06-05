import { Component } from '@angular/core';
import {footerComponent} from '../../footer.component';
import {Router,NavigationStart,NavigationEnd } from '@angular/router';

declare var $:any;
@Component({
  selector: 'code-of-school',
  templateUrl: './code-of-school.html',
  styleUrls: ['./code-of-school.css'],
})
export class codeOfSchoolComponent {
    private active;
    constructor(private router: Router) {}
ngOnInit(){
    
      this.router.events.subscribe(event => {
            this.active = this.router.url.split("#")
            this.active  = this.active[1];
            if(this.active == "landin"){
                 $('.our-story-landing').parallaxify({
        
                horizontalParallax: true,
                verticalParallax: true,

                // enable or disable parallax effect for elements or backgrounds
                parallaxBackgrounds: true,
                parallaxElements: true,

                // set which positioning property is to be used
                // options include 'position' or 'transform' using css transformations
                positionProperty: 'transform',

                // enable for responsive layouts
                // (upon orientation changes or window resizing element positions are reevaluated
                responsive: false,

                // enable or disable mouse or gyroscope data as input for the plugin
                useMouseMove: true,
                useGyroscope: true,

                // use a Low Pass Filter to smooth sensor readings (1 = no filter)
                alphaFilter: 0.9,

                // set which motion type algorithm is to be used
                // options include 'natural', 'linear', 'gaussian', or 'performance'
                motionType: 'natural',
                mouseMotionType: 'gaussian',

                // define which sensor input has priority over the other
                // options are either 'mouse' or 'gyroscope'
                inputPriority: 'mouse',

                // define the delta angle (0 < motionAngle < 90) 
                // that is used to render max parallax in this direction
                motionAngleX: 80,
                motionAngleY: 80,

                // enable of adjustment of base position (using a Low Pass Filter)
                // (adapting to device usage while plugin is running)
                adjustBasePosition: false,
                // alpha for Low Pass Filter used to adjust average position
                alphaPosition: 0.05,

            });
            }else if(this.active == "story"){
                 $('.our-story-landing').parallaxify('destroy');
            }
            
        })
         window.scrollTo(0, 1);
        $('body').removeAttr("style")
         $('#fullpage').fullpage({
            lockAnchors: false,
		    anchors:['landin', 'story','hatchers'],
        });
        $.fn.fullpage.reBuild();
         $('.our-story-landing').parallaxify({
        
            horizontalParallax: true,
            verticalParallax: true,

            // enable or disable parallax effect for elements or backgrounds
            parallaxBackgrounds: true,
            parallaxElements: true,

            // set which positioning property is to be used
            // options include 'position' or 'transform' using css transformations
            positionProperty: 'transform',

            // enable for responsive layouts
            // (upon orientation changes or window resizing element positions are reevaluated
            responsive: false,

            // enable or disable mouse or gyroscope data as input for the plugin
            useMouseMove: true,
            useGyroscope: true,

            // use a Low Pass Filter to smooth sensor readings (1 = no filter)
            alphaFilter: 0.9,

            // set which motion type algorithm is to be used
            // options include 'natural', 'linear', 'gaussian', or 'performance'
            motionType: 'natural',
            mouseMotionType: 'gaussian',

            // define which sensor input has priority over the other
            // options are either 'mouse' or 'gyroscope'
            inputPriority: 'mouse',

            // define the delta angle (0 < motionAngle < 90) 
            // that is used to render max parallax in this direction
            motionAngleX: 80,
            motionAngleY: 80,

            // enable of adjustment of base position (using a Low Pass Filter)
            // (adapting to device usage while plugin is running)
            adjustBasePosition: false,
            // alpha for Low Pass Filter used to adjust average position
            alphaPosition: 0.05,
        
        });
    }
    ngOnDestroy(){
        $.fn.fullpage.destroy('all');
        window.scrollTo(0, 1);
         
        
    }
}