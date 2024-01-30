import { Component, Input } from '@angular/core';
import { IProduct } from '../../../interfaces/product.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list-section',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list-section.component.html',
  styleUrl: './product-list-section.component.scss'
})
export class ProductListSectionComponent {
  @Input() title!: string;
  @Input() productList!: IProduct[];
}
