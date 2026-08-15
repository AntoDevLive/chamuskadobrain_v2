import { Component, computed, inject, signal } from '@angular/core';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-obra-image-dialog',
  imports: [MatIconModule, MatButtonModule, MatDialogModule],
  standalone: true,
  templateUrl: './obra-image-dialog.html',
  styles: [`
    @keyframes image-enter-right {
      from {
        opacity: 0;
        transform: translateX(80px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes image-enter-left {
      from {
        opacity: 0;
        transform: translateX(-80px);
      }
      to {
        opacity: 1;
        transform: translateX(0);
      }
    }

    @keyframes image-exit-left {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(-80px);
      }
    }

    @keyframes image-exit-right {
      from {
        opacity: 1;
        transform: translateX(0);
      }
      to {
        opacity: 0;
        transform: translateX(80px);
      }
    }

    .image-enter-right {
      animation: image-enter-right 350ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .image-enter-left {
      animation: image-enter-left 350ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .image-exit-left {
      animation: image-exit-left 350ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }

    .image-exit-right {
      animation: image-exit-right 350ms cubic-bezier(0.22, 1, 0.36, 1) both;
    }
  `],
})
export class ObraImageDialog {

  readonly data = inject(MAT_DIALOG_DATA);

  readonly showingBack = signal(false);

  readonly previousImage = signal<string | null>(null);

  readonly direction = signal<'left' | 'right'>('right');

  readonly currentImage = computed(() =>
    this.showingBack()
      ? this.data.images.back
      : this.data.images.front
  );

  private animateTo(showBack: boolean): void {
    const current = this.currentImage();

    this.previousImage.set(current);
    this.showingBack.set(showBack);

    setTimeout(() => {
      this.previousImage.set(null);
    }, 350);
  }

  showFront(): void {
    if (!this.showingBack()) return;

    this.direction.set('left');
    this.animateTo(false);
  }

  showBack(): void {
    if (this.showingBack()) return;

    this.direction.set('right');
    this.animateTo(true);
  }
}