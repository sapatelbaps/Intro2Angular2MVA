import { Component, OnInit } from '@angular/core';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.less']
})
export class TasksComponent implements OnInit {
  public pokemonData: any;

  constructor(private svc: PokemonService) {}

  toggle: boolean = true;

  ngOnInit() {
    this.svc.getPokemons().subscribe(data => {
      this.pokemonData = data;
    });
  }

}
