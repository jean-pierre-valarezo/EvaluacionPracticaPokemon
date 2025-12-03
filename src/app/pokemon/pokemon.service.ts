import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { rxResource } from '@angular/core/rxjs-interop';
import { environment } from '../environments/environment';
import { PokemonListResponse, PokemonDetailResponse } from '../interfaces/PokemonResponse';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) {}

  getPokemons(offset: () => number) {
    return rxResource<PokemonListResponse, number>({
      params: () => offset(),

      stream: ({ params }) =>
        this.http.get<PokemonListResponse>(
          `${environment.apiUrl}?offset=${params}&limit=20`
        ),
    });
  }

  getPokemonDetail(id: number) {
    return this.http.get<PokemonDetailResponse>(
      `${environment.apiUrl}/${id}`
    );
  }
}
