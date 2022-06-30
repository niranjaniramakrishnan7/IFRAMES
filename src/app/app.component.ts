import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  recommededItems = [
    {
      Description: 'BELLE CAMISOLE',
      Price: '59.99',
      ImageUrl:
        'https://res.cloudinary.com/com-manh-cp/image/upload/19691_resortwhitesearuffles.jpg',
    },
    {
      Description: 'TYRA TUBE TOP',
      Price: '65.79',
      ImageUrl:
        'https://res.cloudinary.com/com-manh-cp/image/upload/20032_flamingopinkdontgiveacluck_a1.jpg',
    },
  ];
}
