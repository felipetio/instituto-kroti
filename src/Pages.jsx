// Institutional pages — Sobre, Povo, Videos, Equipe, Transparência, Apoiar, Contato
import { useState } from 'react';
import { useLang, DICT } from './i18n.jsx';
import { Eyebrow, PatternBar, Placeholder, Icon, Button } from './Primitives.jsx';

// ---------------- Sobre ----------------
export const SobrePage = () => {
  const { t } = useLang();
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('sobre_eyebrow')}</Eyebrow>
        <h1>{t('sobre_title')}</h1>
        <p className="page-lead">{t('sobre_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body two-col">
        <div className="main">
          <h3>{t('sobre_h_mission')}</h3>
          <p>{t('sobre_mission')}</p>
          <h3>{t('sobre_h_vision')}</h3>
          <p>{t('sobre_vision')}</p>
          <h3>{t('sobre_h_values')}</h3>
          <ul>
            <li>{t('sobre_values_1')}</li>
            <li>{t('sobre_values_2')}</li>
            <li>{t('sobre_values_3')}</li>
            <li>{t('sobre_values_4')}</li>
            <li>{t('sobre_values_5')}</li>
          </ul>
          <h3>{t('sobre_h_history')}</h3>
          <p>{t('sobre_history_p1')}</p>
          <p>{t('sobre_history_p2')}</p>
        </div>
        <aside className="side">
          <Placeholder tone="jenipapo" ratio="4/5" label="[ foto · fundação do instituto, 2019 ]" style={{marginBottom: 16}} />
          <div className="side-card">
            <div className="side-head">CNPJ</div>
            <p style={{margin:0, fontFamily:'var(--font-body)', fontSize: 14}}>36.497.323/0001-80</p>
          </div>
          <div className="side-card">
            <div className="side-head">Sede</div>
            <p style={{margin:0, fontSize:14, whiteSpace:'pre-line'}}>{t('ct_addr')}</p>
          </div>
        </aside>
      </div>
    </article>
  );
};

// ---------------- Povo Mebêngôkre ----------------
export const PovoPage = () => {
  const { t, lang } = useLang();
  const gloss = DICT[lang].povo_glossary;
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('povo_eyebrow')}</Eyebrow>
        <h1>{t('povo_title')}</h1>
        <p className="page-lead">{t('povo_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body two-col">
        <div className="main">
          <Placeholder tone="urucum" ratio="16/9" label="[ foto · pinturas corporais com urucum e jenipapo ]" style={{marginBottom: 28}} />
          <h3>{t('povo_h_territory')}</h3>
          <p>{t('povo_territory')}</p>
          <h3>{t('povo_h_culture')}</h3>
          <p>{t('povo_culture')}</p>
          <h3>{t('povo_h_language')}</h3>
          <p>{t('povo_language')}</p>
        </div>
        <aside className="side">
          <div className="side-card">
            <div className="side-head">{t('povo_glossary_head')}</div>
            {gloss.map(([word, meaning]) => (
              <div key={word} style={{padding: '10px 0', borderBottom:'1px dashed var(--border)'}}>
                <div style={{fontFamily:'var(--font-display)', fontStyle:'italic', fontSize: 17, color:'var(--urucum-deep)'}}>{word}</div>
                <div style={{fontFamily:'var(--font-body)', fontSize: 13, color:'var(--fg-muted)', marginTop: 2}}>{meaning}</div>
              </div>
            ))}
          </div>
          <div className="side-card">
            <div className="side-head">Leituras</div>
            <a className="side-link"><Icon name="download" size={16}/><span>Cartilha bilíngue · 2024</span></a>
            <a className="side-link"><Icon name="download" size={16}/><span>Glossário mebêngôkre</span></a>
          </div>
        </aside>
      </div>
    </article>
  );
};

// ---------------- Vídeos ----------------
const VIDEO_TONES = ['jenipapo', 'urucum', 'argila', ''];
const VideoCard = ({ i }) => {
  const { t } = useLang();
  return (
    <article className="video-card" tabIndex="0">
      <div className="video-thumb">
        <Placeholder tone={VIDEO_TONES[(i-1)%4]} ratio="16/9" label={`[ vídeo ${i} ]`} style={{borderRadius: 0}} />
        <div className="play">
          <div className="play-circle"><Icon name="play" size={22} /></div>
        </div>
        <div className="video-duration">{t(`v${i}_dur`)}</div>
      </div>
      <div className="video-body">
        <h3>{t(`v${i}_title`)}</h3>
        <div className="video-meta">{t(`v${i}_meta`)}</div>
      </div>
    </article>
  );
};
export const VideosPage = () => {
  const { t } = useLang();
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('videos_eyebrow')}</Eyebrow>
        <h1>{t('videos_title')}</h1>
        <p className="page-lead">{t('videos_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body">
        <div className="video-grid">
          {[1,2,3,4].map(i => <VideoCard key={i} i={i} />)}
        </div>
      </div>
    </article>
  );
};

// ---------------- Equipe ----------------
const TEAM_GROUPS = {
  leadership: [1, 2, 3],
  executive:  [4],
  field:      [5, 6, 7, 8, 9],
};
const TEAM_TONES = ['urucum', 'jenipapo', 'argila', '', 'urucum', 'jenipapo', '', 'argila', 'urucum'];

const TeamCard = ({ i }) => {
  const { t } = useLang();
  return (
    <article className="team-card">
      <div className="team-photo">
        <Placeholder tone={TEAM_TONES[(i-1)%TEAM_TONES.length]} label={`[ retrato ${i} ]`} style={{borderRadius:0, height:'100%'}} />
      </div>
      <div className="team-body">
        <div className="team-name">{t(`t${i}_name`)}</div>
        <div className="team-role">{t(`t${i}_role`)}</div>
        <p className="team-bio">{t(`t${i}_bio`)}</p>
      </div>
    </article>
  );
};

export const EquipePage = () => {
  const { t } = useLang();
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('team_eyebrow')}</Eyebrow>
        <h1>{t('team_title')}</h1>
        <p className="page-lead">{t('team_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body">
        <div className="team-section-head">{t('team_leadership')}</div>
        <div className="team-grid">
          {TEAM_GROUPS.leadership.map(i => <TeamCard key={i} i={i} />)}
        </div>

        <div className="team-section-head">{t('team_executive')}</div>
        <div className="team-grid" style={{gridTemplateColumns: 'repeat(3, 1fr)'}}>
          {TEAM_GROUPS.executive.map(i => <TeamCard key={i} i={i} />)}
        </div>

        <div className="team-section-head">{t('team_field')}</div>
        <div className="team-grid">
          {TEAM_GROUPS.field.map(i => <TeamCard key={i} i={i} />)}
        </div>
      </div>
    </article>
  );
};

// ---------------- Transparência ----------------
export const TranspPage = () => {
  const { t } = useLang();
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('tr_eyebrow')}</Eyebrow>
        <h1>{t('tr_title')}</h1>
        <p className="page-lead">{t('tr_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body">
        <div className="figures">
          {[1,2,3,4].map(i => (
            <div key={i} className="fig">
              <div className="fig-n">{t(`tr_f${i}_n`)}</div>
              <div className="fig-l">{t(`tr_f${i}_l`)}</div>
            </div>
          ))}
        </div>
        <h3 style={{fontFamily:'var(--font-display)', fontWeight:600, fontSize:22, margin:'32px 0 14px', color:'var(--fg)'}}>{t('tr_docs')}</h3>
        <ul className="doclist">
          <li><Icon name="download" size={16}/><span>Relatório de Atividades — 2024</span><span className="doc-meta">PDF · 3,2 MB</span></li>
          <li><Icon name="download" size={16}/><span>Demonstrações financeiras — 2024</span><span className="doc-meta">PDF · 890 KB</span></li>
          <li><Icon name="download" size={16}/><span>Estatuto social</span><span className="doc-meta">PDF · 210 KB</span></li>
          <li><Icon name="download" size={16}/><span>Relatório de Atividades — 2023</span><span className="doc-meta">PDF · 2,7 MB</span></li>
          <li><Icon name="download" size={16}/><span>Demonstrações financeiras — 2023</span><span className="doc-meta">PDF · 810 KB</span></li>
        </ul>
      </div>
    </article>
  );
};

// ---------------- Apoiar ----------------
export const ApoiarPage = () => {
  const { t, lang } = useLang();
  const [amt, setAmt] = useState(120);
  const [freq, setFreq] = useState('monthly');
  const presets = [60, 120, 240, 600];
  const freqLabel = freq==='monthly'
    ? (lang==='pt' ? '/mês ' : '/mo ')
    : '';
  return (
    <article className="page apoiar">
      <div className="page-head">
        <Eyebrow>{t('ap_eyebrow')}</Eyebrow>
        <h1>{t('ap_title')}</h1>
        <p className="page-lead">{t('ap_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body two-col">
        <div className="main">
          <div className="freq-toggle">
            <button className={freq==='monthly'?'active':''} onClick={()=>setFreq('monthly')}>{t('ap_freq_monthly')}</button>
            <button className={freq==='once'?'active':''} onClick={()=>setFreq('once')}>{t('ap_freq_once')}</button>
          </div>
          <div className="amt-grid">
            {presets.map(p => (
              <button key={p} className={`amt ${amt===p?'active':''}`} onClick={()=>setAmt(p)}>
                <span className="amt-cur">R$</span><span className="amt-n">{p}</span>
              </button>
            ))}
            <div className="amt other">
              <span className="amt-cur">R$</span>
              <input type="number" value={amt} onChange={e=>setAmt(+e.target.value||0)} />
            </div>
          </div>
          <div className="form-grid">
            <label>{t('ap_name')}<input placeholder={lang==='pt'?'Como gostaria de ser chamado(a)':'How should we address you'} /></label>
            <label>{t('ap_email')}<input type="email" placeholder="seu@email.com" /></label>
            <label className="full">{t('ap_cpf')}<input placeholder={lang==='pt'?'Apenas números':'Numbers only'} /></label>
          </div>
          <Button variant="primary" size="lg" className="apoiar-cta">
            {freq==='monthly' ? t('ap_cta_monthly', {amt}) : t('ap_cta_once', {amt})}
          </Button>
          <p className="note">{t('ap_note')}</p>
        </div>
        <aside className="side">
          <div className="side-card impact">
            <div className="side-head">{t('ap_impact_head', {amt, freq: freqLabel})}</div>
            <ul>
              <li>{t('ap_impact_1')}</li>
              <li>{t('ap_impact_2')}</li>
              <li>{t('ap_impact_3')}</li>
            </ul>
          </div>
          <Placeholder tone="argila" ratio="4/3" label="[ foto · oficina artesanato ]" />
        </aside>
      </div>
    </article>
  );
};

// ---------------- Contato ----------------
export const ContatoPage = () => {
  const { t, lang } = useLang();
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: '', email: '', org: '', subject: 'general', message: '',
  });
  const update = (k, v) => setForm(f => ({...f, [k]: v}));
  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <article className="page">
      <div className="page-head">
        <Eyebrow>{t('ct_eyebrow')}</Eyebrow>
        <h1>{t('ct_title')}</h1>
        <p className="page-lead">{t('ct_lead')}</p>
      </div>
      <PatternBar height={14} />
      <div className="page-body">
        <div className="contact-layout">
          <div>
            {sent ? (
              <div className="sent-state">
                <div className="mark"><Icon name="check" size={24} /></div>
                <h3>{t('ct_sent_title')}</h3>
                <p>{t('ct_sent_sub')}</p>
                <div style={{marginTop: 20}}>
                  <Button variant="ghost" onClick={()=>{ setSent(false); setForm({ name:'', email:'', org:'', subject:'general', message:'' }); }}>
                    {lang==='pt'?'Enviar outra mensagem':'Send another message'}
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <div className="form-grid">
                  <label>{t('ct_form_name')}
                    <input required value={form.name} onChange={e=>update('name', e.target.value)} />
                  </label>
                  <label>{t('ct_form_email')}
                    <input required type="email" value={form.email} onChange={e=>update('email', e.target.value)} />
                  </label>
                  <label className="full">{t('ct_form_org')}
                    <input value={form.org} onChange={e=>update('org', e.target.value)} />
                  </label>
                  <label className="full">{t('ct_form_subject')}
                    <select value={form.subject} onChange={e=>update('subject', e.target.value)}>
                      <option value="general">{t('ct_form_subj_general')}</option>
                      <option value="press">{t('ct_form_subj_press')}</option>
                      <option value="partner">{t('ct_form_subj_partner')}</option>
                      <option value="donor">{t('ct_form_subj_donor')}</option>
                      <option value="research">{t('ct_form_subj_research')}</option>
                    </select>
                  </label>
                  <label className="full">{t('ct_form_msg')}
                    <textarea required rows={6}
                      value={form.message} onChange={e=>update('message', e.target.value)}
                      placeholder={t('ct_form_msg_ph')} />
                  </label>
                </div>
                <Button type="submit" variant="primary" size="lg" className="contact-cta">
                  {t('cta_send')} <Icon name="arrow" size={14} />
                </Button>
              </form>
            )}
          </div>
          <aside>
            <div className="contact-card">
              <h3>{t('ct_where')}</h3>
              <p style={{whiteSpace:'pre-line'}}>{t('ct_addr')}</p>
            </div>
            <div className="contact-card">
              <h3>{t('ct_channels')}</h3>
              <div className="row"><Icon name="mail" size={16}/><span>contato@institutokroti.org.br</span></div>
              <div className="row"><Icon name="phone" size={16}/><span>+55 94 99999-0000</span></div>
              <div className="row"><Icon name="globe" size={16}/><span>@institutokroti</span></div>
            </div>
            <div className="contact-card">
              <h3>{t('ct_hours')}</h3>
              <p style={{margin:0}}>{t('ct_hours_val')}</p>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
};
