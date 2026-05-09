import type { Producto, Categoria } from '../types';

const EMOJI: Record<Categoria, string> = {
  pan: '🍞', pastel: '🎂', galletas: '🍪',
};

interface Props {
  producto: Producto;
}

export default function ProductoCard({ producto }: Props) {
  return (
    <div className="card">
      <div className="card-top">
        <span className="badge">{EMOJI[producto.categoria]} {producto.categoria}</span>
        <span className="precio">${producto.precio.toFixed(2)}</span>
      </div>
      <h3>{producto.nombre}</h3>
      {producto.descripcion && <p>{producto.descripcion}</p>}
    </div>
  );
}