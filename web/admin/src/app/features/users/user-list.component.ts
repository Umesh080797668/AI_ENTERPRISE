import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatDividerModule } from '@angular/material/divider';
import { AdminService } from '../../core/services/admin.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [CommonModule, MatTableModule, MatButtonModule, MatIconModule, MatMenuModule, MatDividerModule],
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  // Mock users for now, should come from service
  users$ = of([
    { id: '1', email: 'admin@platform.com', role: 'super_admin', status: 'active', lastLogin: new Date() },
    { id: '2', email: 'manager@client.com', role: 'org_admin', status: 'active', lastLogin: new Date(Date.now() - 86400000) },
    { id: '3', email: 'user@client.com', role: 'user', status: 'inactive', lastLogin: undefined }
  ]);

  constructor(private adminService: AdminService) {}
}
