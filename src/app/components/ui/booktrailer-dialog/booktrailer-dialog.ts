import {
  Component,
  inject
} from '@angular/core';

import {
  MAT_DIALOG_DATA,
  MatDialogRef
} from '@angular/material/dialog';

import {
  DomSanitizer,
  SafeResourceUrl
} from '@angular/platform-browser';

interface BooktrailerDialogData {
  url: string;
}

@Component({
  selector: 'app-booktrailer-dialog',
  templateUrl: './booktrailer-dialog.html',
})
export class BooktrailerDialog {

  private readonly dialogRef = inject(MatDialogRef<BooktrailerDialog>);
  private readonly sanitizer = inject(DomSanitizer);

  readonly data = inject<BooktrailerDialogData>(MAT_DIALOG_DATA);

  readonly videoUrl: SafeResourceUrl;

  constructor() {

    const separator = this.data.url.includes('?')
      ? '&'
      : '?';

    const url =
      `${this.data.url}${separator}autoplay=1&mute=1&rel=0`;

    this.videoUrl =
      this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  close(): void {
    this.dialogRef.close();
  }
}