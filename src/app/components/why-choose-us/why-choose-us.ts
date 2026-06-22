import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-why-choose-us',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './why-choose-us.html',
  styleUrl: './why-choose-us.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WhyChooseUs {
  readonly config = SITE_CONFIG;
  reasons = SITE_CONFIG.reasons;
}
