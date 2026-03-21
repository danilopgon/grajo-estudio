export function Footer() {
  return (
    <footer
      role="contentinfo"
      className="bg-black py-8 text-center text-xs text-cream/50"
    >
      <div className="container">
        <p>
          © {new Date().getFullYear()} Grajo Estudio — Código con alma. Cuenca.
        </p>
      </div>
    </footer>
  )
}
