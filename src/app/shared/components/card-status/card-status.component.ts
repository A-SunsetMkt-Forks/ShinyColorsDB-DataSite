import { Component, Input } from '@angular/core';
import { CardStatus } from '../../interfaces/cardStatus';

@Component({
  selector: 'app-card-status',
  imports: [],
  templateUrl: './card-status.component.html',
  styleUrl: './card-status.component.css'
})
export class CardStatusComponent {

  @Input()
  cardStatus!: CardStatus;

  constructor() { }
}
