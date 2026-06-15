import "./header.css"
import Image from "next/image"

export default function Header() {
  return (
    <header>

      <div className="main-header">
        <i className="fa-solid fa-paw"></i>
        <h1>Petshop</h1>
        <button>Entrar em contato</button>
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