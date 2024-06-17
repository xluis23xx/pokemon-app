import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';
import { ListComponent } from './list.component';
import { of, throwError } from 'rxjs';
import {
  LIST_MOCK,
  POKEMON_MOCK,
} from 'src/app/pokemon/elements/constants-mock';

describe('@ListComponent', () => {
  let component: ListComponent;
  let spyService: jasmine.SpyObj<PokemonService>;
  const mockPokemonList = LIST_MOCK;
  const mockPokemon = POKEMON_MOCK;
  // const errorApiResponse = new HttpErrorResponse({status: 400});
  // const mockObservable = new Observable(
  //   (obs: Subscriber<HttpErrorResponse>) => obs.error(errorApiResponse)
  // );

  beforeEach(() => {
    spyService = jasmine.createSpyObj('PokemonService', ['getPokemons'], {
      pokemon$: of(mockPokemon),
    });
    spyService.getPokemons.and.returnValue(of(mockPokemonList));
    component = new ListComponent(spyService);
  });

  it('#should create', () => {
    expect(component).toBeTruthy();
  });

  it('#should component onInit', () => {
    const minLength = 0;

    component.ngOnInit();

    expect(component.listPokemon.length).toBeGreaterThan(minLength);
  });

  it('#should show error list pokemons', () => {
    spyService.getPokemons.and.returnValue(
      throwError({ status: 400, message: 'Error en la solicitud' })
    );

    component.ngOnInit();

    expect(component.isError).toBeTrue();
  });

  describe('When component destroy', () => {
    it('#should unsubscribe', () => {
      spyOn(component['subscription'], 'unsubscribe');

      component.ngOnDestroy();

      expect(component['subscription'].unsubscribe).toHaveBeenCalled();
    });
  });
});
