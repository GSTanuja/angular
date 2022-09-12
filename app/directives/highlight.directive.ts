import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {
  //inject ElementRef
  //This is used to get the nativeelement where the directive is applied 
  constructor(private _elementRef:ElementRef) { }


  ngOnInit(): void {
    //get the native element and set the style
    this._elementRef.nativeElement.style.color='blue'
    this._elementRef.nativeElement.style.backgroundColor='brown'
  }

}
