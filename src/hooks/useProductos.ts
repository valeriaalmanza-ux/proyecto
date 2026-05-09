import { useState } from 'react';
import type { Producto } from '../types';

const productosIniciales: Producto[] = [
  { id: 1, nombre: 'Baguette  Molar', descripcion: 'Pan francés crujiente', precio: 28.50, categoria: 'pan' },
  { id: 2, nombre: 'Croissant Maye', descripcion: 'Hojaldrado y dorado', precio: 18.00, categoria: 'pan' },
  { id: 3, nombre: 'Pastel de Tres Leches', descripcion: 'Esponjoso y húmedo', precio: 85.00, categoria: 'pastel' },
  { id: 4, nombre: 'Café de Olla', descripcion: 'Con canela y piloncillo', precio: 35.00, categoria: 'bebida' },
  { id: 5, nombre: 'Galletas Almanza', descripcion: 'Crujientes con chocolate', precio: 12.00, categoria: 'galletas' },
];

export function useProductos() {
  const [productos] = useState<Producto[]>(productosIniciales);
  return { productos };
}