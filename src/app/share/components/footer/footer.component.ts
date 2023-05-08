import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  options = [
    { value: 'opcao1', label: 'Opção 1' }, 
    { value: 'opcao2', label: 'Opção 2' }, 
    { value: 'opcao3', label: 'Opção 3' }, 
    { value: 'opcao4', label: 'Opção 4' }, 
    { value: 'opcao5', label: 'Opção 5' }
  ];

  selectedOption = 'opcao1';
}
