import "./curiosidades.css"

export default function Curiosidades() {
  return (
    <section className="curiosidades">

      <h2><i className="fa-solid fa-magnifying-glass"></i> Curiosidades</h2>
      <div className="curiosidades">

        <div className="curiosidade">
          <h3>Tem mesmo 7 vidas?</h3>
          <p>Esse mito foi criado como uma forma de brincar com a agilidade de reflexos apurados dos felinos.</p>
        </div>

        <div className="curiosidade">
          <h3>Não sentem o sabor doce?</h3>
          <p>Isso ocorre porque os gatos possuem uma mutação genética que 'desativa' os receptores de sabor doce.</p>
        </div>

        <div className="curiosidade">
          <h3>Enxergam mal de perto?</h3>
          <p>Os gatos têm dificuldade para focar objetos a menos de 25-30 cm, pois sua visão é adaptada para focar em distâncias maiores.</p>
        </div>

      </div>

    </section>
  )
}