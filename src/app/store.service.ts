import { Injectable } from "@angular/core";
import { Item } from "./models/item";
import { NetworkService } from "./network.service";
import { CartItem } from "./models/cart-item";

@Injectable({ providedIn: "root" })
export class StoreService {
    public items: Array<Item> = []
    public cart: Array<CartItem> = []

    constructor(private network: NetworkService) {
        network.baseURL = "https://boolean-api-server.fly.dev/"

        this.network.GET<Array<Item>>("groceries", (res) => {
          this.items = res
          console.log(this.items)
        })
    }

    public getItemPrice(id: string) : number | undefined {
        return this.items.find((elm) => { return elm.id === id })?.price
    }

    public getItemName(id: string) : string | undefined {
        return this.items.find((elm) => { return elm.id === id })?.name
    }

    public hasItemInCart(id: string) : boolean {
        return this.cart.findIndex((elm) => { return elm.id === id }) >= 0
    }

    public calulatePrice() : number {
        var _outPrice: number = 0.0

        for (const _cartItem of this.cart) {
            const _item = this.getItemPrice(_cartItem.id)
            if (_item === undefined) continue
            _outPrice += _cartItem.amount * _item
        }

        return _outPrice
    }
}