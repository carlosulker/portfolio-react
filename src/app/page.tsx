import Link from "next/link";
export default function Home() {
  return (
    <>  
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="flex flex-col items-center justify-center w-full flex-1 px-20 text-ceter">
        <h1 className="text-6xl">Bem Vindo ao meu <span className="text-blue-600">Portfólio!</span> </h1>
        <p className="mt-3 text-2xl">
          Comece a construir o seu portfólio profissional hoje!
        </p>
      <div className="flex flex-wrap items-center justify-around max-w-4xl mt-6 sm:w-full">
        <Link href="/portfolio" className="p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600"> 
          <h2 className="text-2xl font-semibold">Ver Portfólio</h2>
          <p className="mt-4 text-xl">Explore os projetos e trabalhos realizados.</p>
          </Link>
        <Link href="admin" className="p-6 mt-6 text-left border rounded-xl hover:text-blue-600 focus:text-blue-600">
          <h2 className="text-2xl font-semibold">Área Administrativa</h2>
          <p className="mt-4 text-xl">Gerencie seu portfólio (requer login).</p>
        </Link>
      </div>
      </section>
      <section>
        <div className="w-full px-20 bg-secondary">
          <h2 className="text-4xl font-bold mb-4">Sobre o Projeto</h2>
          <p className="text-xl mb-4">
            Sou uma pessoa apaixonada por criar, aprender e transformar ideias em resultados concretos. Tenho experiência em
             Analista de TI e busco sempre unir técnica e criatividade para entregar projetos com propósito e impacto.
          </p>
          <p className="text-xl">
            Cada projeto aqui conta uma parte da minha jornada — ideias que se tornaram realidade, desafios que inspiraram 
            soluções e criações que refletem minha forma de ver o mundo. Explore, descubra e conheça mais sobre o meu processo e minhas inspirações.
          </p>
        </div>
      </section>
    </div>
    </>
  );
}
