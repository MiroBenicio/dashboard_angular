import { Component, OnInit, ViewChild } from '@angular/core';
import { Influencer } from '../../Influencer';
import { InfluencerService } from '../influencer.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-influencer-list',
  templateUrl: './influencer-list.component.html',
  styleUrls: ['./influencer-list.component.css'],
})
export class InfluencerListComponent implements OnInit {
  //influencers: Influencer[] = [];

  displayedColumns: string[] = [
    'id',
    'nome',
    'numero_inscritos',
    'canal',
    'plataforma',
    'categoria',
    'actions',
  ];

  dataSource!: MatTableDataSource<Influencer>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private influencerService: InfluencerService) {
    this.getInfluencers();
  }
  columns = ['id', 'nome', 'inscritos', 'canal', 'plataforma', 'categoria'];
  ngOnInit(): void {}

  getInfluencers(): void {
    this.influencerService.getAll().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      },
    });
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}
