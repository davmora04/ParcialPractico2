import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AnimeService } from '../anime.service';
import { Anime } from '../anime';

@Component({
  selector: 'app-anime-detail',
  templateUrl: './anime-detail.component.html',
  styleUrls: ['./anime-detail.component.css']
})
export class AnimeDetailComponent implements OnInit {
  animeDetail!: Anime;

  constructor(
    private route: ActivatedRoute,
    private animeService: AnimeService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.animeService.getAnime(id).subscribe({
        next: (anime) => {
          this.animeDetail = anime;
        },
        error: (err) => {
          console.error('Error fetching anime:', err);
        }
      });
    }
  }

  goBack(): void {
    window.history.back();
  }
}
