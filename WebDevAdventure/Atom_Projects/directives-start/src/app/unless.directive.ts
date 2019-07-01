import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {
  //the method (line 7) has to share the name of the Directive (line 4)
  @Input() set appUnless(condition: boolean) {
    if (!condition) {
      this.vcRef.createEmbeddedView(this.templateRef);
    }
    else {
      //if condition is true, we display nothing
      this.vcRef.clear();
    }
  }

// template is the what we will inject. The second argument is where we will inject it
  constructor(private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef) {

  }
}
