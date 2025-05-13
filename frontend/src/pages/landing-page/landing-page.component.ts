import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-landing-page',
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  @ViewChild('scrollContainer', { static: false }) private scrollContainer: any ;

  constructor() { }

  scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const button = document.getElementById('uploadButton');

    if (button) {
      // Add the highlight class
      button.classList.add('highlight');

      // Remove the highlight after 1.5 seconds (optional)
      setTimeout(() => {
        button.classList.remove('highlight');
      }, 1500);
    }
    
  }
}
