// Site header + footer
import { useLang } from './i18n.jsx';
import { FooterLogo } from './FooterLogo.jsx';
import { PatternBar, Icon, Button } from './Primitives.jsx';

const NAV = [
  ['/', 'nav_institute'],
  ['/povo', 'nav_people'],
  ['/videos', 'nav_videos'],
  ['/equipe', 'nav_team'],
  ['/transparencia', 'nav_transp'],
  ['/contato', 'nav_contact'],
];

export const Header = ({ route, setRoute, lang, setLang, dark, setDark }) => {
  const { t } = useLang();
  return (
    <>
      <header className="site-header">
        <a className="brand" href="#/" onClick={e=>{e.preventDefault(); setRoute('/');}}>
          <img src="assets/logo-kroti.svg" alt="Instituto Kroti Kayapó" />
        </a>
        <nav className="site-nav">
          {NAV.map(([href, key]) => (
            <a key={href} href={'#'+href}
               className={route===href ? 'active':''}
               onClick={e=>{e.preventDefault(); setRoute(href);}}>
              {t(key)}
            </a>
          ))}
        </nav>
        <div className="header-tools">
          <button
            className="lang-toggle"
            onClick={()=>setLang(lang==='pt'?'en':'pt')}
            title={lang==='pt' ? 'Switch to English' : 'Mudar para Português'}
            aria-label="Language toggle"
          >
            <span className={lang==='pt'?'active-lang':''}>PT</span>
            <span className="sep">/</span>
            <span className={lang==='en'?'active-lang':''}>EN</span>
          </button>
          <button
            className="icon-btn"
            onClick={()=>setDark(!dark)}
            title={dark ? 'Modo claro' : 'Modo escuro'}
            aria-label="Toggle dark mode"
          >
            <Icon name={dark?'sun':'moon'} size={16} />
          </button>
          <Button variant="primary" size="sm" onClick={()=>setRoute('/apoiar')}>
            {t('cta_support')}
          </Button>
        </div>
      </header>
      <PatternBar height={10} />
    </>
  );
};

export const Footer = ({ setRoute }) => {
  const { t } = useLang();
  return (
    <footer className="site-footer">
      <PatternBar height={14} invert />
      <div className="footer-inner">
        <div className="col">
          <FooterLogo className="footer-logo-svg" />
          <p className="footer-addr" style={{whiteSpace:'pre-line'}}>{t('ct_addr')}</p>
        </div>
        <div className="col">
          <div className="footer-head">{t('f_institute')}</div>
          <a onClick={()=>setRoute('/')}>{t('nav_institute')}</a>
          <a onClick={()=>setRoute('/povo')}>{t('nav_people')}</a>
          <a onClick={()=>setRoute('/equipe')}>{t('nav_team')}</a>
          <a onClick={()=>setRoute('/contato')}>{t('nav_contact')}</a>
        </div>
        <div className="col">
          <div className="footer-head">{t('f_action')}</div>
          <a>{t('p1_tag')}</a>
          <a>{t('p2_tag')}</a>
          <a>{t('p3_tag')}</a>
          <a>{t('p4_tag')}</a>
        </div>
        <div className="col">
          <div className="footer-head">{t('f_transp')}</div>
          <a onClick={()=>setRoute('/transparencia')}>{t('tr_docs')}</a>
          <a onClick={()=>setRoute('/videos')}>{t('nav_videos')}</a>
          <a onClick={()=>setRoute('/apoiar')}>{t('cta_support_long')}</a>
          <div className="cnpj">CNPJ 36.497.323/0001-80</div>
        </div>
      </div>
      <div className="footer-rule">{t('f_copy')}</div>
    </footer>
  );
};
