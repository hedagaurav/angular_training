import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appIfdirective]',
  standalone: true
})
export class IfdirectiveDirective {

  private hasView = false;
  constructor(private tempref : TemplateRef<any>,
    private viewref : ViewContainerRef) { }

    @Input() set appIfdirective(condition : boolean) {
      if(!condition && !this.hasView){
        this.viewref.createEmbeddedView(this.tempref);
        this.hasView = true;
      }
      else if(condition && this.hasView){
        this.viewref.clear();
        this.hasView
      }
    }
}
