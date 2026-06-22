import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-testimonials',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Testimonials {
  testimonials = SITE_CONFIG.testimonials;
}
