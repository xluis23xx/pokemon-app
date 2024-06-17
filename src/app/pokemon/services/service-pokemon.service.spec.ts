import { HttpClient } from '@angular/common/http';
import { PokemonService } from './service-pokemon.service';
import { lastValueFrom, of } from 'rxjs';
import { IResult } from '../models/pokemon.interface';

describe('@PokemonService', () => {
  let spyHttp: jasmine.SpyObj<HttpClient>;
  let service: PokemonService;

  beforeEach(() => {
    spyHttp = jasmine.createSpyObj('HttpClient', ['get']);
    service = new PokemonService(spyHttp);
  });

  it('#should return list pokemon', () => {
    spyHttp.get.and.returnValue(of([]));

    const resList = lastValueFrom(service.getPokemons());

    expect(resList).toBeTruthy();
  });

  it('#should return detail pokemon', () => {
    spyHttp.get.and.returnValue(of({}));

    const resDetail = lastValueFrom(service.getDetail('charmander'));

    expect(resDetail).toBeTruthy();
  });

  it('#should update status pokemon', () => {
    //spyHttp.get.and.returnValue(of({}));
    const mockStatusPokemon: IResult = {
      name: 'uuid',
      url: 'uuid',
      like: true,
    };

    service.updateStatusPokemon(mockStatusPokemon);

    service.pokemon$.subscribe((rs) => {
      expect(rs).toBe(mockStatusPokemon);
    });
  });

  it('#should update filter active pokemon', () => {
    const mockActive = true;

    service.updateFilterAll(mockActive);

    service.filterAll$.subscribe((rs) => {
      expect(rs).toBe(mockActive);
    });
  });

  it('#should update fitler search pokemon', () => {
    const mockSearch = 'charmander';

    service.updateFilterSearch(mockSearch);

    service.filterSearch$.subscribe((rs) => {
      expect(rs).toBe(mockSearch);
    });
  });
});
