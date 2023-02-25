import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  title = "title";
  subtitle = "subtitle"
  url = '../../../assets/imgs/imagem-fundo-home.jpg'
  buttonright = "right"
  buttonleft = "left"
  alt = "Imagem dos cards"
  textContent = "text content"
}
