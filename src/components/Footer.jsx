export default function Footer() {
  return (
    <footer id="footer" className="bg-gray-800 text-white py-10 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-sm">
        <div>
          <h4 className="font-bold mb-2">Contato</h4>
          <p>Email: contato@trixon.com.br</p>
          <p>Telefone: (00) 00000-0000</p>
        </div>
        <div>
          <h4 className="font-bold mb-2">Links rápidos</h4>
          <ul className="space-y-1">
            <li><a href="#servicos" className="hover:underline">Serviços</a></li>
            <li><a href="#sobre" className="hover:underline">Sobre</a></li>
            <li><a href="#beneficios" className="hover:underline">Benefícios</a></li>
            <li><a href="#depoimentos" className="hover:underline">Depoimentos</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-2">Créditos</h4>
          <p>© {new Date().getFullYear()} <span className="font-orbitron">Trixon</span> Todos os direitos reservados.</p>
          
        </div>
      </div>
      
    </footer>
  );
}
