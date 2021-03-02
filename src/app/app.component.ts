import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Quick Checkout', url: '/folder/Inbox', icon: 'wallet' },
    { title: 'Products & Services', url: '#', icon: 'tv' },
    { title: 'Transactions', url: '#', icon: 'today' },
    { title: 'Customers', url: '#', icon: 'people' },
    { title: 'Logout', url: '#', icon: 'log-out' },
  ];
  constructor() { }
}
