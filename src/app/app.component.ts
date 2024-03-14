import { Component, inject } from '@angular/core';
import { StoreService } from './store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-green-grocers';

  storeService: StoreService = inject(StoreService)
}
