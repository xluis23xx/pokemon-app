import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { PokemonService } from 'src/app/pokemon/services/service-pokemon.service';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})
export class InputSearchComponent implements OnInit {
  public searchForm: FormGroup;

  constructor(private fb: FormBuilder, private pokemonService: PokemonService) {
    this.searchForm = this.fb.group({
      search: ['']
    });
  }

  ngOnInit(): void {
    this.searchForm.get('search')?.valueChanges.pipe(debounceTime(500)).subscribe(value => {
      this.filterPokemon(value);
    })
  }

  filterPokemon(searchValue: string): void {
    this.pokemonService.updateFilterSearch(searchValue);
  }
}
