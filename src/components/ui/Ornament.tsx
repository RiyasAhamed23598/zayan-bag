interface OrnamentProps {
  light?: boolean;
  className?: string;
}

/** Traditional gold divider: lines flanking a lotus with diamonds. */
const Ornament = ({ light = false, className = '' }: OrnamentProps) => {
  const gold = light ? '#e0ab2b' : '#c9921a';
  return (
    <div className={`flex items-center justify-center gap-3 ${className}`} aria-hidden="true">
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to right, transparent, ${gold})` }} />
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0 L10 5 L5 10 L0 5 Z" fill={gold} /></svg>
      <svg width="40" height="24" viewBox="0 0 40 24" fill="none">
        <path d="M20 2 C24 8 24 14 20 20 C16 14 16 8 20 2 Z" fill={gold} />
        <path d="M20 20 C14 18 10 13 9 7 C14 9 18 13 20 20 Z" fill={gold} fillOpacity="0.75" />
        <path d="M20 20 C26 18 30 13 31 7 C26 9 22 13 20 20 Z" fill={gold} fillOpacity="0.75" />
        <path d="M20 20 C12 21 6 18 2 13 C9 13 15 15 20 20 Z" fill={gold} fillOpacity="0.5" />
        <path d="M20 20 C28 21 34 18 38 13 C31 13 25 15 20 20 Z" fill={gold} fillOpacity="0.5" />
        <path d="M10 22 H30" stroke={gold} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <svg width="10" height="10" viewBox="0 0 10 10"><path d="M5 0 L10 5 L5 10 L0 5 Z" fill={gold} /></svg>
      <span className="h-px w-12 sm:w-20" style={{ background: `linear-gradient(to left, transparent, ${gold})` }} />
    </div>
  );
};

export default Ornament;
