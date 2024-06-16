import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { IResDetail, IResList, IResult } from '../models/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  private baseUrl: string = environment.baseUrl;

  private pokemonSubject = new BehaviorSubject<IResult>({} as IResult);
  private filterAllSubject = new BehaviorSubject<boolean>(true);
  private filterSearchSubject = new BehaviorSubject<string>('');

  public pokemon$ = this.pokemonSubject.asObservable();
  public filterAll$ = this.filterAllSubject.asObservable();
  public filterSearch$ = this.filterSearchSubject.asObservable();

  updateStatusPokemon(updatePokemon: IResult) {
    this.pokemonSubject.next(updatePokemon);
  }

  updateFilterAll(filterAll: boolean) {
    this.filterAllSubject.next(filterAll);
  }

  updateFilterSearch(value: string) {
    this.filterSearchSubject.next(value);
  }

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<IResult[]> {
    return this.http.get<IResList>(`${this.baseUrl}/pokemon`).pipe(map(res => res.results));
  }

  getDetail(name: string): Observable<IResDetail> {
    return this.http.get<IResDetail>(`${this.baseUrl}/pokemon/${name}`);
  }
}
