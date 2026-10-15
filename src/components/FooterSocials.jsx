import { FaLinkedinIn, FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import './FooterSocials.css';

// Preencher com os perfis oficiais; destinos desconhecidos ficam desabilitados.
const networks = [
  { name: 'LinkedIn', icon: FaLinkedinIn, href: '', tone: 'linkedin' },
  { name: 'Instagram', icon: FaInstagram, href: '', tone: 'instagram' },
  { name: 'Facebook', icon: FaFacebookF, href: '', tone: 'facebook' },
  { name: 'X', icon: FaXTwitter, href: '', tone: 'x' },
];

export default function FooterSocials() {
  return (
    <div className="mt-6">
      <p className="mb-3 font-semibold text-slate-200">Redes sociais</p>
      <ul className="footer-socials" aria-label="Redes sociais da Trixon">
        {networks.map(({ name, icon: Icon, href, tone }) => {
          const Tag = href ? 'a' : 'span';
          return (
            <li key={name}>
              <Tag
                className={`footer-social footer-social--${tone}`}
                {...(href
                  ? { href, target: '_blank', rel: 'noopener noreferrer', 'aria-label': `Trixon no ${name} (abre em nova aba)` }
                  : { tabIndex: 0, 'aria-disabled': true, 'aria-label': `${name}: perfil em breve` })}
              >
                <Icon aria-hidden="true" size={20} />
                <span className="footer-social__label" aria-hidden="true">{name}</span>
              </Tag>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
