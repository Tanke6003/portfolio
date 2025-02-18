import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BlogComponent } from './blog/blog.component';

export const routes: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', 
        component: HomeComponent
    },
    {path: 'blog',
        component: BlogComponent
    }
];
