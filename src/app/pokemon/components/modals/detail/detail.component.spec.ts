import { MatDialogRef } from '@angular/material/dialog';
import { of, throwError } from 'rxjs';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { POKEMON_DETAIL } from 'src/app/pokemon/elements/constants-mock';
import { POKEMON_MOCK } from '../../../elements/constants-mock';
import { DetailComponent } from './detail.component';

describe('@DetailComponent', () => {
  let component: DetailComponent;
  let spyService: jasmine.SpyObj<PokemonService>;
  let spyMatDialog: jasmine.SpyObj<MatDialogRef<DetailComponent>>;
  const mockDetailPokemon = POKEMON_DETAIL;
  const mockPokemon = POKEMON_MOCK;

  beforeEach(() => {
    spyService = jasmine.createSpyObj('PokemonService', ['getDetail']);
    spyMatDialog = jasmine.createSpyObj('MatDialogRef', ['close']);
    spyService.getDetail.and.returnValue(of(mockDetailPokemon));
    component = new DetailComponent(spyService, spyMatDialog, mockPokemon);
  });

  it('#should create', () => {
    expect(component).toBeTruthy();
  });

  it('should component onInit', () => {
    component.isLoading = true;

    component.ngOnInit();

    expect(component.isLoading).toBeFalse();
  });

  it('#should show error detail pokemons', () => {
    spyService.getDetail.and.returnValue(
      throwError({ status: 400, message: 'Error en la solicitud' })
    );

    component.ngOnInit();

    expect(component.isError).toBeTrue();
  });

  it('#should close modal', () => {

    component.closeModalDialog();

    expect(spyMatDialog.close).toHaveBeenCalled();
  });

  describe('When component destroy', () => {
    it('#should unsubscribe', () => {
      spyOn(component['subscription'], 'unsubscribe');

      component.ngOnDestroy();

      expect(component['subscription'].unsubscribe).toHaveBeenCalled();
    });
  });
});
