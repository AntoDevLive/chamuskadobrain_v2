import { Component, inject, computed, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-obra-image-dialog',
  imports: [MatIconModule, MatButtonModule],
  standalone: true,
  templateUrl: './obra-image-dialog.html',
})
export class ObraImageDialog {

  readonly data = inject(MAT_DIALOG_DATA);

  readonly showingBack = signal(false);

  readonly currentImage = computed(() =>
    this.showingBack() ? this.data.images.back : this.data.images.front
  );

  showFront(): void {
    this.showingBack.set(false);
  }

  showBack(): void {
    this.showingBack.set(true);
  }
}
