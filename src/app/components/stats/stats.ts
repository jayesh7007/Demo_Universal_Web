import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-stats',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './stats.html',
  styleUrl: './stats.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Stats {
  stats = SITE_CONFIG.stats;
}
