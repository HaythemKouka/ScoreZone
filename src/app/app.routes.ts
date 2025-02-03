import { Routes } from '@angular/router';
import { HomeComponent } from '../pages/home/home.component';
import { ContactComponent } from '../pages/contact/contact.component';
import { MatchesComponent } from '../pages/matches/matches.component';
import { PlayersComponent } from '../pages/players/players.component';

export const routes:   Routes = [
    { path: '', component: HomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'matches', component: MatchesComponent },
    { path: 'players', component: PlayersComponent }
  ];
  
