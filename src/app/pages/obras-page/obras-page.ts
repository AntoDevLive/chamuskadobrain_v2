import { ChangeDetectionStrategy, Component, inject, ElementRef, QueryList, ViewChildren } from '@angular/core';
import { SlicePipe } from '@angular/common';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { IObra } from '../../interfaces/obra';
import { ObraImageDialog } from '../../components/ui/obra-image-dialog/obra-image-dialog';
import { obrasJson } from '../../json/obras';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { register } from 'swiper/element/bundle';

register();
@Component({
  selector: 'app-obras-page',
  imports: [MatDialogModule, SlicePipe],
  templateUrl: './obras-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ObrasPage {
  @ViewChildren('reviewsSwiper')
  private swipers!: QueryList<ElementRef>;

  private readonly dialog = inject(MatDialog);

  expandedId: number | null = null;

  toggleObra(id: number): void {
    this.expandedId = this.expandedId === id ? null : id;
  }

  isExpanded(id: number): boolean {
    return this.expandedId === id;
  }

  openImages(obra: IObra): void {
    this.dialog.open(ObraImageDialog, {
      data: obra,
      maxWidth: '90vw',
      maxHeight: '90vh'
    });
  }

  private expandedObraId: number | null = null;

  obras: IObra[] = obrasJson;

  previousReview(swiper: HTMLElement): void {

    (swiper as any).swiper.slidePrev();

  }

  expandedReviews = new Set<string>();

  toggleReview(reviewId: string): void {

    if (this.expandedReviews.has(reviewId)) {
      this.expandedReviews.delete(reviewId);
    } else {
      this.expandedReviews.add(reviewId);
    }

  }

  isReviewExpanded(reviewId: string): boolean {
    return this.expandedReviews.has(reviewId);
  }

  shouldShowReadMore(text: string): boolean {
    return text.length > 250;
  }

  nextReview(swiper: HTMLElement): void {

    (swiper as any).swiper.slideNext();

  }

  showReviewButtons(obra: IObra): boolean {

    const width = window.innerWidth;

    if (width >= 1080) {
      return obra.valoraciones.length > 3;
    }

    if (width >= 768) {
      return obra.valoraciones.length > 2;
    }

    return obra.valoraciones.length > 1;

  }
}