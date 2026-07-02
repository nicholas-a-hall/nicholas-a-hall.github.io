import './Footer.css'

export default function Footer({ name }) {
  const year = new Date().getFullYear()
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span>© {year} {name}</span>
        <span className="footer__built">
          Built with React + Vite. <a href="#top">Back to top ↑</a>
        </span>
      </div>
    </footer>
  )
}
