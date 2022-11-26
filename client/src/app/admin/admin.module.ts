import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, NgModel } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { OrderTableComponent } from './order-table/order-table.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { BookEditorComponent } from './book-editor/book-editor.component';
import { BookTableComponent } from './book-table/book-table.component';

const routing = RouterModule.forChild([
    {path: 'auth', component: AuthComponent },
    {path: 'main', component: AdminComponent, canActivate: [AuthGuard],
    // children: [
    //     { path: '**', redirectTo: '/bookList' }]
    },
    {path: '**', redirectTo: '/bookList' },
]);

@NgModule({
imports: [CommonModule, FormsModule, routing],
providers: [AuthGuard],
declarations: [AuthComponent, AdminComponent, OrderTableComponent, OrderEditorComponent, BookEditorComponent, BookTableComponent]
})
export class AdminModule{}