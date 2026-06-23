import { Metadata } from "next"

import Header from "@/components/header/page"
import Curiosidades from "@/components/curiosidades/page";
import Relatos from "@/components/relatos/page";
import Planos from "@/components/planos/page";
import Footer from "@/components/footer/page"

export const metadata:Metadata = {
  title: 'Petshop | Home',
  description: 'Página home do petshop, onde são oferecidos os nossos serviços e informações para contato'
}

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Curiosidades />
        <Relatos />
        <Planos />
      </main>
      <Footer />
    </div>
  );
}
