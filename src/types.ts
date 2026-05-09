export type Categoria = 'pan' | 'pastel' | 'galletas' | 'bebida';

export interface Producto {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: Categoria;
}