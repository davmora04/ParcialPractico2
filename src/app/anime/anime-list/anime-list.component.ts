import { Component, OnInit } from '@angular/core';
import { Anime } from '../anime';
import { AnimeService } from '../anime.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {
  selectedBAnime!: Anime;
  selected = false;
  animes: Array<Anime> = [];

  totalEpisodes: number = 0;
  averageRating: number = 0;

  constructor(private animeService: AnimeService, private router: Router) { }

  ngOnInit(): void {
    this.getAnimes();
  }

  getAnimes(): void {
    this.animeService.getAnimes().subscribe((animes) => {
      this.animes = animes;
      this.calculateTotals(); // Calcula el total de episodios y el promedio de rating
    });
  }

  calculateTotals(): void {
    if (this.animes.length > 0) {
      
      this.totalEpisodes = this.animes.reduce((total, anime) => total + anime.episode, 0);
      this.averageRating = this.animes.reduce((total, anime) => total + Number(anime.Rating), 0) / this.animes.length;
    } else {
      this.totalEpisodes = 0;
      this.averageRating = 0;
    }
  }

  onSelected(anime: Anime): void {
    this.selected = true;
    this.selectedBAnime = anime;
  }
}
