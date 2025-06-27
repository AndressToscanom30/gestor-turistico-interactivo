import "../cultu-hist.css";

function CulturaHistoria() {

  return (
    <>
      <section className="seccion_cult-historia">
        <div className="img_seccion_cult-historia">
          <img src="/img.png" alt="Imagen ilustrativa" />
        </div>
        <div className="cont_seccion_cult-historia">
          <h2>Centro Histórico de Cúcuta – Ciudad Fronteriza con Historia</h2>
          <p>
            Itinerario: Parque Santander - Catedral San José - Gobernación de Norte de
            Santander - Biblioteca Pública Julio Pérez Ferrero
          </p>
          <button>Ver más</button>
        </div>
      </section>

      <section className="seccion_cult-historia">
        <div className="cont_seccion_cult-historia">
          <h2>Orígenes de la República – Villa del Rosario Histórica</h2>
          <p>
            Parque Histórico de Villa del Rosario - Casa Natal del General Francisco de Paula
            Santander - Iglesia Nuestra Señora del Rosario - Paseo por el Centro Urbano de Villa
            del Rosario
          </p>
          <button>Ver más</button>
        </div>
        <div className="img_seccion_cult-historia">
          <img src="/img.png" alt="Otra imagen ilustrativa" />
        </div>
      </section>
    </>
  )
}

export default CulturaHistoria;