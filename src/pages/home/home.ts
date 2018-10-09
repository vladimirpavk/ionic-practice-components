import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private numTimesTapped:number = 0;
  private numTimesPressed:number = 0;
  private youWon:boolean = (this.numTimesPressed==4) && (this.numTimesTapped==2);

  constructor(public navCtrl: NavController) {

  }

  private onTap(){
    this.numTimesTapped++;
  }

  private onPress(){
    this.numTimesPressed++
  }

  private onResetTaps(){
    this.numTimesTapped = 0;
  }

  private onResetPressed(){
    this.numTimesPressed = 0;
  }

  private onResetAll(){
    this.onResetPressed();
    this.onResetTaps();
  }
}
