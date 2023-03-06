import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent {

  @Input() title!: string; 
  @Input() subtitle!: string; 
  @Input() url!: string;
  @Input() alt!: string;
  @Input() textContent!: string;
  @Input() buttoncard!: string;
  @Input() routerLink!: string;
}
