import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  cardConsulta = [{
    "title": "Marcar consultas online",
    "subtitle":"Marcar consultar",
    "url":'../../../assets/imgs/online-consultation-lp-intro@2x.png',
    "cardbutton":"Consultas",
    "alt":"Imagem dos cards",
    "textContent":"Oferecemos uma ampla variedade de serviços médicos de qualidade para atender às suas necessidades.",
    "routerLink": 'consult-medical'
}]

cardConvenio = [{
   "title": "Planos para todos",
    "subtitle":"Planos para pessoas com preços",
    "url":'../../../assets/imgs/plano.jpg',
    "cardbutton":"Convenios",
    "alt":"Imagem dos cards",
    "textContent":"Nossa equipe de consultores está apta a lhe orientar sobre contratação de planos, e o melhor para você.",
}]
}
