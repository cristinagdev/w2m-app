import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { debounceTime,  Observable, switchMap } from 'rxjs';
import { ModalComponent } from 'src/app/shared/modal/modal.component';
import { SpinnerService } from 'src/app/shared/spinner/services/spinner.service';
import { Hero } from './interfaces/hero.interface';
import { HeroService } from './services/hero.service';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit, AfterViewInit {

  search: FormControl= new FormControl()
  heroesList$!: Observable<Hero[]>;
  heroesList: Hero[] = [];
  languageSelected: string='';


  displayedColumns: string[] = ['position', 'name', 'power','button', ];
  dataSource: MatTableDataSource<Hero>= new MatTableDataSource(this.heroesList);
  @ViewChild(MatPaginator) paginator!: MatPaginator;


  constructor (
    private heroService: HeroService,
    private router: Router,
    public dialog: MatDialog,
    private spinnerService: SpinnerService
    ) {
     this.getHeroesList();

  }

  ngOnInit(): void {
    this.search.valueChanges.pipe(
      debounceTime(500),
      switchMap(changedValue => this.heroService.searchHero(changedValue)),
   ).subscribe(value => {
    this.dataSource.data= value;

   })

  }

  ngAfterViewInit(): void {
    this.dataSource.paginator= this.paginator;
  }

  getHeroesList() {
    // this.heroesList$= this.heroService.heroes$;
    // console.log(this.heroesList$);

    this.heroService.getListHeroes().subscribe((res) => {
      this.heroesList= res;
      this.dataSource.data= this.heroesList;
    });

  }



  deleteHero(id: number){
    const dialogRef = this.dialog.open(ModalComponent)

    dialogRef.afterClosed().subscribe((res)=> {
      if(res) {
        this.heroService.deleteHero(id).subscribe()
      }
      this.getHeroesList()
    })
  }

  updateHero(id: number){
    this.router.navigate(['/heroes/create'], {
      queryParams: {id: id}
    })

  }



}
