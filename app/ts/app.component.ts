import {Component} from 'angular2/core';
import {Confiq} from './confiq.service';
import {Video} from './video';
import {PlaylistComponent} from './playlist.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/ts/app.component.html',
    directives:  [PlaylistComponent]
})

export class AppComponent {
    myvideos =Confiq.MAIN_HEADING;
    videos : Array<Video>;

    constructor (){
        this.videos=[
                new Video(1,'Nested Components','f8qBeaGe2S4','Angular 2 for Beginners - Tutorial 7 - Nested Components'),
                    new Video(2,'Passing Data to Components','bKWDKmHvF78','Angular 2 for Beginners - Tutorial 8 - Passing Data to Components')
            ]
    }
}
