import { useEffect } from 'react';
import type { ToastData } from '../types';

interface Props extends ToastData { onClose: () => void; }

const ICONOS: Record<ToastData['tipo'], string> = { exito: '✅', error: '❌', info: 'ℹ️' };

export default function Toast({ mensaje, tipo, onClose }: Props) {
  useEffect(() => { const t = setTimeout(onClose, 3000); return () => clearTimeout(t); }, [onClose]);
  return (
    <div className={`toast ${tipo} slide-down`}>
      <span>{ICONOS[tipo]}</span>
      <span>{mensaje}</span>
      <button className="close-btn" onClick={onClose}>✕</button>
    </div>
  );
}