import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { HomeComponent } from './components/pages/home/home.component';
import { ListComponent } from './components/pages/list/list.component';
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
import { DetailComponent } from './components/modals/detail/detail.component';
import { MatDialogModule } from '@angular/material/dialog';
import { ImgCardComponent } from './components/molecules/img-card/img-card.component';
import { CardButtonComponent } from './components/organisms/card-button/card-button.component';
import { CardBodyComponent } from './components/organisms/card-body/card-body.component';

@NgModule({
  declarations: [
    HomeComponent,
    ListComponent,
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
    CapitalizePipe,
    DetailComponent,
    ImgCardComponent,
    CardButtonComponent,
    CardBodyComponent,
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    ReactiveFormsModule,
    MatDialogModule,
  ],
})
export class PokemonModule {}
