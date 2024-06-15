import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';
import { FooterComponent } from './components/organisms/footer/footer.component';
import { BtnHomeComponent } from './components/atoms/btn-home/btn-home.component';
import { InputSearchComponent } from './components/atoms/input-search/input-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './components/organisms/loading/loading.component';
import { BtnFilterComponent } from './components/atoms/btn-filter/btn-filter.component';
import { BtnSharedComponent } from './components/atoms/btn-shared/btn-shared.component';
import { BtnRadioComponent } from './components/atoms/btn-radio/btn-radio.component';
import { ImgHomeComponent } from './components/molecules/img-home/img-home.component';
import { TextHomeComponent } from './components/organisms/text-home/text-home.component';
import { ItemListComponent } from './components/organisms/item-list/item-list.component';
import { CardErrorComponent } from './components/organisms/card-error/card-error.component';
import { BtnReturnComponent } from './components/atoms/btn-return/btn-return.component';
import { CapitalizePipe } from './pipes/capitalize.pipe';


@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
    FooterComponent,
    BtnHomeComponent,
    InputSearchComponent,
    LoadingComponent,
    BtnFilterComponent,
    BtnSharedComponent,
    BtnRadioComponent,
    ImgHomeComponent,
    TextHomeComponent,
    ItemListComponent,
    CardErrorComponent,
    BtnReturnComponent,
    CapitalizePipe
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule
  ]
})
export class PokemonModule { }
