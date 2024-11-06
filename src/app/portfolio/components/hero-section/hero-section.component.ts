import { AfterViewInit, Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [],
  templateUrl: './hero-section.component.html',
  styleUrl: './hero-section.component.scss'
})
export class HeroSectionComponent implements AfterViewInit {
  @Output() onHire = new EventEmitter();
  @ViewChild('typedElement', { static: true }) typedElement!: ElementRef;

  ngAfterViewInit() {
    const options = {
      strings: ['MEAN Stack', 'Full-Stack Java'],
      typeSpeed: 300,
      backSpeed: 50,
      backDelay: 300,
      startDelay: 500,
      loop: true
    };

    new Typed(this.typedElement.nativeElement, options);
  }

}
