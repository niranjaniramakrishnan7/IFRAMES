import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'recommended-items',
  templateUrl: './recommended-items.component.html',
  styleUrls: ['./recommended-items.component.css'],
})
export class RecomendedItemsComponent implements OnInit {
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
  constructor() {}

  ngOnInit() {}
}
