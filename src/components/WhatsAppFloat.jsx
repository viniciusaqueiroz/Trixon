import { FaWhatsapp } from 'react-icons/fa';
import './WhatsAppFloat.css';

const whatsappUrl =
  'https://wa.me/5532988757881?text=Olá!%20Gostaria%20de%20falar%20com%20um%20consultor%20da%20Trixon.';

export default function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Trixon pelo WhatsApp"
    >
      <span className="whatsapp-float__pulse" aria-hidden="true" />
      <span className="whatsapp-float__content">
        <FaWhatsapp aria-hidden="true" className="text-2xl" />
      </span>
    </a>
  );
}
