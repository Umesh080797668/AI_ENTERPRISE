import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-coming-soon',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  template: `
    <div class="flex flex-col items-center justify-center h-[calc(100vh-8rem)] text-center p-6">
      <div class="w-24 h-24 bg-indigo-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <mat-icon class="text-4xl text-indigo-500 scale-150">construction</mat-icon>
      </div>
      <h2 class="text-2xl font-bold text-slate-800 mb-2">Feature Coming Soon</h2>
      <p class="text-slate-500 max-w-md mx-auto">
        We are working hard to bring you this new feature. Stay tuned for updates in the next release.
      </p>
      <div class="mt-8 flex gap-3">
        <button class="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors font-medium cursor-not-allowed opacity-50">
          Notify Me
        </button>
        <a href="/dashboard" class="px-6 py-2 border border-slate-200 text-slate-600 rounded-lg hover:bg-slate-50 transition-colors font-medium">
          Go Dashboard
        </a>
      </div>
    </div>
  `,
  styles: []
})
export class ComingSoonComponent {}
