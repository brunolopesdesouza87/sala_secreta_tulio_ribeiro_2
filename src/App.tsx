/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Video, Calendar, ShieldCheck, ArrowRight, Users } from 'lucide-react';

export default function App() {
  const whatsappLink = "https://chat.whatsapp.com/EMOzDSCIbVbEUJ6X6iHTCU?mode=gi_t";

  return (
    <div className="min-h-screen bg-brand-dark selection:bg-brand-green selection:text-brand-dark">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-brand-dark/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-brand-dark font-bold text-xs italic">TR</span>
            </div>
            <span className="font-display font-bold tracking-tighter text-xl uppercase">Tulio Ribeiro</span>
          </div>
          <a
            href={whatsappLink}
            className="hidden md:flex items-center gap-2 bg-brand-green text-brand-dark px-5 py-2 rounded-full font-bold text-sm hover:scale-105 transition-transform"
          >
            <MessageCircle size={18} />
            ENTRAR NO GRUPO
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        {/* Background Glows */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-brand-green/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[20%] right-[-10%] w-[40%] h-[40%] bg-brand-green/5 blur-[100px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-green/10 border border-brand-green/20 text-brand-green text-xs font-bold tracking-widest uppercase mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-green"></span>
              </span>
              Evento Online & Gratuito
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold leading-[0.9] mb-6">
              SALA <span className="text-brand-green italic">SECRETA</span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/70 max-w-xl mb-10 leading-relaxed">
              Descubra as estratégias exclusivas que os grandes investidores usam para proteger e multiplicar patrimônio no mercado americano.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappLink}
                className="group relative inline-flex items-center justify-center gap-3 bg-brand-green text-brand-dark px-8 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all hover:shadow-[0_0_30px_rgba(0,255,127,0.3)]"
              >
                <MessageCircle className="group-hover:rotate-12 transition-transform" />
                QUERO ENTRAR NA SALA
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4 text-white/40 text-sm">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/user${i}/100/100`}
                    alt="User avatar"
                    className="w-8 h-8 rounded-full border-2 border-brand-dark"
                    referrerPolicy="no-referrer"
                  />
                ))}
              </div>
              <p>+2.400 investidores já confirmados</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-10 lg:ml-auto"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Background Glow behind image */}
              <div className="absolute inset-0 bg-brand-green/20 blur-[80px] rounded-full -z-10 scale-110" />
              
              <img
                src="https://i.imgur.com/9KHVDEI.png"
                alt="Tulio Ribeiro"
                className="w-full h-auto object-contain rounded-3xl shadow-2xl"
                style={{
                  maskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)',
                  WebkitMaskImage: 'radial-gradient(circle at center, black 60%, transparent 100%)'
                }}
                onError={(e) => {
                  e.currentTarget.src = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800&h=1000";
                }}
                referrerPolicy="no-referrer"
              />
              {/* DICA: Para usar sua imagem específica, hospede-a em um site como Imgur e substitua o link acima */}
              
              {/* Floating Badge */}
              <div className="absolute top-4 right-4 bg-brand-green text-brand-dark px-4 py-2 rounded-lg font-bold text-sm shadow-xl rotate-12 z-20">
                SALA SECRETA
              </div>

              {/* Info Card */}
              <div className="absolute -bottom-6 -left-6 bg-brand-dark/90 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl max-w-[240px] z-20">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-brand-green/20 rounded-lg">
                    <Video className="text-brand-green" size={20} />
                  </div>
                  <span className="font-bold text-sm">Ao vivo via Zoom</span>
                </div>
                <p className="text-xs text-white/60 leading-relaxed">
                  Acesso exclusivo para membros do grupo VIP. Vagas limitadas pela plataforma.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">O que você vai aprender?</h2>
            <p className="text-white/50">Conteúdo prático e direto ao ponto, sem enrolação.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShieldCheck className="text-brand-green" />,
                title: "Proteção de Capital",
                desc: "Como blindar seu patrimônio contra a inflação e instabilidades políticas."
              },
              {
                icon: <Calendar className="text-brand-green" />,
                title: "Planejamento 2026",
                desc: "As melhores oportunidades de investimento para o cenário atual do mercado."
              },
              {
                icon: <Users className="text-brand-green" />,
                title: "Networking VIP",
                desc: "Conecte-se com outros investidores que buscam o mesmo objetivo que você."
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-brand-dark border border-white/5 hover:border-brand-green/30 transition-colors"
              >
                <div className="w-12 h-12 bg-brand-green/10 rounded-xl flex items-center justify-center mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-brand-green/20 to-transparent p-12 rounded-[40px] border border-brand-green/20 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <MessageCircle size={120} />
          </div>
          
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-8 leading-tight">
            Não fique de fora da <span className="text-brand-green italic">Sala Secreta</span>
          </h2>
          
          <p className="text-lg text-white/70 mb-10 max-w-2xl mx-auto">
            O link de acesso ao Zoom será enviado exclusivamente dentro do grupo do WhatsApp. Entre agora para garantir sua vaga.
          </p>

          <a
            href={whatsappLink}
            className="inline-flex items-center gap-3 bg-brand-green text-brand-dark px-10 py-5 rounded-2xl font-bold text-xl hover:scale-105 transition-transform shadow-[0_20px_50px_rgba(0,255,127,0.2)]"
          >
            <MessageCircle />
            ENTRAR NO GRUPO AGORA
          </a>
          
          <p className="mt-6 text-sm text-white/40 italic">
            * 100% Gratuito. Sem spam. Apenas informações do evento.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5 text-center">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-6 h-6 bg-brand-green rounded-full flex items-center justify-center">
              <span className="text-brand-dark font-bold text-[10px] italic">TR</span>
            </div>
            <span className="font-display font-bold tracking-tighter uppercase">Tulio Ribeiro</span>
          </div>
          <p className="text-white/30 text-sm">
            &copy; 2026 Tulio Ribeiro. Todos os direitos reservados. <br className="md:hidden" />
            Consultoria Financeira Especializada.
          </p>
        </div>
      </footer>

      {/* Mobile Sticky CTA */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-50">
        <a
          href={whatsappLink}
          className="flex items-center justify-center gap-3 bg-brand-green text-brand-dark w-full py-4 rounded-2xl font-bold shadow-2xl active:scale-95 transition-transform"
        >
          <MessageCircle size={20} />
          GARANTIR MINHA VAGA
        </a>
      </div>
    </div>
  );
}
