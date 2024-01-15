import { Component, ViewChild, ElementRef  } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  @ViewChild('featuresSection') featuresSection!: ElementRef;

  scrollToFeatures(): void {
    this.featuresSection.nativeElement.scrollIntoView({ behavior: 'smooth' });
  }

}
