import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-product-list-section',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './product-list-section.component.html',
  styleUrl: './product-list-section.component.scss'
})
export class ProductListSectionComponent {
  @Input() title!: string;
  @Input() productList!: IProduct[];

  redirectURL(productId: number){
    return `/product/${productId}`
  }
}
