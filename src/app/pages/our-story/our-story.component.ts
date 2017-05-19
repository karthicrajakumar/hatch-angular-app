import { Component,OnInit } from '@angular/core';
import {footerComponent} from '../../footer.component';
declare var $:any;

@Component({
  selector: 'our-story',
  templateUrl: './our-story.html',
  styleUrls: ['./our-story.css'],
})
export class ourStoryComponent {
    ngOnInit(){
        $('body').removeAttr("style")
    }
}