import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  standalone: true,
  imports: [
    CommonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule
  ],
  selector: 'app-root',
  template: `
    <mat-toolbar color="primary" class="toolbar">
      <button mat-icon-button (click)="drawer.toggle()">
        <mat-icon>menu</mat-icon>
      </button>
      <span>AI Platform Admin</span>
      <span class="spacer"></span>
      <button mat-icon-button>
        <mat-icon>account_circle</mat-icon>
      </button>
    </mat-toolbar>

    <mat-drawer-container class="container" autosize>
      <mat-drawer #drawer mode="side" opened="true" class="sidenav">
        <mat-nav-list>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>dashboard</mat-icon>
            <span matListItemTitle>Overview</span>
          </a>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>business</mat-icon>
            <span matListItemTitle>Tenants</span>
          </a>
          <a mat-list-item href="#">
            <mat-icon matListItemIcon>people</mat-icon>
            <span matListItemTitle>Users</span>
          </a>
           <a mat-list-item href="#">
            <mat-icon matListItemIcon>settings</mat-icon>
            <span matListItemTitle>Settings</span>
          </a>
        </mat-nav-list>
      </mat-drawer>

      <div class="content">
        <h1>Dashboard Overview</h1>
        
        <mat-grid-list cols="3" rowHeight="150px" gutterSize="16px">
          <mat-grid-tile>
            <mat-card class="dashboard-card">
              <mat-card-header>
                <mat-card-title>12</mat-card-title>
                <mat-card-subtitle>Active Tenants</mat-card-subtitle>
              </mat-card-header>
              <mat-card-content>
                <mat-icon color="primary">business</mat-icon>
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card class="dashboard-card">
               <mat-card-header>
                <mat-card-title>1,240</mat-card-title>
                <mat-card-subtitle>Total Users</mat-card-subtitle>
              </mat-card-header>
               <mat-card-content>
                <mat-icon color="accent">people</mat-icon>
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
          <mat-grid-tile>
            <mat-card class="dashboard-card">
               <mat-card-header>
                <mat-card-title>99.9%</mat-card-title>
                <mat-card-subtitle>System Uptime</mat-card-subtitle>
              </mat-card-header>
               <mat-card-content>
                <mat-icon color="warn">check_circle</mat-icon>
              </mat-card-content>
            </mat-card>
          </mat-grid-tile>
        </mat-grid-list>

        <h2>Recent Tenants</h2>
        <mat-nav-list>
           <mat-list-item>
              <mat-icon matListItemIcon>business</mat-icon>
              <h3 matListItemTitle>Acme Corp</h3>
              <p matListItemLine>Plan: Enterprise • Users: 450</p>
           </mat-list-item>
           <mat-list-item>
              <mat-icon matListItemIcon>business</mat-icon>
              <h3 matListItemTitle>TechStart Inc</h3>
              <p matListItemLine>Plan: Starter • Users: 12</p>
           </mat-list-item>
            <mat-list-item>
              <mat-icon matListItemIcon>business</mat-icon>
              <h3 matListItemTitle>Global Logistics</h3>
              <p matListItemLine>Plan: Enterprise • Users: 1,200</p>
           </mat-list-item>
        </mat-nav-list>

      </div>
    </mat-drawer-container>
  `,
  styles: [`
    .toolbar {
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .container {
      height: calc(100vh - 64px); 
    }
    .sidenav {
      width: 250px;
      border-right: 1px solid #eee;
    }
    .content {
      padding: 24px;
      background-color: #f5f5f5;
      height: 100%;
    }
    .spacer {
      flex: 1 1 auto;
    }
    .dashboard-card {
      width: 100%;
      height: 100%;
      box-sizing: border-box;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 16px;
    }
    mat-card-title {
      font-size: 2rem;
      font-weight: bold;
    }
  `]
})
export class AppComponent {
  title = 'admin-portal';
}

