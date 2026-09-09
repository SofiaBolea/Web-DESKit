import React from "react";
import { ArrowDown, ChevronDown, ChevronRight, Folder, FolderOpen, Coffee, FileJson, ArrowRight } from "lucide-react";

export const getExamplesData = (scrollTo: (id: string) => void) => ({
  ej1: [
    {
      id: 1,
      title: "Descripción del ejemplo",
      content: (
        <div className="w-full flex flex-col items-center justify-between border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
              Paso 1
            </span>
            <h3 className="text-xl md:text-2xl font-bold text-white mt-2">
              CREACIÓN DE PAQUETES
            </h3>
          </div>

          <div className="w-full flex flex-col md:flex-row items-center md:items-stretch gap-6 text-left">
            {/* Left Column: Description & Badges */}
            <div className="flex-1 flex flex-col justify-between gap-4">
              <p className="text-slate-300 text-sm md:text-base leading-relaxed text-center md:text-left">
                Se debe crear la carpeta <strong>ejercicio1</strong> (fuera de la carpeta <code>des</code>). Dentro de ella se deben crear los paquetes para contener cada una de las partes requeridas para esta simulación particular:
              </p>

              <div className="grid grid-cols-3 md:grid-cols-1 lg:grid-cols-3 gap-3 w-full my-auto">
                {[
                  { num: "1", name: "componentesPropios" },
                  { num: "2", name: "estadoDelSistema" },
                  { num: "3", name: "eventos" }
                ].map((item) => (
                  <div key={item.num} className="bg-slate-800/40 border border-slate-700/60 rounded-xl p-3 flex flex-col md:flex-row lg:flex-col items-center gap-2 hover:border-indigo-500/40 transition-all duration-300 group">
                    <span className="w-6 h-6 flex-shrink-0 flex items-center justify-center rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold border border-indigo-500/30 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {item.num}
                    </span>
                    <span className="text-[10px] sm:text-xs font-semibold text-slate-300 break-all group-hover:text-white text-center md:text-left lg:text-center transition-colors">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center md:justify-start">
                <button
                  onClick={() => scrollTo("paquetes")}
                  className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-lg shadow-indigo-500/20 hover:scale-[1.02]"
                >
                  <span>Ver anexo</span>
                  <ArrowDown size={16} className="animate-bounce" />
                </button>
              </div>
            </div>

            {/* Visual de visual studio */}
            <div className="w-full md:w-80 flex-shrink-0 flex flex-col bg-[#181818] border border-slate-700/50 rounded-xl overflow-hidden font-mono text-[11px] text-[#cccccc] shadow-2xl">

              {/* Contenido de la carpeta */}
              <div className="p-3 overflow-y-auto space-y-1 select-none leading-relaxed">
                <div className="flex items-center gap-1 text-slate-400">
                  <ChevronDown size={14} className="text-slate-500" />
                  <FolderOpen size={14} className="text-indigo-400/80" />
                  <span className="font-semibold text-slate-300">simuladorJava</span>
                </div>

                {/* des (cerrada) */}
                <div className="ml-4 flex items-center gap-1 text-slate-500">
                  <ChevronRight size={14} />
                  <Folder size={14} className="text-slate-500/70" />
                  <span>des</span>
                </div>

                {/* ejercicio1 */}
                <div className="ml-4 space-y-1">
                  <div className="flex items-center gap-1 text-indigo-300">
                    <ChevronDown size={14} className="text-indigo-400" />
                    <FolderOpen size={14} className="text-indigo-400" />
                    <span className="font-bold text-slate-200">ejercicio1</span>
                  </div>

                  {/* componentesPropios */}
                  <div className="ml-4 space-y-0.5">
                    <div className="flex items-center gap-1 text-amber-400/90">
                      <ChevronDown size={14} className="text-amber-500/60" />
                      <FolderOpen size={14} className="text-amber-500/70" />
                      <span>componentesPropios</span>
                    </div>
                  </div>

                  {/* estadoDelSistema */}
                  <div className="ml-4 space-y-0.5">
                    <div className="flex items-center gap-1 text-emerald-400/90">
                      <ChevronDown size={14} className="text-emerald-500/60" />
                      <FolderOpen size={14} className="text-emerald-500/70" />
                      <span>estadoDelSistema</span>
                    </div>
                  </div>

                  {/* eventos */}
                  <div className="ml-4 space-y-0.5">
                    <div className="flex items-center gap-1 text-rose-400/90">
                      <ChevronDown size={14} className="text-rose-500/60" />
                      <FolderOpen size={14} className="text-rose-500/70" />
                      <span>eventos</span>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Paso 2",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              ESTADO DEL SISTEMA
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se debe definir cómo quedará constituido el estado del sistema para este caso. Notese la implementación del método inicializar definido en la clase abstracta EstadoDelSistema
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">Ejercicio1.java</span>
              </div>

            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 68 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.estadoDelSistema;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Entity</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">EstadoDelSistema</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">Ejercicio1</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">EstadoDelSistema</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span> cola;
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">Servidor</span> servidor;
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Ejercicio1</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> inicializar() {"{"}
                </div>
                <div className="pl-8">
                  cola = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span>();
                </div>
                <div className="pl-8">
                  servidor = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Servidor</span>(<span className="text-[#569cd6]">false</span>);
                </div>
                <div className="pl-8">
                  agregarEntidad(servidor);
                </div>
                <div className="pl-8">
                  agregarEntidad(cola);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public boolean</span> estaServidorOcupado() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> servidor.getEstaOcupado();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> encolarSolicitud(<span className="text-[#4ec9b0]">Solicitud</span> solicitud) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (!getEntidades().contains(solicitud)) {"{"}
                </div>
                <div className="pl-12">
                  agregarEntidad(solicitud);
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  solicitud.setLifecyclePhase(<span className="text-[#ce9178]">&quot;EN_COLA&quot;</span>);
                </div>
                <div className="pl-8">
                  cola.encolarSolicitud(solicitud);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> atenderSolicitud(<span className="text-[#4ec9b0]">Solicitud</span> solicitud) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (!getEntidades().contains(solicitud)) {"{"}
                </div>
                <div className="pl-12">
                  agregarEntidad(solicitud);
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  cola.encolarSolicitud(solicitud);
                </div>
                <div className="pl-8">
                  servidor.pasarAOcupado(cola.solicitudPrioritaria());
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public boolean</span> haySolicitudesEnEspera() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> cola.getCantSolicitudesEsperando() &gt; <span className="text-[#b5cea8]">0</span>;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span> obtenerSolicitudPrioritaria() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> cola.solicitudPrioritaria();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> actualizarServidorDisponible() {"{"}
                </div>
                <div className="pl-8">
                  servidor.pasarALibre();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Servidor</span> getServidor() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.servidor;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span> getCola() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.cola;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> mostrarEstadoEntidades() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">for</span> (<span className="text-[#4ec9b0]">Entity</span> entidad : getEntidades()) {"{"}
                </div>
                <div className="pl-12">
                  entidad.showState();
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Paso 3",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              ESTRUCTURA DE LA CLASE COLA DE SOLICITUDES
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se debe definir cómo quedará constituida clase de la entidad Cola de Solicitudes
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">ColaDeSolicitudes.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 99 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.estadoDelSistema;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> java.<span className="text-[#4ec9b0]">util</span>.<span className="text-[#4ec9b0]">LinkedList</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> java.<span className="text-[#4ec9b0]">util</span>.<span className="text-[#4ec9b0]">Queue</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Entity</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Entity</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; colaClase1;
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; colaClase2;
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; colaClase3;
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; colaClase4;
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span>(<span className="text-[#4ec9b0]">String</span> id) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>(id, <span className="text-[#ce9178]">&quot;VACIA&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>(<span className="text-[#ce9178]">&quot;ColaDeSolicitudes&quot;</span>, <span className="text-[#ce9178]">&quot;VACIA&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">ColaDeSolicitudes</span>(<span className="text-[#4ec9b0]">String</span> id, <span className="text-[#4ec9b0]">String</span> lifecyclePhase) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(id, lifecyclePhase);
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.colaClase1 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">LinkedList</span>&lt;&gt;();
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.colaClase2 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">LinkedList</span>&lt;&gt;();
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.colaClase3 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">LinkedList</span>&lt;&gt;();
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.colaClase4 = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">LinkedList</span>&lt;&gt;();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private void</span> actualizarFase() {"{"}
                </div>
                <div className="pl-8">
                  setLifecyclePhase(getCantSolicitudesEsperando() &gt; <span className="text-[#b5cea8]">0</span> ? <span className="text-[#ce9178]">&quot;CON_SOLICITUDES&quot;</span> : <span className="text-[#ce9178]">&quot;VACIA&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> encolarSolicitud(<span className="text-[#4ec9b0]">Solicitud</span> solicitudParaAgregar) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">switch</span> (solicitudParaAgregar.getClase()) {"{"}
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">case</span> <span className="text-[#b5cea8]">1</span>:
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">this</span>.colaClase1.add(solicitudParaAgregar);
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">break</span>;
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">case</span> <span className="text-[#b5cea8]">2</span>:
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">this</span>.colaClase2.add(solicitudParaAgregar);
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">break</span>;
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">case</span> <span className="text-[#b5cea8]">3</span>:
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">this</span>.colaClase3.add(solicitudParaAgregar);
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">break</span>;
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">case</span> <span className="text-[#b5cea8]">4</span>:
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">this</span>.colaClase4.add(solicitudParaAgregar);
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">break</span>;
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">default</span>:
                </div>
                <div className="pl-16">
                  <span className="text-[#569cd6]">break</span>;
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  actualizarFase();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public int</span> getCantSolicitudesEsperando() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> colaClase1.size() + colaClase2.size() + colaClase3.size() + colaClase4.size();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span> solicitudPrioritaria() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">Solicitud</span> prioritaria = <span className="text-[#569cd6]">null</span>;
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (!colaClase4.isEmpty()) {"{"}
                </div>
                <div className="pl-12">
                  prioritaria = colaClase4.poll();
                </div>
                <div className="pl-8">
                  {"}"} <span className="text-[#569cd6]">else if</span> (!colaClase3.isEmpty()) {"{"}
                </div>
                <div className="pl-12">
                  prioritaria = colaClase3.poll();
                </div>
                <div className="pl-8">
                  {"}"} <span className="text-[#569cd6]">else if</span> (!colaClase2.isEmpty()) {"{"}
                </div>
                <div className="pl-12">
                  prioritaria = colaClase2.poll();
                </div>
                <div className="pl-8">
                  {"}"} <span className="text-[#569cd6]">else if</span> (!colaClase1.isEmpty()) {"{"}
                </div>
                <div className="pl-12">
                  prioritaria = colaClase1.poll();
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  actualizarFase();
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> prioritaria;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; getColaClase1() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.colaClase1;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; getColaClase2() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.colaClase2;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; getColaClase3() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.colaClase3;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Queue</span>&lt;<span className="text-[#4ec9b0]">Solicitud</span>&gt; getColaClase4() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.colaClase4;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> showState() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">System</span>.out.println(<span className="text-[#ce9178]">&quot;Cola ID: &quot;</span> + getId()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Fase: &quot;</span> + getLifecyclePhase()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Solicitudes en espera: &quot;</span> + getCantSolicitudesEsperando()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; (Clase 4: &quot;</span> + colaClase4.size()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot;, Clase 3: &quot;</span> + colaClase3.size()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot;, Clase 2: &quot;</span> + colaClase2.size()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot;, Clase 1: &quot;</span> + colaClase1.size() + <span className="text-[#ce9178]">&quot;)&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Paso 4",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              ESTRUCTURA DE LA CLASE SERVIDOR
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se debe definir cómo quedará constituida la clase de la entidad Servidor.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">Servidor.java</span>
              </div>

            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 57 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.estadoDelSistema;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Entity</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">Servidor</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Entity</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#4ec9b0]">Boolean</span> estaOcupado;
                </div>
                <div className="pl-4">
                  <span className="text-[#4ec9b0]">Solicitud</span> solicitudEnProcesamiento;
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Servidor</span>(<span className="text-[#4ec9b0]">String</span> id, <span className="text-[#569cd6]">boolean</span> estado) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(id, estado ? <span className="text-[#ce9178]">&quot;OCUPADO&quot;</span> : <span className="text-[#ce9178]">&quot;LIBRE&quot;</span>);
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.estaOcupado = estado;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Servidor</span>(<span className="text-[#569cd6]">boolean</span> estado) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>(<span className="text-[#ce9178]">&quot;Servidor&quot;</span>, estado);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public boolean</span> getEstaOcupado() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.estaOcupado;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> pasarAOcupado(<span className="text-[#4ec9b0]">Solicitud</span> solicitud) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.estaOcupado = <span className="text-[#569cd6]">true</span>;
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.solicitudEnProcesamiento = solicitud;
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (solicitud != <span className="text-[#569cd6]">null</span>) {"{"}
                </div>
                <div className="pl-12">
                  solicitud.setLifecyclePhase(<span className="text-[#ce9178]">&quot;EN_PROCESO&quot;</span>);
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  setLifecyclePhase(<span className="text-[#ce9178]">&quot;OCUPADO&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> pasarALibre() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (<span className="text-[#569cd6]">this</span>.solicitudEnProcesamiento != <span className="text-[#569cd6]">null</span>) {"{"}
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">this</span>.solicitudEnProcesamiento.setLifecyclePhase(<span className="text-[#ce9178]">&quot;FINALIZADA&quot;</span>);
                </div>
                <div className="pl-8">{"}"}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.estaOcupado = <span className="text-[#569cd6]">false</span>;
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.solicitudEnProcesamiento = <span className="text-[#569cd6]">null</span>;
                </div>
                <div className="pl-8">
                  setLifecyclePhase(<span className="text-[#ce9178]">&quot;LIBRE&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> setEstaOcupado(<span className="text-[#569cd6]">boolean</span> estado) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.estaOcupado = estado;
                </div>
                <div className="pl-8">
                  setLifecyclePhase(estado ? <span className="text-[#ce9178]">&quot;OCUPADO&quot;</span> : <span className="text-[#ce9178]">&quot;LIBRE&quot;</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span> getSolicitudEnProcesamiento() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.solicitudEnProcesamiento;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> showState() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">System</span>.out.println(<span className="text-[#ce9178]">&quot;Servidor ID: &quot;</span> + getId()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Fase: &quot;</span> + getLifecyclePhase()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Ocupado: &quot;</span> + estaOcupado
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Solicitud en proceso: &quot;</span> + (solicitudEnProcesamiento != <span className="text-[#569cd6]">null</span> ? solicitudEnProcesamiento.getClase() : <span className="text-[#ce9178]">&quot;Ninguna&quot;</span>));
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Paso 5",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              ESTRUCTURA DE LA CLASE SOLICITUD
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se debe definir cómo quedará constituida la clase de la entidad Solicitud.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">Solicitud.java</span>
              </div>

            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 42 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.estadoDelSistema;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Entity</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">Solicitud</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Entity</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private static int</span> contadorSolicitudes = <span className="text-[#b5cea8]">0</span>;
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private int</span> clase;
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>(<span className="text-[#ce9178]">&quot;Solicitud-&quot;</span> + (++contadorSolicitudes), (<span className="text-[#569cd6]">int</span>) ((<span className="text-[#4ec9b0]">Math</span>.random() * <span className="text-[#b5cea8]">4</span>) + <span className="text-[#b5cea8]">1</span>));
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span>(<span className="text-[#4ec9b0]">String</span> id) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>(id, (<span className="text-[#569cd6]">int</span>) ((<span className="text-[#4ec9b0]">Math</span>.random() * <span className="text-[#b5cea8]">4</span>) + <span className="text-[#b5cea8]">1</span>));
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span>(<span className="text-[#4ec9b0]">String</span> id, <span className="text-[#569cd6]">int</span> clase) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(id, <span className="text-[#ce9178]">&quot;ARRIBADA&quot;</span>);
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.clase = clase;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">Solicitud</span>(<span className="text-[#4ec9b0]">String</span> id, <span className="text-[#4ec9b0]">String</span> lifecyclePhase, <span className="text-[#569cd6]">int</span> clase) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(id, lifecyclePhase);
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.clase = clase;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public int</span> getClase() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return this</span>.clase;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> setClase(<span className="text-[#569cd6]">int</span> clase) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">this</span>.clase = clase;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> showState() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">System</span>.out.println(<span className="text-[#ce9178]">&quot;Solicitud ID: &quot;</span> + getId()
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Clase: &quot;</span> + clase
                </div>
                <div className="pl-16">
                  + <span className="text-[#ce9178]">&quot; | Fase: &quot;</span> + getLifecyclePhase());
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Paso 6",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              CONTADORES ESTADÍSTICOS
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se deben definir los contadores estadísticos propios del modelo heredando de <code>ContadoresEstadisticos</code>.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">ContadoresEstadisticosEjercicio1.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
                <span>16</span>
                <span>17</span>
                <span>18</span>
                <span>19</span>
                <span>20</span>
                <span>21</span>
                <span>22</span>
                <span>23</span>
                <span>24</span>
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.componentesPropios;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ContadoresEstadisticos</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">ContadoresEstadisticos</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">private int</span> cantSolicitudesProcesadas;
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> inicializar() {"{"}
                </div>
                <div className="pl-8">
                  cantSolicitudesProcesadas = <span className="text-[#b5cea8]">0</span>;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public int</span> getCantProcesadas() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> cantSolicitudesProcesadas;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> actualizarCantProcesadas() {"{"}
                </div>
                <div className="pl-8">
                  cantSolicitudesProcesadas++;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Paso 7",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              GENERADOR DE REPORTES
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se implementa la clase propia heredando de <code>GeneradorDeReportes</code> para procesar e imprimir las métricas de la simulación.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">GeneradorDeReportesEjercicio1.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                <span>1</span>
                <span>2</span>
                <span>3</span>
                <span>4</span>
                <span>5</span>
                <span>6</span>
                <span>7</span>
                <span>8</span>
                <span>9</span>
                <span>10</span>
                <span>11</span>
                <span>12</span>
                <span>13</span>
                <span>14</span>
                <span>15</span>
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.componentesPropios;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ContadoresEstadisticos</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">GeneradorDeReportes</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">GeneradorDeReportesEjercicio1</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">GeneradorDeReportes</span> {"{"}
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> run(<span className="text-[#4ec9b0]">ContadoresEstadisticos</span> contadores) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span> contadoresEjemplo = (<span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span>) contadores;
                </div>
                <div className="pl-8">
                  System.out.println(<span className="text-[#ce9178]">"--------------------------------------------------------------------------------"</span>);
                </div>
                <div className="pl-8">
                  System.out.println(<span className="text-[#ce9178]">"GENERADOR DE REPORTES"</span>);
                </div>
                <div className="pl-8">
                  System.out.println(<span className="text-[#ce9178]">"--------------------------------------------------------------------------------"</span>);
                </div>
                <div className="pl-8">
                  System.out.println(<span className="text-[#ce9178]">"Cantidad de solicitudes procesadas: "</span> + contadoresEjemplo.getCantProcesadas());
                </div>
                <div className="pl-8">
                  System.out.println(<span className="text-[#ce9178]">"--------------------------------------------------------------------------------"</span>);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Paso 8: Definir los eventos y cómo estos se relacionan con el estado del sistema.",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              EVENTO: ARRIBAR A COLA
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se implementa la rutina del evento de arribo de solicitudes, agendando el próximo arribo y gestionando la atención o encolado.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">EventoArribarACola.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 46 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.eventos;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ContadoresEstadisticos</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Evento</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">EstadoDelSistema</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">LibreriaDeRutinas</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ListaDeEventos</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.componentesPropios.<span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.estadoDelSistema.<span className="text-[#4ec9b0]">Ejercicio1</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.estadoDelSistema.<span className="text-[#4ec9b0]">Solicitud</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">EventoArribarACola</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Evento</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">EventoArribarACola</span>(<span className="text-[#569cd6]">double</span> tiempoDeOcurrencia) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(tiempoDeOcurrencia);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> rutinaDeEvento(<span className="text-[#4ec9b0]">EstadoDelSistema</span> modelo, <span className="text-[#4ec9b0]">ContadoresEstadisticos</span> contadores, <span className="text-[#4ec9b0]">ListaDeEventos</span> eventos,
                </div>
                <div className="pl-12">
                  <span className="text-[#4ec9b0]">LibreriaDeRutinas</span> libreria) {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">Ejercicio1</span> modeloActual = (<span className="text-[#4ec9b0]">Ejercicio1</span>) modelo;
                </div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span> libreriaActual = (<span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span>) libreria;
                </div>
                <div>{" "}</div>
                <div className="pl-8 text-[#6a9955]">// Agendar próximo arribo</div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">EventoArribarACola</span> nuevoEvento = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">EventoArribarACola</span>(libreriaActual.tiempoEntreArribosSolicitudes());
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  eventos.agregar(nuevoEvento);
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">Solicitud</span> solicitudParaAgregar = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">Solicitud</span>();
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (modeloActual.estaServidorOcupado()) {"{"}
                </div>
                <div className="pl-12">
                  modeloActual.encolarSolicitud(solicitudParaAgregar);
                </div>
                <div className="pl-8">
                  {"}"} <span className="text-[#569cd6]">else</span> {"{"}
                </div>
                <div className="pl-12">
                  modeloActual.atenderSolicitud(solicitudParaAgregar);
                </div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">double</span> duracionDelProcesamiento = libreriaActual.tiempoDeProcesamiento();
                </div>
                <div>{" "}</div>
                <div className="pl-12">
                  <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span> nuevoEventoAdicional = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span>(duracionDelProcesamiento);
                </div>
                <div className="pl-12">
                  eventos.agregar(nuevoEventoAdicional);
                </div>
                <div className="pl-8">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-8">
                  modeloActual.mostrarEstadoEntidades();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 9,
      title: "Paso 9: Definir los eventos y cómo estos se relacionan con el estado del sistema.",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              EVENTO: TERMINA PROCESAMIENTO
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se implementa la rutina del evento que finaliza la atención de una solicitud, actualizando los contadores y desencadenando nuevas atenciones o liberando el servidor.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">EventoTerminaProcesamiento.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 46 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.eventos;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.componentesPropios.<span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.estadoDelSistema.<span className="text-[#4ec9b0]">Ejercicio1</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.estadoDelSistema.<span className="text-[#4ec9b0]">Solicitud</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> ejercicio1.componentesPropios.<span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ContadoresEstadisticos</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">EstadoDelSistema</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">Evento</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">LibreriaDeRutinas</span>;
                </div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">ListaDeEventos</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">Evento</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span>(<span className="text-[#569cd6]">double</span> tiempoDeOcurrencia) {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>(tiempoDeOcurrencia);
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">@Override</span>
                </div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public void</span> rutinaDeEvento(<span className="text-[#4ec9b0]">EstadoDelSistema</span> modelo, <span className="text-[#4ec9b0]">ContadoresEstadisticos</span> contadores, <span className="text-[#4ec9b0]">ListaDeEventos</span> eventos,
                </div>
                <div className="pl-12">
                  <span className="text-[#4ec9b0]">LibreriaDeRutinas</span> libreria) {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span> contadoresEjemplo = (<span className="text-[#4ec9b0]">ContadoresEstadisticosEjercicio1</span>) contadores;
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  contadoresEjemplo.actualizarCantProcesadas();
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">Ejercicio1</span> modeloActual = (<span className="text-[#4ec9b0]">Ejercicio1</span>) modelo;
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span> libreriaActual = (<span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span>) libreria;
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  modeloActual.actualizarServidorDisponible();
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">if</span> (modeloActual.haySolicitudesEnEspera()) {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-12">
                  <span className="text-[#4ec9b0]">Solicitud</span> solicitudAProcesar = modeloActual.obtenerSolicitudPrioritaria();
                </div>
                <div className="pl-12">
                  modeloActual.atenderSolicitud(solicitudAProcesar);
                </div>
                <div>{" "}</div>
                <div className="pl-12">
                  <span className="text-[#569cd6]">double</span> duracionDelProcesamiento = libreriaActual.tiempoDeProcesamiento();
                </div>
                <div className="pl-12">
                  <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span> nuevoEvento = <span className="text-[#569cd6]">new</span> <span className="text-[#4ec9b0]">EventoTerminaProcesamiento</span>(duracionDelProcesamiento);
                </div>
                <div>{" "}</div>
                <div className="pl-12">
                  eventos.agregar(nuevoEvento);
                </div>
                <div className="pl-8">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-8">
                  modeloActual.mostrarEstadoEntidades();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 10,
      title: "Paso 10: Librería de Rutinas",
      content: (
        <div className="w-full flex flex-col items-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-white mt-2">
              LIBRERÍA DE RUTINAS ESTOCÁSTICAS
            </h3>
            <p className="text-slate-300 text-sm max-w-lg mt-1 mx-auto leading-relaxed">
              Se implementan las funciones encargadas de generar los tiempos interarribos y de procesamiento de acuerdo a distribuciones de probabilidad.
            </p>
          </div>

          {/* Simulated Java IDE Code Editor */}
          <div className="w-full max-w-full md:max-w-xl bg-[#1e1e1e] border border-slate-700/60 rounded-xl overflow-hidden shadow-2xl flex flex-col text-left font-mono text-xs text-[#d4d4d4]">
            {/* Tab Header */}
            <div className="bg-[#2d2d2d] flex items-center justify-between border-b border-[#181818] px-3">
              <div className="flex items-center gap-2 bg-[#1e1e1e] px-4 py-2 border-t-2 border-indigo-500 rounded-t text-[#d4d4d4] -mb-[1px]">
                <Coffee size={12} className="text-amber-500" />
                <span className="font-semibold text-slate-300">LibreriaDeRutinasEjercicio1.java</span>
              </div>
            </div>

            {/* Code lines */}
            <div className="p-4 flex gap-4 overflow-hidden leading-relaxed">
              {/* Line Numbers */}
              <div className="text-slate-600 select-none text-right flex flex-col">
                {Array.from({ length: 30 }, (_, i) => (
                  <span key={i + 1}>{i + 1}</span>
                ))}
              </div>

              {/* Java Syntax Content */}
              <div className="flex-1 whitespace-pre min-w-0 overflow-x-auto">
                <div>
                  <span className="text-[#569cd6]">package</span> ejercicio1.componentesPropios;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">import</span> des.<span className="text-[#4ec9b0]">LibreriaDeRutinas</span>;
                </div>
                <div>{" "}</div>
                <div>
                  <span className="text-[#569cd6]">public class</span> <span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span> <span className="text-[#569cd6]">extends</span> <span className="text-[#4ec9b0]">LibreriaDeRutinas</span> {"{"}
                </div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public</span> <span className="text-[#4ec9b0]">LibreriaDeRutinasEjercicio1</span>() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">super</span>();
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public double</span> tiempoEntreArribosSolicitudes() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">double</span> media = <span className="text-[#b5cea8]">1.91</span>;
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">double</span> u = Math.random();
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">double</span> tiempo = -media * Math.log(<span className="text-[#b5cea8]">1</span> - u);
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> tiempo;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div className="pl-4">
                  <span className="text-[#569cd6]">public double</span> tiempoDeProcesamiento() {"{"}
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">double</span> u = Math.random();
                </div>
                <div>{" "}</div>
                <div className="pl-8 text-[#6a9955]">
                  // Rango uniforme entre 0.5 y 2.5
                </div>
                <div className="pl-8 text-[#6a9955]">
                  // Fórmula: mínimo + (máximo - mínimo) * u
                </div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">double</span> tiempo = <span className="text-[#b5cea8]">0.5</span> + (<span className="text-[#b5cea8]">2.5</span> - <span className="text-[#b5cea8]">0.5</span>) * u;
                </div>
                <div>{" "}</div>
                <div className="pl-8">
                  <span className="text-[#569cd6]">return</span> tiempo;
                </div>
                <div className="pl-4">{"}"}</div>
                <div>{" "}</div>
                <div>{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      )
    },
    {
      id: 11,
      title: "Paso 11: Configuración XML",
      content: (
        <div className="w-full flex flex-col items-center justify-center border-2 border-dashed border-indigo-500/30 rounded-2xl bg-slate-900/60 p-5 sm:p-6 md:p-8 text-center gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 mb-2">
              <FileJson size={28} />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-white">
              CONFIGURACIÓN EN XML
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Una vez implementadas todas las clases de tu modelo, se debe modificar el archivo <code className="text-amber-400 bg-slate-800 px-2.5 py-1 rounded font-mono text-xs border border-slate-700">configuracion.xml</code> especificando los nombres cualificados de las clases para la instanciación dinámica.
            </p>
          </div>

          <button
            onClick={() => scrollTo("configurador")}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold transition-all shadow-lg shadow-indigo-500/25 hover:scale-105 active:scale-95 cursor-pointer"
          >

            <span>Ver explicación del Configurador XML</span>
          </button>
        </div>
      )
    }
  ]
});
