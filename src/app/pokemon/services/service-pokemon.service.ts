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

  public pokemon$ = this.pokemonSubject.asObservable();

  updateStatusPokemon(updatePokemon: IResult) {
    this.pokemonSubject.next(updatePokemon);
  }

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<IResult[]> {
    return this.http.get<IResList>(`${this.baseUrl}/pokemon`).pipe(map(res => res.results));
  }

  getDetail(name: string): Observable<IResDetail> {
    return this.http.get<IResDetail>(`${this.baseUrl}/pokemon/${name}`);
  }
}
