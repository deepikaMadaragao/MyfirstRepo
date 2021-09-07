import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appChangeTxt]'
})
export class ChangeTxtDirective {

  constructor(Element: ElementRef) {
    console.log(Element);
    Element.nativeElement.innerText = "Text has been changed from the directive";
   }

}
