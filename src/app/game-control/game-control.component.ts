import {Component, OnInit, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  @Output('intervalEvent') intervalEvent:EventEmitter<number>= new EventEmitter<number>();
  intervalId ;
  intervalNum = 0;

  constructor() {

  }

  ngOnInit() {

  }

  onStart(){
    this.intervalId = setInterval(
      ()=>{
        this.intervalEvent.emit(this.intervalNum + 1);
        console.log(this.intervalNum);
        this.intervalNum++;
      }, 1000
    )
  }

  onStop() {
    clearInterval(this.intervalId);
  }
}
