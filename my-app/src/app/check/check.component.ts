// check.component.ts
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { CartService } from '../cart.service'; // Update path as necessary
import { OrderService } from '../order.service'; // Update path as necessary
import { Product } from '../Products';
 // Update path as necessary

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent implements OnInit, OnDestroy {
  private unsubscribe$ = new Subject<void>();
  cartItems: Product[] = [];
  subtotal: number = 0;
  totalCount: number = 0;
  orderPlaced: boolean = false;
  loading: boolean = false;
  errorMessage: string = '';

  // Form setup
  orderForm = new FormGroup({
    name: new FormControl('', Validators.required),
    address: new FormControl('', Validators.required),
    phone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{10}')])
  });

  constructor(private cartService: CartService, private orderService: OrderService) {}

  ngOnInit() {
    this.cartService.cartItems$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(items => {
        this.cartItems = items;
        this.updateTotalCountAndSubtotal();
      });

    this.updateTotalCountAndSubtotal();
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  updateTotalCountAndSubtotal() {
    this.totalCount = this.cartItems.reduce((count, item) => count + item.quantity, 0);
    this.subtotal = this.cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  calculateShipping() {
    // Implement your shipping calculation logic here
    return 55000; // Placeholder value
  }

  placeOrder() {
    if (this.orderForm.valid && this.cartItems.length > 0) {
      this.loading = true;
      const orderData = {
        name: this.orderForm.value.name,
        address: this.orderForm.value.address,
        phone: this.orderForm.value.phone,
        items: this.cartItems,
        subtotal: this.subtotal,
        total: this.subtotal + this.calculateShipping()
      };

      this.orderService.placeOrder(orderData).subscribe({
        next: (response) => {
          this.cartService.clearCart();
          this.orderPlaced = true;
          this.loading = false;
          // Redirect to confirmation page or display success message
        },
        error: (error) => {
          this.errorMessage = 'Failed to place the order. Please try again.';
          this.loading = false;
          // Log the error or display it to the user
        }
      });
    } else {
      this.errorMessage = 'Please fill out all required fields.';
    }
  }
}
