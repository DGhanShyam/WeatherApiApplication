import { Component } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'WeatherApiApp';
  selectedGender: string;
  userDate: any;
  favoriteCartoon: any;
  showHome: boolean= false;
  displayForm:boolean=  true;
  userAge: number;
  objData:any ;


  startDate = new Date(1990, 0, 1);
  teams: any[] = [
    { value: 'Male' },
    { value: 'Female' },
];
constructor(private _snackBar: MatSnackBar) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  Fname= new FormControl('');
  Lname= new FormControl('');
  phone= new FormControl('');
  pincode= new FormControl('');
  address= new FormControl('');

  dtcng($event){
    this.userDate= $event.target.value;
  }
  updateName(){
    // console.log(this.Fname.value);
    // console.log(this.Lname.value);
    // console.log(this.selectedGender);
    // console.log(this.emailFormControl.value);
    // console.log(this.address.value);
    // console.log(this.pincode.value);
    // console.log(this.phone.value);

    var timeDiff = Math.abs(Date.now() - this.userDate);
    let age = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
    // console.log('age', age);
    // this.userAge= age;

      if(this.pincode.value != "" && this.phone.value != "" && this.Lname.value != "" ){
      this.showHome =true;
      this.displayForm =false;

          this.objData=[ {
            Fname: this.Fname.value,
            Lname: this.Lname.value,
            pincode: this.pincode.value,
            age: age,
            gender: this.selectedGender,
            phone: this.phone.value,
            address: this.address.value,
            mail: this.emailFormControl.value,
          }
        ]
    }else {this._snackBar.open('Please fill form', 'OK');}

  }

  // matcher = new MyErrorStateMatcher();
}
