import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css',
              './../app.component.css']
})

export class RegisterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

var numbers = ["0","1","2","3","4","5","6","7","8","9"];

export function isNumber(hID, max){
  
  var count = 0;
  var final = hID.length;
  if(final != max){
    return "Error"; 
  }
  while(count<final){
    if(numbers.includes(hID.charAt(count))){
      count++;
    }else{
      return "Error"
    }
  }
  return hID;
}

export function isEmail(hEmail){

  var flag = 0;
  var count = 0;
  var atPosition;
  var length = hEmail.length;

  while(count<length){
    if(hEmail.charAt(count) == "@" && count>0){
      atPosition = count;
      flag = 1;
    }else if(hEmail.charAt(count) == "." && flag == 1 && (count+1)<length && (atPosition + 1) < count){
      return hEmail;
    }
    count++;
  }
  return "Error"
}
