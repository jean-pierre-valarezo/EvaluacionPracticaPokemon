import { CommonModule } from '@angular/common';
import { Component, inject, resource } from '@angular/core';
import { RouterModule, ActivatedRoute, Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { PokemonService } from '../../pokemon.service';

@Component({
  selector: 'app-pokemon-detail-page',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './pokemon-detail-page.html',
})
export class PokemonDetailPageComponent {

  private pokemonService = inject(PokemonService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  pokemonResource = resource({
    params: () => ({
      id: Number(this.route.snapshot.paramMap.get('id'))
    }),

    loader: async ({ params }) => {
      return await firstValueFrom(
        this.pokemonService.getPokemonDetail(params.id)
      );
    }
  });

  goBack() {
    this.router.navigate(['/home']);
  }

  hasHiddenAbility(abilities: any[] = []): boolean {
    return abilities.some(a => a.is_hidden);
  }
}
