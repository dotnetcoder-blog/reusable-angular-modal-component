import { Component, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'dnc-modal',
  templateUrl: './dnc-modal.component.html',
  styleUrls: ['./dnc-modal.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('300ms ease-in', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('300ms ease-out', style({ opacity: 0 })),
      ]),
    ]),
  ],
})
export class DncModalComponent {
  @Input() visible = false; 
  @Input() size: 'small' | 'normal' | 'large' = 'normal'; 
  @Input() clickBackdropToClose = true; 

  @Output() closed = new EventEmitter<void>(); 

  constructor() { }

  show(): void {
    this.visible = true;
  }

  hide(): void {
    this.visible = false;
    this.closed.emit();
  }

  onBackdropClick(event: MouseEvent): void {
    if (this.clickBackdropToClose && event.target === event.currentTarget) {
      this.hide();
    }
  }

  getModalSizeClass(): string {
    switch (this.size) {
      case 'small':
        return 'dnc-modal-sm';
      case 'large':
        return 'dnc-modal-lg';
      default:
        return 'dnc-modal-md';
    }
  }
}
