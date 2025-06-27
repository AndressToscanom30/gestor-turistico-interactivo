import "../Inicio.css";

const Inicio = () => {
    return(
        <div>
            <section class="figures">
                <div class="figure">
                    <img src="/public/imgcentrocucuta.jpg" alt="Figura 1" />
                    <h3>PARQUE SANTANDERS</h3>
                    <p>centro de cucuta en el cual se encuentra distintas ubicaciones importantes de la ciudad</p>
                    <button onclick="location.href='pagina1.html'">Ver más</button>
                </div>
                <div class="figure">
                    <img src="/public/img.png" alt="Figura 2" />
                    <h3>LOS CAOBOS</h3>
                    <p>barrio residencial, comercial e institucional de Cúcuta</p>
                    <button onclick="location.href='pagina2.html'">Ver más</button>
                </div>
                <div class="figure">
                    <img src="/public/maleconCucuta.jpg" alt="Figura 3" />
                    <h3>MALECÓN DE CÚCUTA</h3>
                    <p> zona verde ubicada en la Avenida Los Libertadoresa orillas del Río Pamplonita</p>
                    <button onclick="location.href='pagina3.html'">Ver más</button>
                </div>
                <div class="figure">
                    <img src="/public/Templo_Historico.jpg" alt="Figura 4" />
                    <h3>TEMPLO HISTORICO</h3>
                    <p>iglesia ubicada en Villa del Rosario, en 1821 sesionó el Congreso que redactó y promulgó la Constitución de 1821, mediante la cual fue creada la República de Colombia</p>
                    <button onclick="location.href='pagina4.html'">Ver más</button>
                </div>
                <div class="figure">
                    <img src="/public/Biblioteca-Pública.jpg" alt="Figura 5" />
                    <h3>BIBLIOTECA PÚBLICA</h3>
                    <p>La Biblioteca Pública Julio Pérez Ferrero es un biblioteca pública ubicada en la ciudad de Cúcuta, Colombia. Es el centro de consulta más grande e importante de Cúcuta y Norte de Santander</p>
                    <button onclick="location.href='pagina5.html'">Ver más</button>
                </div>
                <div class="figure">
                    <img src="/public/casa_general_santander.jpg" alt="Figura 6" />
                    <h3>CASA GENERAL SANTANDER</h3>
                    <p> lugar donde nació Francisco José de Paula Santander, museo que conserva algunas objetos y vestimentas pertenecientes a Santander</p>
                    <button onclick="location.href='pagina6.html'">Ver más</button>
                </div>
            </section>
        </div>
    )
}

export default Inicio;