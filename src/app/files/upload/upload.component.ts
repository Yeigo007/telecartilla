import { Component, OnInit } from '@angular/core';
import {CampaniasService} from '../../service/campanias.service';

export interface PeriodicElement {
  idcampania: number;
  nombres: string;
  apellidos: string;
  telefono: string;
  direccion: string;
}

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent {
  archivo = {
    nombre: null,
    nombreArchivo: null,
    base64textString: null,
    formato: '',
    caracter: '',
    idcampana: 0,
    informacion: null,
    texto:''
  }
  displayedColumns: string[] = ['idcampania', 'nombres', 'apellidos', 'telefono', 'direccion'];
  dataSource: PeriodicElement[];
  data = new Array<PeriodicElement>();
  /*radio button*/
 /* favoriteSeason: string;
  seasons: string[] = ['Coma', 'Espacio', 'Porcentaje', 'Barra'];*/
  favoriteSeason: string;
  seasons: string[] = ['Coma', 'Tab', 'Slash', 'Porcentaje'];
  constructor(private uploadService: CampaniasService ) { }

  seleccionarArchivo(event) {
    var files = event.target.files;
    var file = files[0];
    this.archivo.nombreArchivo = file.name;

    if(files && file) {
      var reader = new FileReader();
      reader.onload = this._handleReaderLoaded.bind(this);
      reader.readAsBinaryString(file);
    }
  }

  _handleReaderLoaded(readerEvent) {
    var binaryString = readerEvent.target.result;
    this.archivo.informacion = binaryString;
    this.archivo.base64textString = btoa(binaryString);
    this.archivo.formato = this.archivo.informacion.split('\n')[0];
  }

  async preVisualizacion() {
    this.data = new Array<PeriodicElement>();
    this.dataSource = null;
    this.archivo.caracter ='';
    this.archivo.idcampana = 0;
    if ( this.archivo.informacion != null) {
      if (this.archivo.caracter != null) {
       let ultimoReg = await this.uploadService.getLastid();
       this.archivo.idcampana = ultimoReg;
         var arrayLineas = this.archivo.informacion.split('\n');
         if(this.archivo.texto === ''){
           if(this.favoriteSeason==='Coma'){
             this.archivo.caracter = ',';
           }else if(this.favoriteSeason==='Tab'){
             this.archivo.caracter = ' ';
           }else if(this.favoriteSeason==='Slash'){
             this.archivo.caracter = '/';
           }else if(this.favoriteSeason==='Porcentaje'){
             this.archivo.caracter = '%';
           }else{
             alert('escoja un caracter apra dividir archivo');
           }
         }else{
           this.archivo.caracter = this.archivo.texto
         }
         for ( var i = 0; i < arrayLineas.length; i++){
           if (arrayLineas[i] != null ) {
             this.data.push({
               idcampania: this.archivo.idcampana  + 1,
               nombres: arrayLineas[i].split(this.archivo.caracter)[0],
               apellidos: arrayLineas[i].split(this.archivo.caracter)[1],
               telefono: arrayLineas[i].split(this.archivo.caracter)[2],
               direccion: arrayLineas[i].split(this.archivo.caracter)[3]
             });
             this.archivo.idcampana  = this.archivo.idcampana  + 1;
           }
         }
        this.dataSource = this.data;
      }else{
        alert('Debe ingresar un caracter para serar la informacion');
      }
    }else {
      alert('Debe cargar un archivo txt');
    }
  }

  upload() {
    console.log(this.archivo);
    this.uploadService.saveCampania(this.data).then(result => {
      console.log('registro correcto');
      alert('registros ingresados correctamente');
      this.dataSource = null;
      this.archivo.formato = '';
      this.archivo.texto = '';
    });

  }

  radio(){
    this.archivo.caracter =  this.favoriteSeason;
  }
}
