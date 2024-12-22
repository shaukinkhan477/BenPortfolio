import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
    {
      id: 1,
      name: 'ConvertoDocs',
      description: 'A web-based software that easily converts documents between various formats (PDF, Word, Excel) with one click. Ideal for teams handling large volumes of document conversions daily.',
      imageUrl: '/assets/images/productsImages/product1.jpg',
      price: 99.00,
      demoUrl: 'https://demo.converto-docs.com',
      purchaseUrl: 'https://yourwebsite.com/buy/convertoDocs'
    },
    {
      id: 2,
      name: 'Trackio Analytics',
      description: 'A powerful web application providing in-depth analytics for your website or SaaS product. Generate real-time reports, track user behavior, and uncover insights to drive growth.',
      imageUrl: '/assets/images/productsImages/product2.jpg',
      price: 199.00,
      demoUrl: 'https://demo.trackio-analytics.com',
      purchaseUrl: 'https://yourwebsite.com/buy/trackioAnalytics'
    },
    {
      id: 3,
      name: 'MobiiChat',
      description: 'A secure mobile messaging app designed for businesses and professionals. End-to-end encryption, file sharing, and voice messages make team communication faster and safer.',
      imageUrl: '/assets/images/productsImages/product3.jpg',
      price: 49.99,
      demoUrl: 'https://demo.mobiichat.com',
      purchaseUrl: 'https://yourwebsite.com/buy/mobiiChat'
    },
    {
      id: 4,
      name: 'StoreFrontX',
      description: 'An e-commerce template to jumpstart your online store. Packed with customizable themes, integrated payment solutions, and a mobile-responsive design, it helps you start selling online quickly.',
      imageUrl: '/assets/images/productsImages/product4.jpg',
      price: 149.00,
      demoUrl: 'https://demo.storefrontx.com',
      purchaseUrl: 'https://yourwebsite.com/buy/storeFrontX'
    }
  ];

  constructor() {}

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
