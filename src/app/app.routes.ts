import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { UsComponent } from './pages/us/us.component';
import { ServicesComponent } from './pages/services/services.component';
import { FleetComponent } from './pages/fleet/fleet.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
    { path: '', redirectTo:'inicio', pathMatch: 'full'},
    { path: 'inicio', component: HomeComponent },
    { path: 'nosotros', component: UsComponent },
    { path: 'servicios', component: ServicesComponent },
    { path: 'flota', component: FleetComponent }, 
    { path: 'contacto', component: ContactComponent }
];
