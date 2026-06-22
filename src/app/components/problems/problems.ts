import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SITE_CONFIG } from '../../site.config';

@Component({
  selector: 'app-problems',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './problems.html',
  styleUrl: './problems.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Problems {
  problems = SITE_CONFIG.problems;
}
