import { Component, OnInit, ViewChild } from '@angular/core';
import { Influencer } from '../../Influencer';
import { InfluencerService } from '../influencer.service';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../../dialog/dialog.component';

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

  constructor(
    private influencerService: InfluencerService,
    private dialog: MatDialog
  ) {
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

  openDialog(): void {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
      })
      .afterClosed()
      .subscribe((val) => {
        this.getInfluencers();
      });
  }

  editInfluencer(row: Influencer): void {
    this.dialog
      .open(DialogComponent, {
        width: '40%',
        data: row,
      })
      .afterClosed()
      .subscribe((val) => {
        this.getInfluencers();
      });
  }

  deleteInfluencer(id: number) {
    this.influencerService.deleteInfluencer(id).subscribe({
      next: (res) => {
        alert('Influencer Excluído');
        this.getInfluencers();
      },
      error: () => {
        alert('Erro ao Excluir');
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
