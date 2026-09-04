"use client";

import React, { useState } from "react";
import { Carousel } from "../ui/Carousel";
import { getExamplesData } from "../../data/examplesData";

export function ExamplesSection() {
  const [selectedExample, setSelectedExample] = useState("ej1");
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const examplesData = getExamplesData(scrollTo);

  return (
    <section id="ejemplos" className="py-8 sm:py-12 md:py-24 px-4 sm:px-8 max-w-7xl mx-auto">
      <div className="mb-6 sm:mb-8 md:mb-12 text-center max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-3 sm:mb-4">Paso a Paso Interactivo</h2>
        <div className="text-slate-300 text-sm sm:text-base leading-relaxed bg-slate-900/60 p-4 sm:p-6 rounded-2xl border border-slate-800/80 text-left mt-4 shadow-lg">
          <strong className="text-indigo-400 block mb-1">Enunciado del modelo:</strong>
          Un servidor en la nube procesa solicitudes que llegan con un tiempo entre arribos distribuido exponencialmente con media 1.91 minutos. Cada solicitud es de una clase, existiendo prioridad de atención para las clases más altas (4 a 1). Los tiempos requeridos para procesar las solicitudes son uniformes entre 0,5 y 2,5 minutos.
        </div>
      </div>

      <Carousel steps={examplesData[selectedExample as keyof typeof examplesData]} />
    </section>
  );
}
