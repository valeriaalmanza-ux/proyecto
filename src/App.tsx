import { useState } from 'react';
import { useProductos } from './hooks/useProductos';
import Header from './components/Header';
import ProductoCard from './components/ProductoCard';

export default function App() {
  const { productos } = useProductos();
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter(p =>
    p.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <div className="app">
      <Header />
      <main className="main">

        {/* Barra de búsqueda */}
        <input
          type="text"
          className="search-input"
          placeholder="🔍 Buscar producto..."
          value={busqueda}
          onChange={e => setBusqueda(e.target.value)}
        />

        <section>
          <h2>Productos ({productosFiltrados.length})</h2>
          <div className="grid">
            {productosFiltrados.map(p => (
              <ProductoCard key={p.id} producto={p} />
            ))}
          </div>
        </section>

      </main>
    </div>
  );
}