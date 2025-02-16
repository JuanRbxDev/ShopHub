import { Component, OnInit } from '@angular/core';
import { HombreService } from '../../service/hombre.service';
import { CommonModule } from '@angular/common';
import { Hombre } from '../../interface/hombre';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-man',
  imports: [
    CommonModule,
    RouterLink
    
  ],
  templateUrl: './man.component.html',
  styleUrl: './man.component.css'
})
export class ManComponent implements OnInit {

  hombres: Hombre[] = []; // Array de todos los productos
  loading: boolean = true; // Para mostrar el texto de "Cargando productos..."
  

  constructor(private hombreService: HombreService) { }

  ngOnInit() {
    this.obtenerHombres();
  }

  obtenerHombres() {
    this.hombreService.getHombres().subscribe(
      (data: Hombre[]) => {
        this.hombres = data;
        this.loading = false;
      },
      error => {
        console.error('Error al obtener hombres:', error);
        this.loading = false;
      }
    );
  }


  // Cambiar imagen por defecto si no se encuentra la imagen
  cambiarImagenPorDefecto(event: any) {
    event.target.src = "https://previews.123rf.com/images/kaymosk/kaymosk1804/kaymosk180400005/99776312-error-404-p%C3%A1gina-no-encontrada-error-con-efecto-de-falla-en-la-pantalla-ilustraci%C3%B3n-vectorial.jpg";
  }

}