import { Component, inject } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  storeService: StoreService = inject(StoreService)

  adjustQuantity(index: number, quantity: number) {
    if (index < 0) return
    this.storeService.cart[index].amount += quantity

    if (this.storeService.cart[index].amount <= 0)
      this.storeService.cart.splice(index, 1)
  }
}
