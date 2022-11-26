import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { BookStoreComponent } from "../book-store/book-store.component";

@Injectable()
export class StoreFirstGuard
{
    private firstNavigation = true;

    constructor(private router: Router)
    {}
    canActivate(router: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean
    {
        if(this.firstNavigation)
        {
            this.firstNavigation = false;
            if(router.component !== BookStoreComponent)
            {
                this.router.navigateByUrl('/bookList');
                return false;
            }
        }
        return true;
    }
}