import "./header.css"
import Image from "next/image"

export default function Header() {
  return (
    <header>

      <div className="main-header">
        <i className="fa-solid fa-paw"></i>
        <h1>Petshop</h1>
        <button><a target="_blank" href="https://wa.me/557999999999?text=Olá! vim pelo site, gostaria de agendar uma seção de cuidados para meu pet.">Entrar em contato</a></button>
      </div>

      <div className="image-header">
        <Image 
          src={"/gato.jpg"}
          alt="Imagem ilustrativa de um gato"
          width={400}
          height={200}
        />
      </div>

    </header>
  )
}