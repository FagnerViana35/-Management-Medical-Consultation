import { Component, Input } from '@angular/core';
import { SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-avatar-perfil',
  templateUrl: './avatar-perfil.component.html',
  styleUrls: ['./avatar-perfil.component.scss'],
  styles: [
    `
      :host {
        border-radius: 50%;
      }
    `
  ]
})
export class AvatarPerfilComponent {

  @Input() size: number = 40;
  @Input() companyId!: number;
  @Input() url: string = "https://source.unsplash.com/c_GmwfHBDzk/200x200";


}
