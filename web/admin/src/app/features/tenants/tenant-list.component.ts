import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AdminService } from '../../core/services/admin.service';
import { Observable } from 'rxjs';
import { Tenant } from '../../core/models/admin.types';

@Component({
  selector: 'app-tenant-list',
  standalone: true,
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule
  ],
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css']
})
export class TenantListComponent {
  tenants$: Observable<Tenant[]>;
  displayedColumns: string[] = ['id', 'name', 'domain', 'status', 'plan', 'actions'];

  constructor(private adminService: AdminService) {
    this.tenants$ = this.adminService.getTenants();
  }

  addTenant() {
    this.adminService.createTenant({
      name: 'New Company',
      domain: 'new.com',
      plan: 'pro'
    });
  }
}
