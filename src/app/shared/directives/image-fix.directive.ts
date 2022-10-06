import { Directive, Input, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appImgFallback]',
})
export class ImgFallbackDirective {
  @Input() appImgFallback: string | undefined;

  constructor(private eRef: ElementRef) {}

  @HostListener('error')
  loadFallbackOnError() {
    console.log('eror');
    const element: HTMLImageElement = <HTMLImageElement>this.eRef.nativeElement;
    element.src = this.appImgFallback || 'https://via.placeholder.com/200';
  }
}
