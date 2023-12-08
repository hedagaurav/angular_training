import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private ele : ElementRef, private render : Renderer2) { }

  @Input('hicolor') hcolor : string = 'pink';

  // @HostListener('mouseenter') onMouseEnter() {
  //   this.highlight('red');
  // }

  // @HostListener('mouseleave') onMouseLeave() {
  //   this.highlight('');
  // }

  @HostBinding('style.backgroundColor') bgc : string = '';

  @HostBinding('mouseenter') mouseEnter() {
    this.bgc = this.hcolor;
  }

  @HostBinding('mouseleave') mouseLeave() {
    this.bgc = '';
  }

  private highlight(color: string) {
    // this.ele.nativeElement.style.backgroundColor = color;
    this.render.setStyle(this.ele.nativeElement,'backgroundColor',color);
  }
}
