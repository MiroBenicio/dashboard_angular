import { Component, OnInit } from '@angular/core';
import { Influencer } from '../../Influencer';
import { InfluencerService } from '../influencer.service';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.css'],
})
export class InfluencerListComponent implements OnInit {
  influencers: Influencer[] = [];

  constructor(private influencerService: InfluencerService) {
    this.getInfluencers();
  }
  columns = ['id', 'nome', 'inscritos', 'canal', 'plataforma', 'categoria'];
  ngOnInit(): void {}

  getInfluencers(): void {
    this.influencerService.getAll().subscribe((influencers) => {
      this.influencers = influencers;
    });
  }
}
