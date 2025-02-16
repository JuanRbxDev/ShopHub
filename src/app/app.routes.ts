import { Routes } from '@angular/router';
import { DetailsPComponent } from './components/details-p/details-p.component';
import { WeComponent } from './components/we/we.component';
import { ContactComponent } from './components/contact/contact.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { WomanComponent } from './components/woman/woman.component';
import { ManComponent } from './components/man/man.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { CartComponent } from './components/cart/cart.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { AcountComponent } from './components/acount/acount.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'inicio', component: HomeComponent },
    { path: 'hombre', component: ManComponent },
    { path: 'mujer', component: WomanComponent },
    { path: 'accesorios', component: AccesoriesComponent },
    { path: 'contacto', component: ContactComponent },
    { path: 'nosotros', component: WeComponent },
    { path: 'detalles/:id', component: DetailsPComponent },
    { path: 'carrito', component: CartComponent },
    { path: 'favoritos', component: FavoritesComponent },
    { path: 'cuenta', component: AcountComponent },
    { path: '**', component: NotFoundComponent },
];
