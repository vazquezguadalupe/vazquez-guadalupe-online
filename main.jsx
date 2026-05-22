import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { Search, Menu, Clock, User, ChevronRight, Mail, Home, PlayCircle } from "lucide-react";
import "./styles.css";

const articles = [
  {
    id: 1,
    category: "Procesos de Venta",
    title: "El proceso de venta que sí funciona",
    excerpt: "Una guía clara para que cada vendedor sepa qué hacer desde el primer contacto hasta el cierre.",
    author: "Vázquez Guadalupe",
    date: "22 mayo 2026",
    read: "6 min",
    image: "https://images.unsplash.com/photo-1560472355-536de3962603?auto=format&fit=crop&w=1400&q=80",
    body: "Un buen proceso de venta no limita al vendedor; lo guía. Desde el saludo inicial, la investigación de necesidades, la presentación del producto, la demostración, la negociación y el cierre, cada etapa debe tener intención. Cuando el equipo domina el proceso, deja de improvisar y comienza a vender con estructura."
  },
  {
    id: 2,
    category: "Hospitalidad al Invitado",
    title: "Hospitalidad que genera lealtad y recomendaciones",
    excerpt: "Cómo crear una experiencia memorable desde el primer contacto con el cliente.",
    author: "Vázquez Guadalupe",
    date: "21 mayo 2026",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1200&q=80",
    body: "La hospitalidad no es solo ser amable. Es hacer que el invitado se sienta esperado, atendido y respetado. En el mundo automotriz, esto comienza antes de que el cliente llegue al dealer y continúa después de la entrega."
  },
  {
    id: 3,
    category: "Persuasión",
    title: "Persuasión ética para aumentar tus cierres",
    excerpt: "Principios prácticos para influir positivamente sin presionar ni manipular.",
    author: "Luis Vázquez",
    date: "20 mayo 2026",
    read: "4 min",
    image: "https://images.unsplash.com/photo-1556741533-6e6a62bd8b49?auto=format&fit=crop&w=1200&q=80",
    body: "Persuadir no es empujar al cliente. Es ayudarlo a ver con claridad por qué una decisión hace sentido para su situación. La persuasión efectiva nace de escuchar, validar, preguntar mejor y presentar valor."
  },
  {
    id: 4,
    category: "Mindset del Cliente",
    title: "Mentalidad del cliente: piensa como él",
    excerpt: "Entiende sus miedos, expectativas, dudas y motivaciones antes de intentar cerrar.",
    author: "Vázquez Guadalupe",
    date: "19 mayo 2026",
    read: "4 min",
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    body: "El cliente no llega pensando como vendedor. Llega con dudas, experiencias previas, miedo a pagar de más y deseo de sentirse seguro. Cuando el vendedor entiende ese mindset, puede adaptar su comunicación."
  },
  {
    id: 5,
    category: "Objeciones",
    title: "Cómo manejar objeciones sin perder la venta",
    excerpt: "Convierte objeciones en oportunidades para aclarar, educar y avanzar.",
    author: "Vázquez Guadalupe",
    date: "18 mayo 2026",
    read: "5 min",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1200&q=80",
    body: "Una objeción no siempre significa rechazo. Muchas veces significa que el cliente necesita más claridad, más seguridad o una razón más fuerte para avanzar."
  },
  {
    id: 6,
    category: "Seguimiento",
    title: "La disciplina del follow up profesional",
    excerpt: "El seguimiento no es perseguir clientes. Es acompañarlos con intención y consistencia.",
    author: "Luis Vázquez",
    date: "17 mayo 2026",
    read: "3 min",
    image: "https://images.unsplash.com/photo-1553484771-047a44eee27b?auto=format&fit=crop&w=1200&q=80",
    body: "El follow up profesional es una de las áreas donde más ventas se pierden. Un buen sistema combina CRM, llamadas, mensajes, valor y seguimiento humano."
  }
];

const categories = ["Procesos de Venta", "Hospitalidad al Invitado", "Persuasión", "Mindset del Cliente", "Recursos", "Opinión"];

function App() {
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [activeCategory, setActiveCategory] = useState("Inicio");
  const featured = articles[0];
  const topGrid = articles.slice(1, 5);
  const recent = articles.slice(2);

  if (selectedArticle) {
    return (
      <div className="site">
        <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} onHome={() => setSelectedArticle(null)} />
        <main className="article-page">
          <button onClick={() => setSelectedArticle(null)} className="back-button">← Volver a portada</button>
          <p className="tag">{selectedArticle.category}</p>
          <h1 className="article-title">{selectedArticle.title}</h1>
          <div className="meta">
            <span><User size={16} /> {selectedArticle.author}</span>
            <span><Clock size={16} /> {selectedArticle.read}</span>
            <span>{selectedArticle.date}</span>
          </div>
          <img src={selectedArticle.image} alt={selectedArticle.title} className="article-image" />
          <article className="article-body">
            <p>{selectedArticle.body}</p>
            <p>Este artículo puede convertirse en una pieza completa de entrenamiento con ejemplos, scripts, ejercicios para vendedores, preguntas de coaching y puntos de discusión para reuniones de ventas.</p>
          </article>
        </main>
      </div>
    );
  }

  return (
    <div className="site">
      <Header activeCategory={activeCategory} setActiveCategory={setActiveCategory} onHome={() => setSelectedArticle(null)} />
      <main className="home">
        <section className="hero-grid">
          <button onClick={() => setSelectedArticle(featured)} className="hero-card large">
            <img src={featured.image} alt={featured.title} />
            <div className="overlay" />
            <div className="card-copy">
              <p className="tag">{featured.category}</p>
              <h1>{featured.title}</h1>
              <p>{featured.excerpt}</p>
              <span>{featured.date} • {featured.read}</span>
            </div>
          </button>
          <div className="small-grid">
            {topGrid.map((article) => (
              <button key={article.id} onClick={() => setSelectedArticle(article)} className="hero-card small">
                <img src={article.image} alt={article.title} />
                <div className="overlay" />
                <div className="card-copy">
                  <p className="tag">{article.category}</p>
                  <h2>{article.title}</h2>
                  <p>{article.excerpt}</p>
                </div>
              </button>
            ))}
          </div>
        </section>

        <section className="section-title">
          <h2>Artículos recientes</h2>
          <button>Ver todos <ChevronRight size={18} /></button>
        </section>

        <section className="recent-grid">
          {recent.map((article) => (
            <button key={article.id} onClick={() => setSelectedArticle(article)} className="recent-card">
              <img src={article.image} alt={article.title} />
              <div>
                <p className="tag">{article.category}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <span><Clock size={14} /> {article.read}</span>
              </div>
            </button>
          ))}
        </section>

        <section className="newsletter">
          <div className="newsletter-icon"><Mail size={32} /></div>
          <div>
            <h3>Suscríbete al newsletter</h3>
            <p>Recibe contenido de ventas, hospitalidad, persuasión y mindset directamente en tu correo.</p>
          </div>
          <div className="newsletter-form">
            <input placeholder="Tu correo electrónico" />
            <button>Suscribirme</button>
          </div>
        </section>
      </main>
    </div>
  );
}

function Header({ activeCategory, setActiveCategory, onHome }) {
  return (
    <header className="header">
      <div className="topbar">
        <button onClick={onHome} className="brand">
          <img src="/logo.png" alt="Vázquez Guadalupe logo" onError={(e) => e.currentTarget.style.display='none'} />
          <div>
            <p>VÁZQUEZ</p>
            <span>GUADALUPE</span>
          </div>
        </button>
        <div className="social"><span>f</span><span>◎</span><span>▶</span><Search size={22} /></div>
        <button className="mobile"><Menu size={24} /></button>
      </div>
      <nav className="nav">
        <button onClick={onHome} className="home-btn"><Home size={22} /></button>
        {categories.map((category) => (
          <button key={category} onClick={() => setActiveCategory(category)} className={activeCategory === category ? "active" : ""}>{category}</button>
        ))}
        <button className="video"><PlayCircle size={18} /> Videos</button>
      </nav>
    </header>
  );
}

createRoot(document.getElementById("root")).render(<App />);
