export interface Hombre {
    id?: number; // Opcional porque es autogenerado en el backend
    nombre: string;
    marca: string;
    imagen: string;
    categoria: string;
    descripcion: string;
    stock: number;
    precio: number;
    precioOferta: number;
}
