export default function CTA() {
  return (
    <section
      id="cta"
      className="relative z-0 py-20 bg-gradient-to-r from-blue-800 via-blue-900 to-blue-900 text-white text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-12 w-12 text-white-400"
          >
            <path
              fillRule="evenodd"
              d="M2.25 2.25a.75.75 0 0 0 0 1.5H3v10.5a3 3 0 0 0 3 3h1.21l-1.172 3.513a.75.75 0 0 0 1.424.474l.329-.987h8.418l.33.987a.75.75 0 0 0 1.422-.474l-1.17-3.513H18a3 3 0 0 0 3-3V3.75h.75a.75.75 0 0 0 0-1.5H2.25Zm6.54 15h6.42l.5 1.5H8.29l.5-1.5Zm8.085-8.995a.75.75 0 1 0-.75-1.299 12.81 12.81 0 0 0-3.558 3.05L11.03 8.47a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l2.47-2.47 1.617 1.618a.75.75 0 0 0 1.146-.102 11.312 11.312 0 0 1 3.612-3.321Z"
              clipRule="evenodd"
            />
          </svg>

          <h2 className="text-3xl md:text-4xl font-bold">
            Vamos acelerar a transformação digital da sua empresa?
          </h2>
          <p className="text-lg text-blue-100 max-w-2xl">
            Chega de soluções improvisadas. Tenha uma infraestrutura segura, escalável e com suporte de verdade.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href="#contato"
              className="bg-white text-primary font-semibold px-6 py-3 rounded hover:bg-gray-200 transition duration-300"
            >
              Solicitar orçamento
            </a>
            <a
              href="https://wa.me/5532988757881?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20Trixon."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white font-semibold px-6 py-3 rounded hover:bg-green-600 transition duration-300"
            >
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
