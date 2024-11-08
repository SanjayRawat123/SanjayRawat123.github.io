import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import Typed from 'typed.js';
import { HeroSectionComponent } from "./components/hero-section/hero-section.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectComponent } from "./components/project/project.component";
import { CommonModule } from '@angular/common';
import { ContactComponent } from "./components/contact/contact.component";
@Component({
  selector: 'app-portfolio',
  standalone: true,
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss',
  imports: [HeroSectionComponent, AboutComponent, ProjectComponent, CommonModule, ContactComponent]
})
export class PortfolioComponent implements OnInit, AfterViewInit {
  isScrolled = false;
  activeMenu: string;

  @ViewChild('about', { static: false }) aboutSection!: ElementRef;
  @ViewChild('project', { static: false }) projectSection!: ElementRef;
  @ViewChild('contact', { static: false }) contactSection!: ElementRef;
  @ViewChild('home', { static: false }) homeSection!: ElementRef;

  ngOnInit(): void {
    this.activeMenu = 'home'; // Set default active section
  }

  ngAfterViewInit(): void {
    this.onWindowScroll(); // Trigger initial scroll to highlight the right menu
  }

  scrollToSection(section: string) {
    this.activeMenu = section; // Set the active section
    const target = this.getSectionElement(section);

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

  getSectionElement(section: string): ElementRef | undefined {
    switch (section) {
      case 'about':
        return this.aboutSection;
      case 'project':
        return this.projectSection;
      case 'contact':
        return this.contactSection;
      default:
        return this.homeSection;
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop = window.scrollY || document.documentElement.scrollTop;
    this.isScrolled = scrollTop > 50;


    const sections = [
      { name: 'home', element: this.homeSection },
      { name: 'about', element: this.aboutSection },
      { name: 'project', element: this.projectSection },
      { name: 'contact', element: this.contactSection },
    ];

    sections.forEach(section => {
      const sectionTop = section.element.nativeElement.offsetTop;
      const sectionHeight = section.element.nativeElement.offsetHeight;

      if (scrollTop >= sectionTop - 100 && scrollTop < sectionTop + sectionHeight) {
        console.log(section.name)
        this.activeMenu = section.name;
      }
    });
  }
}
