// Primitives: Button, Badge, Eyebrow, PatternBar, Icon, Placeholder, MbkWord

const Button = ({ variant='primary', size='md', children, ...p }) => (
  <button {...p} className={`btn btn-${variant} btn-${size} ${p.className||''}`}>{children}</button>
);

const Badge = ({ tone='soft', children }) => (
  <span className={`badge badge-${tone}`}>{children}</span>
);

const Eyebrow = ({ children }) => <div className="eyebrow">{children}</div>;

const PatternBar = ({ height=14, invert=false }) => (
  <div className={`pattern-bar ${invert?'inv':''}`} style={{ height, backgroundSize: `auto ${height}px` }} />
);

// Warm, obvious placeholder for images. `tone` picks the gradient family,
// `label` is the caption rendered in the center.
const Placeholder = ({ tone='', label='Imagem', ratio, style, className='' }) => (
  <div className={`placeholder ${tone} ${className}`} style={{ aspectRatio: ratio, ...style }}>
    <span className="p-label">{label}</span>
  </div>
);

// Inline Mebêngôkre word, with translation on hover (title attr)
const Mbk = ({ children, translate }) => (
  <span className="mbk" title={translate || ''}>{children}</span>
);

const Icon = ({ name, size=20 }) => {
  const paths = {
    home: 'M3 9l9-7 9 7v11a2 2 0 01-2 2h-4v-7H9v7H5a2 2 0 01-2-2V9z',
    heart: 'M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z',
    arrow: 'M5 12h14M13 5l7 7-7 7',
    chev:  'M9 18l6-6-6-6',
    pin:   'M12 22s8-6 8-12a8 8 0 10-16 0c0 6 8 12 8 12zM12 10a2.5 2.5 0 100-5 2.5 2.5 0 000 5z',
    mail:  'M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zM22 8l-10 7L2 8',
    phone: 'M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.13.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0122 16.92z',
    calendar: 'M7 2v3M17 2v3M3 8h18M5 5h14a2 2 0 012 2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2z',
    download: 'M12 4v12M6 10l6 6 6-6M4 20h16',
    leaf: 'M4 20c8 0 14-4 14-14 0 0-10 0-14 8-2 4 0 6 0 6zM4 20c4-8 10-10 14-10',
    users: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75',
    play: 'M8 5v14l11-7z',
    sun: 'M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42M12 7a5 5 0 100 10 5 5 0 000-10z',
    moon: 'M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z',
    check: 'M20 6L9 17l-5-5',
    globe: 'M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z',
  };
  const d = paths[name] || paths.arrow;
  // play icon needs fill, not stroke
  if (name === 'play') {
    return (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d={d} />
      </svg>
    );
  }
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
         strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={d} />
    </svg>
  );
};

Object.assign(window, { Button, Badge, Eyebrow, PatternBar, Icon, Placeholder, Mbk });
