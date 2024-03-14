import { Component, Input, inject } from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent {
  storeService: StoreService = inject(StoreService)

  addItemToBasket(id: string) {
    if (this.storeService.hasItemInCart(id)) return

    this.storeService.cart.push({
      id: id,
      amount: 1
    })
  }
}
