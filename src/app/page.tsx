import Header from "@/components/header/page"
import Curiosidades from "@/components/curiosidades/page";
import Relatos from "@/components/relatos/page";
import Planos from "@/components/planos/page";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Curiosidades />
        <Relatos />
        <Planos />
      </main>
    </div>
  );
}
