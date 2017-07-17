import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { IPositionPreviewItem } from '../../../../components/position-card/position-card.component';

@Component({
  selector: 'positions-list-item',
  templateUrl: 'positions-list-item.component.html',
  styleUrls: ['./positions-list-item.component.scss'],
})
export class PositionsListItemComponent implements OnInit {
  positions: IPositionPreviewItem[] = [
    {
      id: 1,
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      id: 2,
      vacancy: 'Senior JS Developer',
      city: 'Vitebsk',
      creationDate: new Date(2017, 1, 2),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      id: 3,
      vacancy: 'Middle DotNet Developer',
      city: 'Vilnus',
      creationDate: new Date(2017, 3, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      id: 4,
      vacancy: 'Junior JS Developer',
      city: 'San-Francisco',
      creationDate: new Date(2017, 0, 15),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
    {
      id: 5,
      vacancy: 'Junior DotNet Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 0, 1),
      imageUrl: './assets/languages-icons/dotnet-logo.png',
    },
    {
      id: 6,
      vacancy: 'Junior JS Developer',
      city: 'Minsk',
      creationDate: new Date(2017, 3, 21),
      imageUrl: './assets/languages-icons/js-logo.png',
    },
  ];

  currentPosition: IPositionPreviewItem;

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params: ParamMap) => {
      this.currentPosition = this.positions.find(item => item.id === +params['id']);
    });
  }
}
