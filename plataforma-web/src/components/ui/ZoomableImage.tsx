"use client";

import React, { useState, useEffect, useCallback, useRef } from "react";
import { ZoomIn, ZoomOut, RotateCcw, X } from "lucide-react";

interface ZoomableImageProps {
  src: string;
  alt: string;
  className?: string;
  containerClassName?: string;
  caption?: React.ReactNode;
}

export function ZoomableImage({
  src,
  alt,
  className = "",
  containerClassName = "",
  caption,
}: ZoomableImageProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStartRef = useRef({ x: 0, y: 0 });
  const touchStartDistRef = useRef<number | null>(null);

  const openModal = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setIsOpen(true);
  };

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  }, []);

  const handleZoomIn = () => {
    setScale((prev) => Math.min(4, +(prev + 0.25).toFixed(2)));
  };

  const handleZoomOut = () => {
    setScale((prev) => {
      const nextScale = Math.max(1, +(prev - 0.25).toFixed(2));
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
      return nextScale;
    });
  };

  const handleReset = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  // Manejo de la rueda del ratón (Wheel) con respuesta ágil
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    e.stopPropagation();
    const delta = e.deltaY < 0 ? 0.25 : -0.25;
    setScale((prev) => {
      const newScale = Math.min(4, Math.max(1, +(prev + delta).toFixed(2)));
      if (newScale === 1) setPosition({ x: 0, y: 0 });
      return newScale;
    });
  };

  // Manejo de arrastre (Pan) con ratón
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    setIsDragging(true);
    dragStartRef.current = { x: e.clientX - position.x, y: e.clientY - position.y };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStartRef.current.x,
      y: e.clientY - dragStartRef.current.y,
    });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  // Manejo táctil para Mobile (Pinch to Zoom & Touch Pan)
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartDistRef.current = dist;
    } else if (e.touches.length === 1 && scale > 1) {
      setIsDragging(true);
      dragStartRef.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartDistRef.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const factor = dist / touchStartDistRef.current;
      setScale((prev) => {
        const newScale = Math.min(4, Math.max(1, +(prev * (factor > 1 ? 1.05 : 0.95)).toFixed(2)));
        if (newScale === 1) setPosition({ x: 0, y: 0 });
        return newScale;
      });
      touchStartDistRef.current = dist;
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStartRef.current.x,
        y: e.touches[0].clientY - dragStartRef.current.y,
      });
    }
  };

  const handleTouchEnd = () => {
    touchStartDistRef.current = null;
    setIsDragging(false);
  };

  // Cerrar modal con tecla Escape
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeModal]);

  return (
    <>
      {/* Contenedor inline: SIN efectos de hover ni transformaciones */}
      <div
        className={`relative overflow-hidden rounded-xl cursor-zoom-in inline-block max-w-full ${containerClassName}`}
        onClick={openModal}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            openModal();
          }
        }}
        aria-label={`Ampliar imagen: ${alt}`}
      >
        <img src={src} alt={alt} className={`block ${className}`} />
      </div>

      {caption && <div className="w-full">{caption}</div>}

      {/* Modal / Lightbox: Fondo fijo, zoom exclusivamente en la imagen */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 select-none animate-in fade-in duration-200"
          onClick={closeModal}
          role="dialog"
          aria-modal="true"
          aria-label={alt}
        >
          {/* Botón cerrar */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2.5 rounded-full bg-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-700 transition-colors z-50 shadow-xl border border-slate-700 cursor-pointer"
            aria-label="Cerrar vista ampliada"
          >
            <X size={22} />
          </button>

          {/* Barra Lateral Vertical de Control e Indicador de Zoom */}
          <aside
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-3 bg-slate-900/90 backdrop-blur-md px-2 sm:px-3 py-4 rounded-2xl border border-slate-700/80 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón Zoom In */}
            <button
              onClick={handleZoomIn}
              disabled={scale >= 4}
              aria-label="Aumentar zoom"
              title="Aumentar zoom"
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-indigo-600 hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ZoomIn size={18} />
            </button>

            {/* Slider Vertical Interactivo */}
            <div className="flex flex-col items-center justify-center py-2 h-32 sm:h-44">
              <input
                type="range"
                min="1"
                max="4"
                step="0.05"
                value={scale}
                onChange={(e) => {
                  const val = parseFloat(e.target.value);
                  setScale(val);
                  if (val === 1) setPosition({ x: 0, y: 0 });
                }}
                className="w-2 h-28 sm:h-36 accent-indigo-500 cursor-pointer [writing-mode:vertical-lr] [direction:rtl]"
                aria-label="Nivel de zoom"
              />
            </div>

            {/* Botón Zoom Out */}
            <button
              onClick={handleZoomOut}
              disabled={scale <= 1}
              aria-label="Disminuir zoom"
              title="Disminuir zoom"
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-indigo-600 hover:text-white disabled:opacity-40 disabled:hover:bg-slate-800 disabled:cursor-not-allowed transition-colors cursor-pointer"
            >
              <ZoomOut size={18} />
            </button>

            {/* Botón Reset */}
            <button
              onClick={handleReset}
              aria-label="Restablecer zoom original"
              title="Restablecer (100%)"
              className="p-1.5 sm:p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 transition-colors cursor-pointer"
            >
              <RotateCcw size={16} />
            </button>

            {/* Indicador de Porcentaje en Tiempo Real */}
            <span className="text-[11px] sm:text-xs font-mono font-bold text-indigo-400 px-1 py-0.5 rounded bg-slate-950/80 border border-slate-800">
              {Math.round(scale * 100)}%
            </span>
          </aside>

          {/* Viewport de la imagen: Contenedor con overflow controlado */}
          <div
            className="relative w-full h-full max-w-6xl max-h-[85vh] flex items-center justify-center overflow-hidden"
            onWheel={handleWheel}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onClick={(e) => e.stopPropagation()}
            style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
          >
            {/* Elemento de la imagen con escala y traslación */}
            <img
              src={src}
              alt={alt}
              draggable={false}
              onDoubleClick={() => {
                if (scale === 1) {
                  setScale(2);
                } else {
                  handleReset();
                }
              }}
              style={{
                transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.15s ease-out",
                transformOrigin: "center center",
              }}
              className="max-h-[80vh] max-w-[90vw] w-auto h-auto object-contain rounded-lg shadow-2xl select-none will-change-transform pointer-events-auto"
            />
          </div>

          {/* Barra inferior informativa */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-mono bg-slate-950/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-slate-800 text-center pointer-events-none hidden sm:block">
            {alt} • Rueda del ratón o barra lateral para zoom • {scale > 1 ? "Arrastra para mover" : "Doble clic para 200%"}
          </div>
        </div>
      )}
    </>
  );
}
