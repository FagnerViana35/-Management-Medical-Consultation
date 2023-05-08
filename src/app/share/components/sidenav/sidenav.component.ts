import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSidenav } from '@angular/material/sidenav';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import Theme from 'src/app/interfaces/theme.interface';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss'],
})
export class SidenavComponent implements OnInit {
  
  destroy$: Subject<any> = new Subject<any>();
  @ViewChild('sidenav') sidenav!: MatSidenav;

  constructor(private router: Router){}

  ngOnInit(): void {}

  

  abrirSidebar() {
    this.sidenav.open();
  }

  fecharSidebar() {
    this.sidenav.close();
  }

  ngOnDestroy(){
    this.destroy$.next(true);
  }
}
 