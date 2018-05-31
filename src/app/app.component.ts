import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   currentIntervalStore:number[] = [];

  onEventReceive(currentIntervalValue:number){
    this.currentIntervalStore.push(currentIntervalValue)
  }


}
