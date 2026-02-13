import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { AdminService } from '../../core/services/admin.service';
import { Observable } from 'rxjs';
import { SystemStats, LogEntry, IntegrationStatus } from '../../core/models/admin.types';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    MatListModule,
    MatTableModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  stats$: Observable<SystemStats>;
  recentLogs$: Observable<LogEntry[]>;
  integrationStatus$: Observable<IntegrationStatus[]>;

  constructor(private adminService: AdminService) {
    this.stats$ = this.adminService.getStats();
    this.recentLogs$ = this.adminService.getRecentLogs();
    this.integrationStatus$ = this.adminService.getIntegrationsStatus();
  }

  ngOnInit(): void {}

  getLogIcon(level: string): string {
    switch (level) {
      case 'info': return 'info';
      case 'warn': return 'warning';
      case 'error': return 'error';
      default: return 'info';
    }
  }

  getLogColor(level: string): string {
    switch (level) {
      case 'info': return 'primary';
      case 'warn': return 'accent';
      case 'error': return 'warn';
      default: return 'primary';
    }
  }
}
