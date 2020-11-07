import { Component, OnInit } from '@angular/core';
import {CampaniasService} from '../../service/campanias.service';
import {PeriodicElement} from '../upload/upload.component';

export interface PeriodicElement2 {
  idpractica: number;
  nombre: string;
  fecha: string;
  autor: string;
  descripcion: string;
  observaciones: string;
  vigencia: string;
}


@Component({
  selector: 'app-campanias',
  templateUrl: './campanias.component.html',
  styles: ['table{width: 100%;}']
})


export class CampaniasComponent implements OnInit {
  displayedColumns: string[] = ['idpractica', 'nombre', 'fecha', 'autor', 'descripcion', 'observaciones', 'vigencia'];
  dataSource: PeriodicElement2[] = [
    {idpractica: 1, nombre: 'edigo', fecha: '2020/02/20', autor:'munoz' ,descripcion:'practiuca', observaciones:'nunguna', vigencia:'si'},
    {idpractica: 1, nombre: 'edigo',fecha:'2020/02/20',autor:'munoz',descripcion:'practiuca',observaciones:'nunguna',vigencia:'si'},
  ];
  data =  new Array<PeriodicElement>();
  favoriteSeason: string;
  seasons: string[] = ['Winter', 'Spring', 'Summer', 'Autumn'];
  constructor(private uploadService: CampaniasService) { }

  ngOnInit() {
    this.uploadService.getAll().subscribe(result => {
      console.log(result);
         });
  }



}
