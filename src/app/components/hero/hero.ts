import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import AOS from 'aos';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero implements OnInit {

  ngOnInit(): void {
    AOS.init({
      duration: 1300,
      once: true,
    });
  }

}
