import { AfterViewInit, Component, ElementRef, HostListener, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { HeroSectionComponent } from "./hero-section/hero-section.component";
import { AboutComponent } from "../about/about.component";
@Component({
  selector: 'app-portfolio',
  standalone:true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [HeroSectionComponent, AboutComponent]
})
export class PortfolioComponent {
  isScrolled = false;
  @ViewChild('about', { static: false }) aboutSection!: ElementRef;
  @ViewChild('project', { static: false }) projectSection!: ElementRef;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef;
  @ViewChild('offcanvas', { static: false }) offcanvas!: ElementRef;


  scrollToSection(section: string) {
    let target: ElementRef | undefined;

    switch (section) {
      case 'about':
        target = this.aboutSection;
        break;
      case 'project':
        target = this.projectSection;
        break;
      case 'contact':
        target = this.contactSection;
        break;
    }

    if (target) {
      const headerOffset = 70; 
      const elementPosition = target.nativeElement.offsetTop;
      const offsetPosition = elementPosition - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50; // Apply class if scrolled 50px down
    console.log("helo how are" ,this.isScrolled)
  }

}
