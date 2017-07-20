import { Routes } from '@angular/router';

import { HttpGuard } from './guards/http.guard';

import { AnimeListComponent } from './pages/anime-list/anime-list.component';

export const routes: Routes = [
    {
        path: '',
        loadChildren: './modules/anime-list/anime-list.module#AnimeListModule'
    },
    {
        path: 'anime/:id',
        canActivate: [HttpGuard],
        loadChildren: './modules/anime/anime.module#AnimeModule'
    }
]