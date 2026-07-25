import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { IObra } from '../../interfaces/obra';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDialog } from '@angular/material/dialog';
import { ObraImageDialog } from '../ui/obra-image-dialog/obra-image-dialog';
import { obrasJson } from '../../json/obras';

@Component({
  selector: 'app-obras',
  imports: [MatDialogModule],
  templateUrl: './obras.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Obras {

  private readonly dialog = inject(MatDialog);

  openImages(obra: IObra): void {

    this.dialog.open(ObraImageDialog, {
      data: obra,
      maxWidth: '90vw',
      maxHeight: '90vh'
    });

  }

  obras: IObra[] = obrasJson;
}
