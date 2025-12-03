import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { Router } from '@angular/router';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NgIf, NgFor],
  templateUrl: './home-page.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePage {

  offset = signal(0);

  // Solo la declaras, NO la asignas aquí
  pokemons: any;

  constructor(
    private pokemonService: PokemonService,
    private router: Router
  ) {
    // AHORA SÍ la asignas, cuando pokemonService ya existe
    this.pokemons = this.pokemonService.getPokemons(this.offset);
  }

  nextPage() {
    this.offset.update(v => v + 20);
  }

  prevPage() {
    if (this.offset() >= 20) {
      this.offset.update(v => v - 20);
    }
  }

  openDetail(pokemon: any) {
    const id = pokemon.url.split('/').at(-2);
    this.router.navigate(['/pokemon', id]);
  }
}
