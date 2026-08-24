import { motion } from 'framer-motion';

const services=['Customer Experience','Call Center Solutions','Nearshoring','Technical Support','Back Office','Sales Operations'];
const stats=['500+ Profesionales','20+ Países','99% Satisfacción','24/7 Operaciones'];

export default function Home(){
return <main className="min-h-screen bg-slate-50 text-slate-900">
<nav className="sticky top-0 z-10 backdrop-blur bg-white/70 p-6 flex justify-between"><b className="text-2xl text-blue-900">NESUS</b><button className="bg-blue-700 text-white px-5 py-3 rounded-full">Solicitar propuesta</button></nav>
<section className="px-8 py-24 max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
<motion.div initial={{opacity:0,y:40}} animate={{opacity:1,y:0}}><h1 className="text-5xl md:text-7xl font-bold text-blue-950">Transformamos operaciones empresariales con talento global y tecnología inteligente</h1><p className="mt-8 text-xl text-slate-600">Soluciones BPO, customer experience y outsourcing diseñadas para empresas que buscan crecer.</p><div className="mt-8 flex gap-4"><button className="bg-blue-700 text-white px-7 py-4 rounded-xl">Solicitar propuesta</button><button className="border px-7 py-4 rounded-xl">Trabaja con nosotros</button></div></motion.div>
<div className="rounded-3xl bg-gradient-to-br from-blue-100 to-white h-96 flex items-center justify-center"><span className="text-blue-700 text-xl">Global Operations</span></div>
</section>
<section className="grid grid-cols-2 md:grid-cols-4 gap-5 px-8">{stats.map(x=><div className="bg-white p-8 rounded-3xl shadow" key={x}>{x}</div>)}</section>
<section className="px-8 py-20 max-w-7xl mx-auto"><h2 className="text-4xl font-bold">Nuestros servicios</h2><div className="grid md:grid-cols-3 gap-6 mt-10">{services.map(s=><div className="bg-white rounded-3xl p-8 shadow hover:-translate-y-2 transition" key={s}><h3 className="text-xl font-bold text-blue-900">{s}</h3><p className="mt-4">Equipos especializados para operaciones internacionales escalables.</p></div>)}</div></section>
<footer className="bg-blue-950 text-white p-10">NESUS Global BPO · Servicios internacionales de outsourcing</footer>
</main>}
