export default function StampBadge({ text }) {
  return (
    <div className="stamp-badge" role="status">
      <svg viewBox="0 0 140 140" className="stamp-badge__ring" aria-hidden="true">
        <circle cx="70" cy="70" r="63" />
        <circle cx="70" cy="70" r="54" />
      </svg>
      <span className="stamp-badge__text">{text}</span>
    </div>
  );
}
