import { ProdApiComponent } from './components/api-products/prod-api/prod-api.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ApiProductsComponent } from './components/api-products/api-products.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ParentCartComponent } from './components/Orders/parent-cart/parent-cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ProductsComponent } from './components/products/products.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact us', component: ContactComponent },
  { path: 'about us', component: AboutComponent },
  { path: 'products', component: ParentCartComponent },
  { path: 'products/:pID', component: ProductsComponent },
  { path: 'productsapi', component: ApiProductsComponent },
  { path: 'productsapi/:pID', component: ProdApiComponent },

  {
    path: 'user',
    loadChildren: () =>
      import('./components/user/user.module').then((m) => m.UserModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
