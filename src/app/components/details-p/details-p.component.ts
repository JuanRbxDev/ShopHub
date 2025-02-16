import { Component, OnInit } from '@angular/core';
import { Hombre } from '../../interface/hombre';
import { ActivatedRoute } from '@angular/router';
import { HombreService } from '../../service/hombre.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details-p',
  imports: [
    CommonModule
  ],
  templateUrl: './details-p.component.html',
  styleUrl: './details-p.component.css'
})
export class DetailsPComponent implements OnInit{

  hombre: Hombre | null = null; // ahora puede ser null antes de la carga
  loading: boolean = true;

  constructor(
      private route: ActivatedRoute,
      private hombreService: HombreService
  ) {}

  ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id) {
          this.obtenerHombre(id);
      }
  }

  obtenerHombre(id: string): void {
      this.hombreService.getHombreById(id).subscribe(
          (data: Hombre) => {
              this.hombre = data;
              this.loading = false;
          },
          error => {
              console.error('Error al obtener el hombre:', error);
              this.loading = false;
          }
      );
  }
  
}
