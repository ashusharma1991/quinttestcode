import { Component } from '@angular/core';
import {StoriesService} from './services/stories.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quinttest';
  storiesval:any;
  

  constructor(private storiesService: StoriesService) { }

  ngOnInit() {

    this.storiesService.sendGetRequest().subscribe((data: any[]) => {
      console.log(data);
      this.storiesval = data;
    })
  }


}
