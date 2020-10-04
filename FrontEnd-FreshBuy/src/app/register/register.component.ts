import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
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

export const UserandPass = [["1234C","abc"],["1234P","abc"],["1234A","abc"]];
