import "./planos.css"

export default function Planos() {
  return (
    <section className="planos">
      <h2><i className="fa-solid fa-coins"></i> Confira nossos planos!</h2>
      <div className="planos">

        <div className="plano">
          <h3>Plano Gratuito</h3>
          <p>Disponibilização de conteúdos como Vídeos e PDFs com dicas de cuidados especiais enviados via E-mail.</p>
          <button><a target="_blank" href="https://wa.me/557999999999?text=Olá! Tenho interesse no plano gratuito.">Conferir</a></button>
        </div>

        
        <div className="plano">
          <h3>R$50,00 Mensais</h3>
          <p>Nesse plano, é disponibilizado banho e tosa três vezes no mês mediante à um agendamento prévio.</p>
          <button><a target="_blank" href="https://wa.me/557999999999?text=Olá! Tenho interesse no plano de R$ 50,00 mensais">Conferir</a></button>
        </div>

        <div className="plano">
          <h3>R$100,00 Mensais</h3>
          <p>Nesse plano, é disponibilizado banho e tosa seis vezes por mês, além de descontos frequentes.</p>
          <button><a target="_blank" href="https://wa.me/557999999999?text=Olá! Tenho interesse no plano de R$ 100,00 mensais">Conferir</a></button>
        </div>

      </div>
    </section>
  )
}