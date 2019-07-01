// This was of building a directive may cause an error in some cases (not common)
// It is better to build a directive the way better-highlight is constructed
import{ Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  // The [] will be recognized when you attach appBasicHighlight to an element
  //(even though you did not attach it as [appBasicHighlight]  )
    selector: '[appBasicHighlight]'
})

export class BasicHighlightDirective implements OnInit {
    constructor(private elementRef: ElementRef) {

    }

    ngOnInit() {
      this.elementRef.nativeElement.style.backgroundColor = 'green';
    }
}
