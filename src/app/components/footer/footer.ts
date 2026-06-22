import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-footer',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  readonly config = SITE_CONFIG;
  currentYear = new Date().getFullYear();
}
