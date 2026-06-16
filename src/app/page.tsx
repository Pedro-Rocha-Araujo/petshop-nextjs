import Header from "@/components/header/page"
import Curiosidades from "@/components/curiosidades/page";
import Relatos from "@/components/relatos/page";

export default function Home() {
  return (
    <div>
      <Header />
      <main>
        <Curiosidades />
        <Relatos />
      </main>
    </div>
  );
}
