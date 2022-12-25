import { Component, Input } from '@angular/core';
import { freeApiService } from './services/freeapi.service'; /*importing service */
import { Getwithparameters } from './classes/getwithparameters'; /*importing class*/
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'zumit';
  
  opos=`{
    "code":"a=input();b=input();print('nikhil'+a+b+c)"
}`;

n="a=input();b=input();print('nikhil'+a+b);";
  json = JSON.parse(this.opos);
  
  /*start of api call and display the data*/
  constructor(private _freeApiService : freeApiService)/*freeApiService is being injected using _freeApiService as instance of it*/{}
  objpost?:Getwithparameters;
  option="python3";
  Inputs="1 5";
  run(){
    
    this.Inputs=this.Inputs.replace(" ", "\\n")
    this.opos="{\"code\":\""+this.n+"\",\"lang\":\""+this.option+"\",\"input\":\""+this.Inputs+"\"}";
    this.Inputs=this.Inputs.replace("\\n", " ")
    this.json = JSON.parse(this.opos);
    this._freeApiService.post(this.json)/*calling the service nut it will not be called untill we call subscribe method*/
    .subscribe(
      /*content return from rest api will be store in data which pass it listcomments */
      data=>{
        this.objpost=data;
      }
    );
  }
  update(){
    if(this.option=="python3")this.n="a=input();b=input();print('nikhil'+a+b);";
    else if(this.option=="lua")this.n="local x = 10; local y = 25; local z = x + y;  print('Sum of x+y =',z);";
    else if(this.option=="php")this.n="<?php $x=10; $y=245; $z=$x+$y; $msg = 'Sum of x+y = '; print($msg.$z); ?>";
    else if(this.option=="dart")this.n="void main(){ var x = 10; var y = 25; var z = x + y; print('x + y = $z'); }";
    else if(this.option=="java")this.n="import java.util.Scanner;  public class MyClass { public static void main(String args[]) { Scanner myObj = new Scanner(System.in);System.out.println(\\\"Enter username\\\");String userName = myObj.nextLine();  String Name = myObj.nextLine();System.out.println(\\\"Username is: \\\" + userName+Name);} }";
  }
  
   
}
