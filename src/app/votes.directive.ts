import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appVotes]'
})
export class VotesDirective {
  
  constructor(elem:ElementRef) {
    elem.nativeElement.style.backgroundColor="#BACEC2";
   }

}
