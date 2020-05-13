import { Directive, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[appActive]'
})
export class ActiveDirective {
 
  @HostBinding ('style.backgroundColor') backgroundColor: string;
  @HostBinding('style.color') color: string;

  @Input ('appActive') set changeStyle (condition) {
    if (condition) {
      this.backgroundColor = "#3498db"
      this.color = "white"
    } else {
      this.backgroundColor = "transparent"
      this.color = "black"
    }
  }

  
  constructor() { }

}
