const ITEMS = [
  'Reserving 2027 capacity',
  'Sovereign by design',
  'EU jurisdiction',
  'Groningen, NL',
  'Industrial grade compute',
  'Training · Inference · HPC',
]

export function Ticker() {
  // Duplicate the track so the -50% translate loops seamlessly.
  const track = [...ITEMS, ...ITEMS]
  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker__track">
        {track.map((item, i) => (
          <span className="ticker__item" key={i}>
            {item}
            <span className="ticker__dot">·</span>
          </span>
        ))}
      </div>
    </div>
  )
}
