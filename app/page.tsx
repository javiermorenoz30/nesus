export default function Home() {
  const services = [
    'Customer Experience',
    'Call Center Solutions',
    'Nearshoring',
    'Technical Support',
    'Back Office',
    'Sales Operations'
  ]

  const stats = ['500+ Profesionales', '20+ Países atendidos', '99% Satisfacción', '24/7 Operaciones']

  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <div className="text-2xl font-bold text-blue-900">NESUS</div>
          <div className="hidden gap-8 md:flex text-sm font-medium">
            <span>Servicios</span><span>Soluciones</span><span>Nosotros</span><span>Clientes</span><span>Carreras</span>
          </div>
          <button className="rounded-full bg-blue-700 px-5 py-3 text-white">Solicitar propuesta</button>
        </nav>
      </header>

      <section className="mx-auto grid max-w-7xl gap-12 px-6 py-24 md:grid-cols-2 md:items-center">
        <div>
          <p className="mb-5 font-semibold text-blue-600">GLOBAL BPO & DIGITAL SOLUTIONS</p>
          <h1 className="text-5xl font-bold leading-tight md:text-7xl">Transformamos operaciones empresariales con talento global y tecnología inteligente</h1>
          <p className="mt-8 text-xl text-slate-600">Soluciones BPO, customer experience y outsourcing diseñadas para empresas que buscan crecer y escalar operaciones internacionales.</p>
          <div className="mt-10 flex gap-4">
            <button className="rounded-full bg-blue-700 px-7 py-4 text-white">Solicitar propuesta</button>
            <button className="rounded-full border px-7 py-4">Trabaja con nosotros</button>
          </div>
        </div>
        <div className="rounded-3xl bg-gradient-to-br from-blue-900 to-blue-500 p-10 text-white shadow-2xl">
          <div className="grid gap-5 sm:grid-cols-2">{stats.map(s=><div key={s} className="rounded-2xl bg-white/15 p-6 backdrop-blur">{s}</div>)}</div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-4xl font-bold">Nuestros servicios</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">{services.map(x=><article key={x} className="rounded-3xl bg-white p-8 shadow-sm"><h3 className="text-xl font-semibold">{x}</h3><p className="mt-3 text-slate-600">Equipos especializados y soluciones escalables para empresas internacionales.</p></article>)}</div>
      </section>

      <footer className="bg-blue-950 px-6 py-12 text-white"><div className="mx-auto max-w-7xl">NESUS Global Operations · BPO · Outsourcing · Digital Solutions</div></footer>
    </main>
  )
}
