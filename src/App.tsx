/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  MessageCircle, 
  ClipboardCheck, 
  UserCircle, 
  Sparkles, 
  ShieldCheck, 
  Instagram, 
  MapPin, 
  CheckCircle2,
  X,
  ChevronRight
} from 'lucide-react';
import { EXPERT_INFO, IMAGES, TRUST_CARDS, STEPS } from './constants';

const IconMap: Record<string, any> = {
  ClipboardCheck,
  UserCircle,
  Sparkles,
  ShieldCheck,
};

const MotionDiv = motion.div;

export default function App() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const WhatsAppButton = ({ className = "", text = "Agendar primeira consulta gratuita no WhatsApp" }) => (
    <a
      href={EXPERT_INFO.whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-semibold py-4 px-8 rounded-full transition-all shadow-lg hover:scale-105 active:scale-95 group ${className}`}
    >
      <MessageCircle className="w-6 h-6 fill-white" />
      <span>{text}</span>
    </a>
  );

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-[#FAFAFA]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-accent/5 -skew-x-12 transform translate-x-1/2" />
        
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <MotionDiv 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <span className="text-brand-accent font-semibold tracking-widest uppercase text-sm mb-4 block">
              Especialista em Estética & Reabilitação Oral
            </span>
            <h1 className="text-5xl lg:text-7xl font-light mb-6 leading-tight">
              Eu sou a <br/>
              <span className="font-bold text-brand-primary">Dra. {EXPERT_INFO.name}</span>
            </h1>
            <p className="text-xl text-brand-secondary mb-8 max-w-lg leading-relaxed font-light">
              Transformando sorrisos com arte e precisão através de Facetas e Lentes em Resina de alta performance.
            </p>
            <div className="flex flex-col gap-4">
              <WhatsAppButton />
              <p className="text-sm text-brand-secondary/70 flex items-center gap-2 ml-2">
                <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
                Resposta rápida • Sem compromisso
              </p>
            </div>
          </MotionDiv>

          <MotionDiv 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="absolute -inset-4 border border-brand-accent/20 rounded-2xl -z-10 translate-x-4 -translate-y-4" />
              <img 
                src={IMAGES.hero} 
                alt={EXPERT_INFO.name} 
                className="w-full max-w-lg rounded-2xl shadow-2xl grayscale-[0.2] hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl hidden md:block">
                <div className="flex items-center gap-4">
                  <div className="bg-brand-accent/10 p-3 rounded-full">
                    <Sparkles className="w-6 h-6 text-brand-accent" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">+1.000</p>
                    <p className="text-xs text-brand-secondary uppercase tracking-wider">Sorrisos Transformados</p>
                  </div>
                </div>
              </div>
            </div>
          </MotionDiv>
        </div>
      </section>

      {/* 2. QUEM SOU EU */}
      <section id="sobre" className="py-24 bg-white border-y border-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <MotionDiv 
              whileInView={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 30 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <img 
                src={IMAGES.bio} 
                alt="Dra. Marcelle Cristina" 
                className="rounded-3xl shadow-xl w-full max-w-md mx-auto grayscale-[0.3]"
              />
            </MotionDiv>
            <MotionDiv 
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 30 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-4xl lg:text-5xl font-light mb-8">Excelência em <span className="font-bold">Cada Detalhe</span></h2>
              <p className="text-lg text-brand-secondary mb-8 leading-relaxed">
                Meu propósito é elevar a sua autoestima através de um planejamento personalizado. Entendo que o sorriso é a sua principal porta de entrada para o mundo, e cada caso é tratado como uma obra de arte única.
              </p>
              <ul className="space-y-4 mb-10">
                {[
                  "Foco total em naturalidade e harmonia facial.",
                  "Utilização de resinas premium de última geração.",
                  "Planejamento digital para maior precisão.",
                  "Ambiente exclusivo no Centro de Duque de Caxias."
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-brand-primary">
                    <div className="w-2 h-2 rounded-full bg-brand-accent" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <WhatsAppButton text="Agendar minha avaliação agora" className="w-full sm:w-auto" />
            </MotionDiv>
          </div>
        </div>
      </section>

      {/* 3. RESULTADOS REAIS */}
      <section className="py-24 bg-[#FAFAFA]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">Resultados <span className="font-bold">Reais</span></h2>
            <div className="w-20 h-1 bg-brand-accent mx-auto mb-6" />
            <p className="text-brand-secondary max-w-2xl mx-auto">
              Confira algumas transformações realizadas em nosso consultório. Lentes em resina que devolvem a confiança e o brilho ao olhar.
            </p>
          </div>

          <div className="gallery-grid">
            {IMAGES.gallery.map((img, index) => (
              <MotionDiv
                key={index}
                whileHover={{ scale: 1.02 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                onClick={() => setSelectedImage(img)}
                className="cursor-pointer overflow-hidden rounded-xl shadow-md group"
              >
                <img 
                  src={img} 
                  alt={`Resultado ${index + 1}`} 
                  className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110" 
                />
              </MotionDiv>
            ))}
          </div>
          <p className="text-center text-xs text-brand-secondary mt-8 italic">
            *Resultados podem variar de pessoa para pessoa.
          </p>
        </div>
      </section>

      {/* 4. POR QUE CONFIAR */}
      <section className="py-24 bg-brand-primary text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">Por que <span className="font-bold">confiar em mim?</span></h2>
            <p className="text-gray-400">Compromisso com a sua satisfação e saúde bucal acima de tudo.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {TRUST_CARDS.map((card, index) => {
              const Icon = IconMap[card.icon];
              return (
                <MotionDiv 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-zinc-900 p-8 rounded-2xl border border-white/5 hover:border-brand-accent/50 transition-colors"
                >
                  <div className="bg-brand-accent/10 p-4 rounded-xl inline-block mb-6">
                    <Icon className="w-8 h-8 text-brand-accent" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{card.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{card.description}</p>
                </MotionDiv>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. CTA INTERMEDIÁRIO */}
      <section className="py-20 bg-brand-accent">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-3xl lg:text-4xl text-white font-light mb-8">
            Não adie o <span className="font-bold">sorriso dos seus sonhos.</span>
          </h3>
          <WhatsAppButton text="Falar agora no WhatsApp" className="bg-white !text-brand-primary hover:bg-gray-100" />
        </div>
      </section>

      {/* 6. COMO FUNCIONA */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-light mb-4">Sua jornada <span className="font-bold">até o novo sorriso</span></h2>
            <p className="text-brand-secondary">Processo simples, transparente e sem complicações.</p>
          </div>

          <div className="relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 w-full h-px bg-gray-100 -z-10" />
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {STEPS.map((step, index) => (
                <MotionDiv 
                  key={index}
                  whileInView={{ opacity: 1, y: 0 }}
                  initial={{ opacity: 0, y: 20 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="bg-white p-10 rounded-3xl text-center relative group shadow-sm border border-gray-50"
                >
                  <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 bg-white border border-gray-100 rounded-full flex items-center justify-center font-bold text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold mb-4 mt-4">{step.title}</h3>
                  <p className="text-brand-secondary text-sm leading-relaxed">{step.description}</p>
                </MotionDiv>
              ))}
            </div>
          </div>
          
          <div className="mt-20 text-center">
            <div className="inline-flex items-center gap-2 bg-brand-accent/10 px-6 py-3 rounded-full text-brand-accent font-medium">
              <CheckCircle2 className="w-5 h-5" />
              <span>Avaliação totalmente gratuita e sem compromisso</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. MAIS PROVAS (BASTIDORES) */}
      <section className="py-24 bg-gray-50 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-6xl font-light mb-8">Atendimento <span className="font-bold italic">Humanizado</span></h2>
              <p className="text-brand-secondary text-lg mb-8">
                Cada consulta é uma experiência de cuidado e escuta. Aqui, você não é apenas mais um paciente, é alguém que confia em meu trabalho para mudar sua vida.
              </p>
              <div className="flex items-center gap-6">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-gray-200" />
                  ))}
                </div>
                <div>
                  <p className="text-brand-primary font-bold">Feedback Positivo</p>
                  <div className="flex text-brand-accent">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} className="w-4 h-4 fill-brand-accent" />)}
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 pt-12">
                <img src={IMAGES.hero} className="rounded-2xl shadow-lg w-full h-80 object-cover" />
                <div className="bg-brand-accent h-40 rounded-2xl flex items-center justify-center p-6 text-white text-center italic font-serif">
                "Sua beleza começa com o seu sorriso."
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-brand-primary h-40 rounded-2xl p-8 flex flex-col justify-end">
                  <p className="text-brand-accent font-bold text-2xl">Resultados</p>
                  <p className="text-white text-xs uppercase tracking-tighter opacity-50">Garantidos em Resina</p>
                </div>
                <img src={IMAGES.bio} className="rounded-2xl shadow-lg w-full h-80 object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA FINAL */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-accent/5 -z-10" />
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <MotionDiv
            whileInView={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0.95 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl lg:text-7xl font-light mb-12 leading-tight">
              Pronto para ter o seu <br/>
              <span className="font-bold underline decoration-brand-accent decoration-4 underline-offset-8">Sorriso Renovado?</span>
            </h2>
            <p className="text-xl text-brand-secondary mb-12">
              Não perca a oportunidade de fazer sua primeira consulta gratuita e descobrir o potencial do seu sorriso.
            </p>
            <WhatsAppButton className="text-xl py-6 px-12" />
            <p className="mt-8 text-brand-secondary font-medium tracking-wide">
              DRA. MARCELLE CRISTINA • CRO-RJ 123456
            </p>
          </MotionDiv>
        </div>
      </section>

      {/* 9. RODAPÉ */}
      <footer className="bg-brand-primary text-white py-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12 pb-12 border-b border-white/10">
            <div className="max-w-sm">
              <h4 className="text-3xl font-bold mb-4">{EXPERT_INFO.name}</h4>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                Dentista especialista em estética dental, focada em transformar vidas através do sorriso. Atendimento exclusivo em Duque de Caxias.
              </p>
              <div className="flex gap-4">
                <a href={EXPERT_INFO.instagramUrl} target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-brand-accent transition-colors"><Instagram className="w-5 h-5" /></a>
                <a href={EXPERT_INFO.whatsappUrl} target="_blank" className="bg-white/5 p-3 rounded-full hover:bg-brand-accent transition-colors"><MessageCircle className="w-5 h-5" /></a>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-brand-accent font-bold uppercase text-xs tracking-widest">Endereço</h5>
              <div className="flex items-start gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-brand-accent shrink-0" />
                <p className="max-w-[200px] text-sm leading-relaxed">
                  {EXPERT_INFO.location}<br/>
                  CEP: {EXPERT_INFO.zip}
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <h5 className="text-brand-accent font-bold uppercase text-xs tracking-widest">Acesso Rápido</h5>
              <ul className="space-y-3 text-sm text-gray-300">
                <li><a href="#sobre" className="hover:text-brand-accent transition-colors">Quem sou eu</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Galeria</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Contato</a></li>
                <li><a href="#" className="hover:text-brand-accent transition-colors">Perguntas Frequentes</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-gray-500 uppercase tracking-widest">
            <p>© {new Date().getFullYear()} {EXPERT_INFO.name}. Todos os direitos reservados.</p>
            <p>Desenvolvido com excelência</p>
          </div>
        </div>
      </footer>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[999] bg-black/95 flex items-center justify-center p-6 backdrop-blur-sm cursor-zoom-out"
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-brand-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-10 h-10" />
            </button>
            <motion.img 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage} 
              className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
