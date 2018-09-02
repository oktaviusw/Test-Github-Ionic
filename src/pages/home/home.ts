import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { FirstPage } from '../first/first';
//import { FirstPage } from './first';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  private data = {
    namaLengkap : '',
    umur : ''
  };

  constructor(public navCtrl: NavController, private formBuilder: FormBuilder) {
  }

  buttonClick(){
    console.log("Button is Clicked");
  }

  moveToFirstPage(){
    //console.log(this.data);
    this.navCtrl.push(FirstPage, {data: this.data});
  }

}
