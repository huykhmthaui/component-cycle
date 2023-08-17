import { Component, ContentChild, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent{
  userName = "Maria";
  isChildDestroyed = false;

  UpdateUser(){
    let newName : any = document.querySelector('input')?.value;
    this.userName = newName;
  }

  destroy() {
    this.isChildDestroyed = true;
  }
}

