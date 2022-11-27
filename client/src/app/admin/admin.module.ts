import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { OrderTableComponent } from './order-table/order-table.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookTableComponent } from './book-table/book-table.component';
import { RegisterComponent } from './register/register.component';

const routing = RouterModule.forChild([
  { path: 'auth', component: AuthComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'orders',
        component: OrderTableComponent,
        data: { title: 'Order Table' },
      },
      { path: '**', redirectTo: '/bookList' },
    ],
  },
  { path: '**', redirectTo: '/bookList' },
]);

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, routing],
  providers: [AuthGuard],
  declarations: [
    AuthComponent,
    AdminComponent,
    OrderTableComponent,
    BookEditorComponent,
    BookTableComponent,
    RegisterComponent
  ],
})
export class AdminModule {}
