// Home page sections

const HeroA = ({ setRoute }) => {
  const { t } = useLang();
  return (
    <section className="hero v-editorial">
      <div className="hero-inner">
        <Eyebrow>{t('hero_eyebrow')}</Eyebrow>
        <h1 className="hero-h">
          {t('hero_title_a_pre')}<em>{t('hero_title_a_em')}</em>{t('hero_title_a_post')}
        </h1>
        <p className="hero-sub">{t('hero_sub_a')}</p>
        <div className="hero-ctas">
          <Button variant="primary" size="lg" onClick={()=>setRoute('/apoiar')}>{t('cta_support_long')}</Button>
          <Button variant="ghost-inverse" onClick={()=>setRoute('/povo')}>{t('cta_know_aldeia')}</Button>
        </div>
      </div>
      <img src="assets/logo-kroti-mark.svg" className="hero-feather" alt="" />
      <PatternBar height={20} invert />
    </section>
  );
};

const HeroB = ({ setRoute }) => {
  const { t } = useLang();
  return (
    <section className="hero v-split">
      <div className="hero-photo">
        <span className="hero-photo-caption">{t('hero_photo_caption')}</span>
      </div>
      <div className="hero-text">
        <Eyebrow>{t('hero_eyebrow')}</Eyebrow>
        <h1 className="hero-h">{t('hero_title_b')}</h1>
        <p className="hero-sub">{t('hero_sub_b')}</p>
        <div className="hero-ctas">
          <Button variant="primary" size="lg" onClick={()=>setRoute('/apoiar')}>{t('cta_support_long')}</Button>
          <Button variant="ghost" onClick={()=>setRoute('/povo')}>{t('cta_know_aldeia')}</Button>
        </div>
      </div>
    </section>
  );
};

const HeroC = ({ setRoute }) => {
  const { t } = useLang();
  return (
    <section className="hero v-pattern">
      <div className="hero-inner">
        <div className="hero-eyebrow">{t('hero_eyebrow_c')}</div>
        <h1 className="hero-h">
          {t('hero_title_c_line')}
          <em>{t('hero_title_c_em')}</em>
        </h1>
        <p className="hero-sub">{t('hero_sub_c')}</p>
        <div className="hero-ctas">
          <Button variant="primary" size="lg" onClick={()=>setRoute('/apoiar')}>{t('cta_support_long')}</Button>
          <Button variant="ghost-inverse" onClick={()=>setRoute('/povo')}>{t('cta_know_aldeia')}</Button>
        </div>
      </div>
    </section>
  );
};

const Hero = ({ variant, setRoute }) => {
  if (variant === 'split') return <HeroB setRoute={setRoute} />;
  if (variant === 'pattern') return <HeroC setRoute={setRoute} />;
  return <HeroA setRoute={setRoute} />;
};

const Stats = () => {
  const { t } = useLang();
  return (
    <section className="stats">
      {[1,2,3,4].map(i => (
        <div key={i} className="stat">
          <div className="stat-n">{t(`stat${i}_n`)}</div>
          <div className="stat-l">{t(`stat${i}_l`)}</div>
        </div>
      ))}
    </section>
  );
};

const StoryBand = ({ setRoute }) => {
  const { t } = useLang();
  return (
    <section className="story">
      <div className="story-media">
        <span className="placeholder-label">[ foto · retrato aldeia Kaprankere ]</span>
      </div>
      <div className="story-body">
        <Eyebrow>{t('story_eyebrow')}</Eyebrow>
        <h2>{t('story_title')}</h2>
        <p>{t('story_p1')}</p>
        <div className="story-pull">{t('story_pull')}</div>
        <p>{t('story_p2')}</p>
        <div style={{marginTop: 24}}>
          <Button variant="ghost" onClick={()=>setRoute('/povo')}>{t('cta_read_more')} <Icon name="arrow" size={14}/></Button>
        </div>
      </div>
    </section>
  );
};

const ProgramCard = ({ tag, title, body, meta }) => (
  <article className="program-card" tabIndex="0">
    <PatternBar height={14} />
    <div className="program-body">
      <Eyebrow>{tag}</Eyebrow>
      <h3>{title}</h3>
      <p>{body}</p>
      <div className="program-meta">{meta}</div>
    </div>
  </article>
);

const ProgramGrid = () => {
  const { t } = useLang();
  return (
    <section className="section">
      <div className="section-head">
        <Eyebrow>{t('programs_eyebrow')}</Eyebrow>
        <h2>{t('programs_title')}</h2>
      </div>
      <div className="program-grid">
        {[1,2,3,4].map(i => (
          <ProgramCard key={i}
            tag={t(`p${i}_tag`)} title={t(`p${i}_title`)}
            body={t(`p${i}_body`)} meta={t(`p${i}_meta`)} />
        ))}
      </div>
    </section>
  );
};

const Quote = () => {
  const { t } = useLang();
  return (
    <section className="quote-section">
      <PatternBar height={14} />
      <blockquote className="quote">
        <p>{t('quote')}</p>
        <cite>{t('quote_by')}</cite>
      </blockquote>
      <PatternBar height={14} />
    </section>
  );
};

Object.assign(window, { Hero, Stats, StoryBand, ProgramGrid, Quote });
