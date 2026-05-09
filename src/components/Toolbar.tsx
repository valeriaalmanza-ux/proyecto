import type { Categoria } from '../types';

interface CategoriaOpcion { value: Categoria | ''; label: string; emoji: string; }

const CATEGORIAS: CategoriaOpcion[] = [
  { value: '',         label: 'Todos',    emoji: '🏪' },
  { value: 'pan',      label: 'Pan',      emoji: '🍞' },
  { value: 'pastel',   label: 'Pastel',   emoji: '🎂' },
  { value: 'galletas', label: 'Galletas', emoji: '🍪' },
];

interface Props {
  busqueda: string;
  setBusqueda: (v: string) => void;
  categoriaFiltro: Categoria | '';
  setCategoriaFiltro: (v: Categoria | '') => void;
  onNuevo: () => void;
}

export default function Toolbar({ busqueda, setBusqueda, categoriaFiltro, setCategoriaFiltro, onNuevo }: Props) {
  return (
    <div className="toolbar">
      <div className="inner">
        <div className="search-box">
          <span className="search-icon">🔍</span>
          <input
            type="text"
            className="search-input"
            placeholder="Buscar productos por nombre..."
            value={busqueda}
            onChange={e => setBusqueda(e.target.value)}
          />
          {busqueda && <button className="clear-btn" onClick={() => setBusqueda('')}>✕</button>}
        </div>
        <div className="filtros">
          {CATEGORIAS.map(cat => (
            <button
              key={cat.value}
              className={`filtro-btn ${categoriaFiltro === cat.value ? 'active' : ''}`}
              onClick={() => setCategoriaFiltro(cat.value as Categoria | '')}
            >
              <span>{cat.emoji}</span><span>{cat.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}