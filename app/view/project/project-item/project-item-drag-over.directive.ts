import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appProjectItemDragOver]'
})
export class ProjectItemDragOverDirective {

  constructor(private el: ElementRef) {
  }

  @HostListener('dragover') onDragOverStart() {
    this.highlight('#EDF8FD');
  }
  @HostListener('dragover') onDragOverLeave() {
    this.highlight(null);
  }
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }


}
