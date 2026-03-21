export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="main-content" className="pt-[clamp(7rem,14vh,10rem)] pb-[clamp(4rem,8vh,7rem)]">
      <div className="container">
        {children}
      </div>
    </div>
  )
}
