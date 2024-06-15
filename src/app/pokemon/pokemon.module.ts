import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { BtnHomeComponent } from './components/atoms/btn-home/btn-home.component';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    FooterComponent,
    BtnHomeComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ]
})
export class PokemonModule { }
