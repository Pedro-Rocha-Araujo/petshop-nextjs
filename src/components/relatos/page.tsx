import "./relatos.css"
import Image from "next/image"

export default function Relatos() {
  return (
    <section className="relatos">
      <h2> <i className="fa-regular fa-message"></i> Relatos dos clientes</h2>
      <div className="relatos">

        <div className="relato">
          <Image
            src={"/relato1.jpg"}
            alt="Imagem ilustrativa de um cliente satisfeito"
            width={300}
            height={300}
          />
          <h3>André Matos</h3>
          <p>Meu cachorro sempre fica feliz quando chega ao pet shop. O atendimento é excelente e o cuidado com os animais faz toda a diferença.</p>
        </div>

        <div className="relato">
          <Image
            src={"/relato2.jpg"}
            alt="Imagem ilustrativa de um cliente satisfeito"
            width={300}
            height={300}
          />
          <h3>Ana Paula</h3>
          <p>Levei minha gata para banho e tosa e ela voltou linda e super tranquila. Recomendo de olhos fechados!</p>
        </div>

        <div className="relato">
          <Image
            src={"/relato3.png"}
            alt="Imagem ilustrativa de um cliente satisfeito"
            width={300}
            height={300}
          />
          <h3>Juliana Santos</h3>
          <p>Equipe atenciosa, ambiente limpo e produtos de qualidade. Virou nosso pet shop de confiança.</p>
        </div>

      </div>
    </section>
  )
}