import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './about.html',
  styleUrl: './about.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class About {
  readonly config = SITE_CONFIG;
}
