export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-white shadow z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
       <h1
  className="text-2xl md:text-4xl font-orbitron font-extrabold tracking-tight 
             bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 
             bg-clip-text text-transparent animate-gradient"
>
  Trixon
</h1>

        <nav className="space-x-4 hidden md:flex">
          <a href="#servicos" className="text-secondary hover:text-primary">Serviços</a>
          <a href="#sobre" className="text-secondary hover:text-primary">Sobre</a>
          <a href="#beneficios" className="text-secondary hover:text-primary">Benefícios</a>
          <a href="#depoimentos" className="text-secondary hover:text-primary">Depoimentos</a>
        </nav>
        <a href="#cta" className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-800 transition">Solicitar consultoria</a>
      </div>
    </header>
  );
}
