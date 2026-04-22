import { useState, useEffect } from 'react';
import { LangProvider } from './i18n.jsx';
import { Header, Footer } from './Chrome.jsx';
import { Hero, Stats, StoryBand, ProgramGrid, Quote } from './Home.jsx';
import { SobrePage, PovoPage, VideosPage, EquipePage, TranspPage, ApoiarPage, ContatoPage } from './Pages.jsx';
import { Icon } from './Primitives.jsx';

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "heroVariant": "pattern",
  "dark": false,
  "lang": "pt"
}/*EDITMODE-END*/;

function useHash() {
  const [h, setH] = useState(window.location.hash.replace(/^#/, '') || '/');
  useEffect(() => {
    const on = () => setH(window.location.hash.replace(/^#/, '') || '/');
    window.addEventListener('hashchange', on);
    return () => window.removeEventListener('hashchange', on);
  }, []);
  const go = (r) => {
    window.location.hash = r;
    setH(r);
    window.scrollTo({top:0, behavior:'instant'});
  };
  return [h, go];
}

function TweaksPanel({ visible, heroVariant, setHeroVariant, lang, setLang, dark, setDark }) {
  if (!visible) return null;
  return (
    <div className="tweaks">
      <h4>Tweaks</h4>
      <div className="tweak-row">
        <label className="tweak-label">Hero (home)</label>
        <div className="seg">
          {[['editorial','Editorial'],['split','Split'],['pattern','Padrão']].map(([v,l]) => (
            <button key={v} className={heroVariant===v?'active':''} onClick={()=>setHeroVariant(v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Idioma</label>
        <div className="seg">
          {[['pt','PT'],['en','EN']].map(([v,l]) => (
            <button key={v} className={lang===v?'active':''} onClick={()=>setLang(v)}>{l}</button>
          ))}
        </div>
      </div>
      <div className="tweak-row">
        <label className="tweak-label">Tema</label>
        <div className="seg">
          {[[false,'Claro'],[true,'Escuro']].map(([v,l]) => (
            <button key={String(v)} className={dark===v?'active':''} onClick={()=>setDark(v)}>{l}</button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [route, setRoute] = useHash();
  const [lang, setLangState]   = useState(TWEAK_DEFAULTS.lang);
  const [dark, setDarkState]   = useState(TWEAK_DEFAULTS.dark);
  const [heroVariant, setHVState] = useState(TWEAK_DEFAULTS.heroVariant);
  const [tweaksOn, setTweaksOn] = useState(false);

  // apply dark class
  useEffect(() => {
    document.body.classList.toggle('dark', !!dark);
  }, [dark]);

  // --- Tweaks protocol: register listener FIRST, then announce availability
  useEffect(() => {
    const onMsg = (e) => {
      const d = e.data;
      if (!d || typeof d !== 'object') return;
      if (d.type === '__activate_edit_mode') setTweaksOn(true);
      if (d.type === '__deactivate_edit_mode') setTweaksOn(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({ type: '__edit_mode_available' }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);

  const persist = (key, value) => {
    window.parent.postMessage({ type: '__edit_mode_set_keys', edits: { [key]: value } }, '*');
  };
  const setLang = (v) => { setLangState(v); persist('lang', v); };
  const setDark = (v) => { setDarkState(v); persist('dark', v); };
  const setHeroVariant = (v) => { setHVState(v); persist('heroVariant', v); };

  let page;
  if (route === '/') {
    page = (
      <>
        <Hero variant={heroVariant} setRoute={setRoute} />
        <Stats />
        <StoryBand setRoute={setRoute} />
        <ProgramGrid />
        <Quote />
      </>
    );
  }
  else if (route === '/sobre') page = <SobrePage />;
  else if (route === '/povo') page = <PovoPage />;
  else if (route === '/videos') page = <VideosPage />;
  else if (route === '/equipe') page = <EquipePage />;
  else if (route === '/transparencia') page = <TranspPage />;
  else if (route === '/apoiar') page = <ApoiarPage />;
  else if (route === '/contato') page = <ContatoPage />;
  else page = <div className="page"><h1>Página não encontrada</h1></div>;

  const screenLabel = {
    '/':'Home',
    '/sobre':'Sobre',
    '/povo':'Povo Mebêngôkre',
    '/videos':'Vídeos',
    '/equipe':'Equipe',
    '/transparencia':'Transparência',
    '/apoiar':'Apoiar',
    '/contato':'Contato',
  }[route] || 'Página';

  return (
    <LangProvider lang={lang}>
      <Header route={route} setRoute={setRoute}
              lang={lang} setLang={setLang}
              dark={dark} setDark={setDark} />
      <main data-screen-label={screenLabel}>{page}</main>
      <Footer setRoute={setRoute} />
      <TweaksPanel visible={tweaksOn}
        heroVariant={heroVariant} setHeroVariant={setHeroVariant}
        lang={lang} setLang={setLang}
        dark={dark} setDark={setDark} />
    </LangProvider>
  );
}
