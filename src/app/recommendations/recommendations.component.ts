import {
  Component,
  OnInit,
  Input
} from '@angular/core';

import { Recommendations } from './recommendations.model';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.scss']
})
export class RecommendationsComponent implements OnInit {
  @Input() recommendation: Recommendations;

  constructor() {
    this.recommendation = new Recommendations('Brand new iPhone model!', 'Newly released iPhone 14 is now available in our stores!', '2000')
  }

  ngOnInit(): void {
  }
}
