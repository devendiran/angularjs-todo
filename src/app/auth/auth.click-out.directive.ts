import { Directive, EventEmitter, Output, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[clickOutSide]'
})
export class ClickOutSide  {
	
	@Output()
	public clickOutSide = new EventEmitter();

  @Output()
  public escKeyPressed = new EventEmitter();

	constructor(private _elementRef : ElementRef) {
	}

  @HostListener('document:click',['$event'])
  public onClickOutSide(event: Event) {
    if (!this._elementRef.nativeElement.contains(event.target)) {
      this.clickOutSide.emit(event);
    }
  }

  @HostListener('document:keydown', ['$event'])
  public handleKeyboardEvent(event: KeyboardEvent) { 
    console.log('...........test',event);
    if(event.key === 'Escape') {
      this.escKeyPressed.emit(event);
    }
  }
}