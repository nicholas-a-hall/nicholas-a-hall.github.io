// Reusable section shell: handles the id (for nav anchors), the kicker/title/
// intro header block, and the scroll-reveal wrapper. Every section uses it so
// spacing and headings stay consistent.
export default function Section({ id, kicker, title, intro, children, tight = false }) {
  return (
    <section id={id} className={`section${tight ? ' section--tight' : ''}`}>
      <div className="container">
        {(kicker || title || intro) && (
          <header className="reveal">
            {kicker && <div className="section-kicker">{kicker}</div>}
            {title && <h2 className="section-title">{title}</h2>}
            {intro && <p className="section-intro">{intro}</p>}
          </header>
        )}
        {children}
      </div>
    </section>
  )
}
