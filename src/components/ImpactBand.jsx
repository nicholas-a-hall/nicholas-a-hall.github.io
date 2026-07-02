import './ImpactBand.css'

// A row of headline metrics, shown immediately under the hero so the strongest
// proof lands in the first screen instead of being buried in the timeline.
export default function ImpactBand({ metrics }) {
  if (!metrics || metrics.length === 0) return null
  return (
    <section className="impact" aria-label="Impact by the numbers">
      <div className="container impact__grid">
        {metrics.map((m) => (
          <div key={m.label} className="impact__item reveal">
            <div className="impact__value">{m.value}</div>
            <div className="impact__label">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
