import { Directive, ElementRef, Renderer2, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

  @Input('appColor') public color: string;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) {}

  public ngOnChanges(): void {
    let y: Date = new Date();
    y.setMonth(y.getMonth() - environment.terms[1]);
    let m: Date = new Date();
    m.setMonth(m.getMonth() - environment.terms[0]);
    if (isNaN(+m)) { return; }
    m.toISOString();
    let w: Date = new Date();
    w.setDate(w.getDate() - environment.terms[2]);
    if (isNaN(+w)) { return; }
    w.toISOString();
    let p: Date = new Date(this.color);
    if (isNaN(+p)) { return; }
    p.toISOString();
    if (y > p) {
       this.renderer2.setStyle(this.elementRef.nativeElement, 'background', environment.colors[0]);
     } else if (m > p) {
       this.renderer2.setStyle(this.elementRef.nativeElement, 'background', environment.colors[1]);
    } else if (w > p) {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background', environment.colors[2]);
    } else {
      this.renderer2.setStyle(this.elementRef.nativeElement, 'background', environment.colors[3]);
    }
  }

  }
