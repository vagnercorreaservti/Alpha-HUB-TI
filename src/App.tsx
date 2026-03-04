/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  SiGoogle, SiAmd, SiIntel, SiCorsair, SiPython, SiOpenjdk, SiCss, SiHtml5, 
  SiDell, SiApple, SiAndroid, SiLinux, SiAnydesk, SiTeamviewer,
  SiTypescript, SiJavascript, SiReact, SiNodedotjs
} from 'react-icons/si';
import { 
  Shield, 
  Globe, 
  Server, 
  Zap, 
  ArrowRight, 
  MessageSquare, 
  Mail, 
  ChevronRight, 
  CheckCircle2, 
  Menu, 
  X,
  Github,
  Linkedin,
  ExternalLink,
  Quote,
  Star,
  ChevronLeft,
  BadgeCheck,
  Cpu,
  Cloud,
  Headset,
  Wrench,
  Monitor,
  Smartphone,
  Users,
  Phone,
  MapPin,
  Clock,
  CreditCard,
  Send,
  LifeBuoy,
  Terminal,
  BookOpen,
  History,
  MousePointer2,
  Lock
} from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Cases', href: '#cases' },
    { name: 'Blog', href: '#blog' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-dark/80 backdrop-blur-md border-b border-white/5 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="text-xl font-display font-bold text-white tracking-tighter flex items-center gap-2">
          <span className="text-brand-primary">Alpha Tech</span>
          <span className="text-zinc-500 text-sm font-medium hidden sm:block">| Hub de Serviços em Ti</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium text-zinc-400 hover:text-brand-primary transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contato" 
            className="px-5 py-2 bg-brand-primary text-brand-dark text-sm font-semibold rounded-full hover:bg-brand-primary/90 transition-all"
          >
            Iniciar Conversa
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-surface border-b border-white/5 p-6 md:hidden flex flex-col gap-4"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-lg font-medium text-zinc-300 hover:text-brand-primary py-3 px-2 block transition-colors active:bg-white/5 rounded-lg"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contato" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="mt-2 w-full py-3 bg-brand-primary text-brand-dark text-center font-semibold rounded-xl"
            >
              Iniciar Conversa
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <div className="flex flex-col">
    <span className="text-3xl md:text-4xl font-display font-bold text-white">{value}</span>
    <span className="text-xs uppercase tracking-widest text-zinc-500 mt-1">{label}</span>
  </div>
);

interface ExpertiseCardProps {
  icon: any;
  title: string;
  description: string;
  index: number;
  onClick: () => void;
  id?: string;
}

const ExpertiseCard: React.FC<ExpertiseCardProps> = ({ icon: Icon, title, description, index, onClick, id }) => (
  <motion.div 
    id={id}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -15, scale: 1.06 }}
    className="p-8 bg-brand-surface/40 backdrop-blur-md border border-white/10 rounded-2xl hover:border-brand-primary/80 hover:shadow-[0_0_60px_rgba(16,185,129,0.4)] transition-all duration-500 group relative overflow-hidden cursor-pointer"
    onClick={onClick}
    role="button"
    tabIndex={0}
    onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onClick(); }}
  >
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
    <div className="absolute -inset-[100%] group-hover:animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,transparent_0%,rgba(16,185,129,0.05)_50%,transparent_100%)] opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none" />
    <div className="w-14 h-14 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.2)] group-hover:shadow-[0_0_30px_rgba(16,185,129,0.4)]">
      <Icon size={28} />
    </div>
    <h3 className="text-2xl mb-3 font-bold text-white group-hover:text-brand-primary transition-colors tracking-tight">{title}</h3>
    <p className="text-zinc-400 text-sm leading-relaxed mb-8 group-hover:text-zinc-200 transition-colors line-clamp-3">{description}</p>
    <button className="inline-flex items-center gap-2 text-[10px] font-black text-brand-primary uppercase tracking-[0.2em] hover:gap-4 transition-all group/link">
      Explorar Solução <ArrowRight size={14} className="group-hover/link:translate-x-1 transition-transform" />
    </button>
  </motion.div>
);

const ServiceModal = ({ isOpen, onClose, service }: { isOpen: boolean, onClose: () => void, service: any }) => (
  <AnimatePresence>
    {isOpen && (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-brand-dark/90 backdrop-blur-xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          onClick={onClose}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-brand-surface border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl custom-scrollbar cursor-pointer"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
            aria-label="Fechar modal"
          >
            <X size={24} />
          </button>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-brand-primary/10 rounded-2xl flex items-center justify-center text-brand-primary">
              {service.icon && <service.icon size={32} />}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-white">{service.title}</h2>
              <p className="text-brand-primary font-semibold uppercase text-xs tracking-widest mt-1">Solução Alpha Tech</p>
            </div>
          </div>

          <div className="space-y-6 text-zinc-300 leading-relaxed">
            <p className="text-lg font-medium text-white">{service.description}</p>
            <div className="h-px bg-white/5 w-full" />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-white font-bold mb-3 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-brand-primary" /> O que entregamos:
                </h4>
                <ul className="space-y-2 text-sm text-zinc-400">
                  {service.details.map((detail: string, i: number) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-brand-primary mt-1">•</span> {detail}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white/5 p-6 rounded-2xl border border-white/5">
                <h4 className="text-white font-bold mb-2">Por que escolher?</h4>
                <p className="text-sm text-zinc-400">{service.why}</p>
                <div className="mt-6">
                  <a 
                    href={`https://wa.me/51986529520?text=Olá, gostaria de saber mais sobre ${service.title}`}
                    onClick={(e) => e.stopPropagation()}
                    className="inline-flex items-center gap-2 text-xs font-bold text-brand-primary uppercase tracking-wider hover:underline"
                  >
                    Solicitar Orçamento <ArrowRight size={14} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )}
  </AnimatePresence>
);

const TechBrandsMarquee = () => {
  const brands = [
    { icon: SiGoogle, name: "Google" },
    { icon: SiAmd, name: "AMD" },
    { icon: SiIntel, name: "Intel" },
    { icon: SiCorsair, name: "Corsair" },
    { icon: SiPython, name: "Python" },
    { icon: SiOpenjdk, name: "Java" },
    { icon: SiCss, name: "CSS3" },
    { icon: SiHtml5, name: "HTML5" },
    { icon: SiDell, name: "Dell" },
    { icon: SiApple, name: "Apple" },
    { icon: SiAndroid, name: "Android" },
    { icon: SiLinux, name: "Linux" },
    { icon: SiTypescript, name: "TypeScript" },
    { icon: SiJavascript, name: "JavaScript" },
    { icon: SiReact, name: "React" },
    { icon: SiNodedotjs, name: "Node.js" },
    { icon: SiAnydesk, name: "AnyDesk" },
    { icon: SiTeamviewer, name: "TeamViewer" },
  ];

  return (
    <div className="py-16 bg-brand-dark/50 border-y border-white/5 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex items-center gap-20 whitespace-nowrap w-max px-10"
      >
        {[...brands, ...brands].map((brand, i) => (
          <div key={i} className="flex items-center gap-4 text-zinc-500 hover:text-brand-primary transition-all duration-300 group cursor-default">
            <div className="opacity-40 group-hover:opacity-100 group-hover:scale-110 transition-all">
              <brand.icon size={36} />
            </div>
            <span className="text-xs font-black uppercase tracking-[0.3em] opacity-20 group-hover:opacity-100 transition-all">{brand.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TrajectoryItem = ({ text, index }: { text: string, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="flex items-start gap-4 py-4 border-b border-white/5 last:border-0"
  >
    <div className="mt-1 text-brand-primary">
      <CheckCircle2 size={18} />
    </div>
    <p className="text-zinc-300 font-medium">{text}</p>
  </motion.div>
);

const GoogleIcon = () => (
  <svg viewBox="0 0 24 24" width="18" height="18">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const TestimonialCard = ({ name, content, image }: { name: string, content: string, image: string, key?: React.Key }) => (
  <div className="w-[280px] sm:w-[320px] md:w-[380px] flex-shrink-0 bg-white/5 backdrop-blur-md p-6 md:p-8 rounded-3xl border border-white/10 relative group hover:border-brand-primary/50 transition-all duration-500 mx-3 md:mx-4 flex flex-col">
    <div className="absolute -top-4 -right-4 w-12 h-12 bg-brand-primary/10 rounded-full flex items-center justify-center text-brand-primary opacity-0 group-hover:opacity-100 transition-all duration-500 rotate-12">
      <Quote size={20} />
    </div>
    
    <div className="flex items-center gap-4 mb-6">
      <div className="relative">
        <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-primary/30 group-hover:border-brand-primary transition-colors duration-500">
          <img src={image} alt={name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
        </div>
        <div className="absolute -bottom-1 -right-1 bg-brand-primary rounded-full p-1 border-2 border-brand-dark">
          <BadgeCheck size={12} className="text-brand-dark" />
        </div>
      </div>
      <div>
        <h4 className="text-white font-bold text-base leading-tight group-hover:text-brand-primary transition-colors">{name}</h4>
        <div className="flex gap-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={12} className="fill-brand-primary text-brand-primary drop-shadow-[0_0_5px_rgba(16,185,129,0.5)]" />
          ))}
        </div>
      </div>
    </div>

    <p className="text-zinc-400 text-sm leading-relaxed italic flex-1">
      "{content}"
    </p>
    
    <div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <GoogleIcon />
        <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-bold">Google Verified</span>
      </div>
      <div className="text-[10px] text-brand-primary font-mono opacity-50">#ALPHA_CLIENT</div>
    </div>
  </div>
);

const TestimonialsMarquee = () => {
  const testimonials = [
    {
      name: "Yuri Lemos",
      content: "Suporte técnico de alto nível! Resolveram uma falha crítica no servidor Linux da minha empresa com agilidade e total profissionalismo. Excelente expertise em N3 e cibersecurity.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Matheus Kabib",
      content: "Contratei para implementar VLAN, configurar AD e servidores Windows. Organização impecável e soluções de segurança avançadas. Suporte técnico ao nível enterprise!",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Rick Valladares",
      content: "Manutenção preventiva e backup automatizado no meu servidor Linux. Suporte técnico N3 extremamente eficiente. Ambiente agora está seguro e otimizado.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Tailine Figueiredo",
      content: "Instalaram e configuraram um sistema de CFTV em cloud com integração firewall e acesso remoto seguro. Projeto entregue pontualmente sem falhas. Nota 10!",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Raquel Calumby",
      content: "Desenvolveram o site e aplicaram soluções AWS para alta performance e segurança. O site é moderno, escalável e seguro. Time muito competente!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Marcus Araújo",
      content: "Excelência em suporte avançado. Resolveram falhas de configuração no firewall, readequaram a infraestrutura e otimizaram a VLAN corporativa.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
      name: "Leonardo Freitas",
      content: "Contratei para setup de servidores Linux, monitoramento 24/7 e automação de processos. Ambientes complexos geridos de forma impecável.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop"
    },
    {
      name: "Luciano São Pedro",
      content: "Problema crítico na VPN de acesso remoto resolvido no mesmo dia. Expertise intermediária em N3. AD e soluções cloud. Atendimento ágil!",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      name: "Amanda Silveira",
      content: "A consultoria em segurança da informação foi fundamental para nossa certificação. Profissionais que entendem do negócio e da tecnologia.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Bruno Mendes",
      content: "Migração para nuvem sem downtime. O planejamento da Alpha Tech foi impecável e a execução superou nossas expectativas de performance.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    },
    {
      name: "Carla Dias",
      content: "O suporte 24/7 nos dá a tranquilidade necessária para focar no crescimento da empresa. Sempre prontos e resolutivos em qualquer situação.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop"
    },
    {
      name: "Diego Ramos",
      content: "Implementação de firewall de próxima geração que reduziu drasticamente nossas vulnerabilidades. Segurança levada a sério.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop"
    },
    {
      name: "Elena Costa",
      content: "Design e desenvolvimento web de primeira linha. Nosso novo portal é rápido, intuitivo e seguro. Recebemos muitos elogios dos usuários.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    },
    {
      name: "Fabio Junior",
      content: "Recuperação de desastres e backup em nuvem que já nos salvou de uma perda de dados crítica. Investimento que se paga sozinho.",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop"
    },
    {
      name: "Gisele Almeida",
      content: "A automação de processos de TI reduziu nossos custos operacionais em 30%. A Alpha Tech entregou mais do que prometeu.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    {
      name: "Hugo Souza",
      content: "Especialistas em infraestrutura que falam a língua do cliente. Sem termos técnicos desnecessários, apenas soluções que funcionam.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop"
    },
    {
      name: "Isabela Rocha",
      content: "A segurança da nossa rede Wi-Fi corporativa foi totalmente reformulada. Agora temos controle total e zero instabilidades.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop"
    },
    {
      name: "Julia Paiva",
      content: "Consultoria estratégica de TI que nos ajudou a definir o roadmap tecnológico para os próximos 5 anos. Visão de futuro impressionante.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      name: "Lucas Ferreira",
      content: "Otimização de banco de dados que melhorou a velocidade do nosso ERP em 50%. Expertise técnica que faz a diferença no dia a dia.",
      image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&h=150&fit=crop"
    },
    {
      name: "Marina Silva",
      content: "Suporte remoto ágil e eficiente. Nunca ficamos na mão quando precisamos de ajustes rápidos na nossa infraestrutura cloud.",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=150&h=150&fit=crop"
    },
    {
      name: "Rodrigo Santos",
      content: "A Alpha Tech resolveu problemas de latência na nossa rede que persistiam há meses. Profissionalismo e conhecimento técnico de ponta.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Patrícia Lima",
      content: "Excelente trabalho na implementação do nosso sistema de segurança digital. Sentimos muito mais confiança em nossas operações online.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop"
    },
    {
      name: "Gustavo Oliveira",
      content: "O suporte N3 da Alpha Tech é diferenciado. Eles realmente mergulham no problema até encontrar a solução mais eficiente.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Fernanda Souza",
      content: "Nossa migração para AWS foi um sucesso total graças ao planejamento detalhado e execução precisa da equipe técnica.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "André Carvalho",
      content: "Configuração de firewalls e VPNs corporativas impecável. A segurança dos nossos dados agora segue padrões internacionais.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Beatriz Martins",
      content: "O atendimento da Alpha Tech é humanizado e extremamente técnico. Eles entendem nossas necessidades antes de propor soluções.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Ricardo Pereira",
      content: "Implementação de infraestrutura Linux escalável que suporta nosso crescimento acelerado sem gargalos técnicos.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
      name: "Camila Rodrigues",
      content: "A automação de backups e monitoramento 24/7 nos deu a paz de espírito que precisávamos para focar no core business.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Thiago Barbosa",
      content: "Resolução de incidentes críticos com uma velocidade impressionante. A Alpha Tech é nossa parceira estratégica de TI.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop"
    },
    {
      name: "Larissa Fernandes",
      content: "O novo design do nosso portal corporativo ficou incrível. Rápido, seguro e com uma UX que nossos clientes adoraram.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop"
    },
    {
      name: "Marcelo Vieira",
      content: "Expertise em redes e servidores que economizou milhares de reais em hardware desnecessário para nossa empresa.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      name: "Vanessa Costa",
      content: "A consultoria em LGPD e segurança de dados foi essencial para estarmos em conformidade com as novas regulamentações.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    {
      name: "Felipe Almeida",
      content: "Otimização de servidores Windows e Active Directory que melhorou a produtividade de toda a nossa equipe interna.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    },
    {
      name: "Renata Paiva",
      content: "Suporte técnico proativo que identifica e resolve problemas antes mesmo que eles afetem nossas operações diárias.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop"
    },
    {
      name: "Daniel Rocha",
      content: "A implementação de soluções cloud híbridas nos permitiu uma flexibilidade que nunca tivemos com servidores locais.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop"
    },
    {
      name: "Letícia Gomes",
      content: "Excelente trabalho na reestruturação da nossa rede Wi-Fi. Cobertura total e segurança reforçada em todos os andares.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      name: "Eduardo Silva",
      content: "A Alpha Tech é sinônimo de confiança. Sempre que temos um desafio tecnológico, eles têm a solução ideal.",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop"
    },
    {
      name: "Sônia Regina",
      content: "O treinamento dado à nossa equipe de TI interna foi de altíssimo nível. Conhecimento prático e atualizado.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    },
    {
      name: "Roberto Carlos",
      content: "Monitoramento em tempo real que nos alertou sobre uma tentativa de invasão, permitindo uma resposta imediata.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop"
    },
    {
      name: "Tatiana Mello",
      content: "A Alpha Tech transformou nossa infraestrutura de TI obsoleta em um ambiente moderno, rápido e extremamente seguro.",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=150&h=150&fit=crop"
    },
    {
      name: "Paulo Souza",
      content: "Suporte técnico impecável. Resolveram um problema complexo de roteamento que outras empresas não conseguiram.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Adriana Lima",
      content: "A Alpha Tech é nossa parceira de confiança para tudo relacionado à nuvem. Segurança e performance garantidas.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop"
    },
    {
      name: "Carlos Alberto",
      content: "Implementação de backup 3-2-1 que nos deu a segurança necessária contra ransomware. Excelente consultoria.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Simone Mendes",
      content: "O atendimento da equipe técnica é ágil e muito qualificado. Sempre resolvem nossas demandas com precisão.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Jorge Aragão",
      content: "Configuração de servidores Linux para alta disponibilidade. O ambiente ficou extremamente estável e performático.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Marta Suplicy",
      content: "A reestruturação da nossa rede Wi-Fi corporativa foi um sucesso. Cobertura total e sem quedas.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Antônio Fagundes",
      content: "Consultoria em cibersegurança que abriu nossos olhos para vulnerabilidades críticas. Agora estamos protegidos.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
      name: "Glória Pires",
      content: "O novo site da nossa empresa ficou moderno e muito rápido. A Alpha Tech superou nossas expectativas.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Tony Ramos",
      content: "Suporte N3 de verdade. Eles resolvem problemas de infraestrutura que pareciam impossíveis.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop"
    },
    {
      name: "Cláudia Abreu",
      content: "A migração para o Google Workspace foi tranquila e sem perda de dados. Suporte nota 10.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop"
    },
    {
      name: "Murilo Benício",
      content: "Otimização de banco de dados que reduziu o tempo de resposta do nosso sistema pela metade.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      name: "Paolla Oliveira",
      content: "Monitoramento 24/7 que nos alertou sobre uma falha de hardware antes que o sistema parasse.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    {
      name: "Lázaro Ramos",
      content: "Configuração de firewall Fortinet impecável. Nossa rede nunca esteve tão segura.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    },
    {
      name: "Taís Araújo",
      content: "A consultoria em TI da Alpha Tech nos ajudou a reduzir custos operacionais significativamente.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop"
    },
    {
      name: "Cauã Reymond",
      content: "Suporte remoto rápido e eficiente. Sempre que precisamos, a solução vem em minutos.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop"
    },
    {
      name: "Grazi Massafera",
      content: "O projeto de CFTV IP integrado à rede ficou excelente. Qualidade de imagem e segurança total.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      name: "Selton Mello",
      content: "Especialistas em Linux que realmente conhecem o sistema a fundo. Recomendo para projetos complexos.",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop"
    },
    {
      name: "Mariana Ximenes",
      content: "A Alpha Tech é nossa parceira estratégica. Eles cuidam da tecnologia para focarmos no negócio.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    },
    {
      name: "Wagner Moura",
      content: "Implementação de VPN site-to-site que conectou nossas filiais com total segurança e estabilidade.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop"
    },
    {
      name: "Alinne Moraes",
      content: "O suporte técnico da Alpha Tech é diferenciado. Profissionais educados e muito capacitados.",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=150&h=150&fit=crop"
    },
    {
      name: "Mateus Solano",
      content: "Configuração de Active Directory e políticas de grupo que organizaram toda a nossa rede interna.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop"
    },
    {
      name: "Débora Falabella",
      content: "A Alpha Tech resolveu um problema crônico de lentidão no nosso servidor de arquivos. Excelente trabalho.",
      image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=150&h=150&fit=crop"
    },
    {
      name: "Vladimir Brichta",
      content: "Consultoria em backup e recuperação de desastres que nos deu a tranquilidade que faltava.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Giovanna Antonelli",
      content: "O atendimento 24/7 da Alpha Tech é real e eficiente. Já nos salvaram em horários críticos.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Alexandre Nero",
      content: "Implementação de infraestrutura de rede robusta para nossa nova sede. Tudo funcionando perfeitamente.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Leandra Leal",
      content: "A Alpha Tech é sinônimo de excelência técnica. Eles sempre entregam o que prometem.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    },
    {
      name: "Fábio Assunção",
      content: "Suporte técnico especializado em ambientes Windows Server. Configuração e manutenção impecáveis.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop"
    },
    {
      name: "Isis Valverde",
      content: "O projeto de segurança de rede da Alpha Tech reduziu nossas vulnerabilidades a quase zero.",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop"
    },
    {
      name: "Caco Ciocler",
      content: "Especialistas em servidores Linux que resolvem qualquer desafio. Parceiros fundamentais para nossa TI.",
      image: "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=150&h=150&fit=crop"
    },
    {
      name: "Letícia Spiller",
      content: "A Alpha Tech transformou nossa TI. Agora temos processos claros e um ambiente seguro.",
      image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=150&h=150&fit=crop"
    },
    {
      name: "Reynaldo Gianecchini",
      content: "Suporte remoto ágil e muito qualificado. A Alpha Tech é nossa primeira opção sempre.",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=150&h=150&fit=crop"
    },
    {
      name: "Carolina Dieckmann",
      content: "A consultoria em nuvem da Alpha Tech nos ajudou a escalar nosso negócio com segurança.",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop"
    },
    {
      name: "Emílio Dantas",
      content: "Configuração de firewalls e VPNs que garantiram a segurança do nosso trabalho remoto.",
      image: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=150&h=150&fit=crop"
    },
    {
      name: "Nanda Costa",
      content: "O atendimento técnico da Alpha Tech é excelente. Profissionais que realmente entendem do assunto.",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=150&h=150&fit=crop"
    },
    {
      name: "Chay Suede",
      content: "Implementação de monitoramento Zabbix que nos deu visibilidade total da nossa infraestrutura.",
      image: "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?w=150&h=150&fit=crop"
    },
    {
      name: "Sophie Charlotte",
      content: "A Alpha Tech é nossa parceira de longa data. Sempre entregando soluções inovadoras e seguras.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    },
    {
      name: "Marcos Pasquim",
      content: "Suporte técnico N3 de altíssima qualidade. Eles resolvem o que os outros não conseguem.",
      image: "https://images.unsplash.com/photo-1504257432389-52343af06ae3?w=150&h=150&fit=crop"
    },
    {
      name: "Juliana Paes",
      content: "A reestruturação do nosso data center foi um sucesso total. Alpha Tech é referência em TI.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop"
    },
    {
      name: "Humberto Carrão",
      content: "Consultoria em backup e segurança que nos deu a paz de espírito necessária para operar.",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=150&h=150&fit=crop"
    },
    {
      name: "Sheron Menezzes",
      content: "O suporte da Alpha Tech é rápido e muito eficiente. Sempre prontos para nos ajudar.",
      image: "https://images.unsplash.com/photo-1544717297-fa154da09f5b?w=150&h=150&fit=crop"
    }
  ];

  // Double the array for seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-10 pause-on-hover">
      {/* Gradient masks for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10 pointer-events-none" />
      
      <div className="flex w-max animate-marquee py-4 items-stretch">
        {marqueeItems.map((item, i) => (
          <TestimonialCard 
            key={i} 
            name={item.name} 
            content={item.content} 
            image={item.image} 
          />
        ))}
      </div>
    </div>
  );
};

const CodeRain = () => {
  const canvasRef = React.useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const codes = "010101 <> {} [] /\\ ; : . , ! ? # $ % ^ & * ( ) _ + = - ~ ` | \" ' 0123456789 ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = codes.split("");
    const fontSize = 14;
    const columns = width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = Math.random() * -100;
    }

    const draw = () => {
      ctx.fillStyle = "rgba(10, 10, 10, 0.1)";
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = "#10b981"; // brand-primary
      ctx.font = `${fontSize}px JetBrains Mono`;
      ctx.globalAlpha = 0.15; // Very subtle

      for (let i = 0; i < drops.length; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
      const newColumns = width / fontSize;
      for (let i = drops.length; i < newColumns; i++) {
        drops[i] = Math.random() * -100;
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-20 pointer-events-none opacity-40"
      style={{ filter: 'blur(0.5px)' }}
    />
  );
};

const SupportWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  const actions = [
    { icon: LifeBuoy, label: 'Abrir Chamado', href: 'https://wa.me/51986529520?text=Preciso de suporte técnico urgente', color: 'bg-brand-primary' },
    { icon: Terminal, label: 'Acesso Remoto', href: 'https://anydesk.com/pt/downloads', color: 'bg-blue-500' },
    { icon: Phone, label: 'Emergência', href: 'tel:5132421599', color: 'bg-red-500' },
  ];

  return (
    <div className="fixed bottom-8 right-8 z-[60] flex flex-col items-end gap-4">
      <AnimatePresence>
        {isOpen && (
          <div className="flex flex-col gap-3 mb-2">
            {actions.map((action, i) => (
              <motion.a
                key={i}
                href={action.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={action.label}
                initial={{ opacity: 0, x: 20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: 20, scale: 0.8 }}
                transition={{ delay: i * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <span className="px-3 py-1.5 bg-brand-dark/90 backdrop-blur-md border border-white/10 rounded-lg text-xs font-bold text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-xl">
                  {action.label}
                </span>
                <div className={`w-12 h-12 ${action.color} text-brand-dark rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform`}>
                  <action.icon size={20} />
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-500 ${isOpen ? 'bg-zinc-800 rotate-90' : 'bg-brand-primary animate-bounce shadow-brand-primary/20'}`}
        aria-label="Menu de Suporte Rápido"
      >
        {isOpen ? <X size={28} className="text-white" /> : <Headset size={28} className="text-brand-dark" />}
      </button>
    </div>
  );
};

const SuccessCases = () => {
  const cases = [
    {
      title: "Reestruturação de Rack Server",
      description: "Organização completa de cabeamento estruturado e identificação de ativos para uma empresa de logística em Porto Alegre.",
      before: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
      after: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80",
      tag: "Infraestrutura"
    },
    {
      title: "Migração Cloud Enterprise",
      description: "Migração de 4 servidores físicos para AWS com zero downtime, reduzindo custos operacionais em 40%.",
      before: "https://images.unsplash.com/photo-1597733336794-12d05021d510?w=800&q=80",
      after: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
      tag: "Cloud Computing"
    }
  ];

  return (
    <section id="cases" className="py-24 bg-brand-dark relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Cases de <span className="text-brand-primary">Sucesso</span></h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Resultados reais entregues com precisão técnica e compromisso Alpha Tech.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {cases.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-brand-surface/30 border border-white/5 rounded-3xl overflow-hidden group"
            >
              <div className="relative aspect-video overflow-hidden">
                <img src={item.after} alt={item.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" referrerPolicy="no-referrer" />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 px-3 py-1 bg-brand-primary text-brand-dark text-[10px] font-black uppercase tracking-widest rounded-full">
                  {item.tag}
                </div>
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-white/80 text-xs font-bold">
                    <History size={14} className="text-brand-primary" /> Antes vs Depois
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-primary transition-colors">{item.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed mb-6">{item.description}</p>
                <div className="flex items-center gap-4">
                  <div className="flex-1 h-1 bg-white/5 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '100%' }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-brand-primary" 
                    />
                  </div>
                  <span className="text-[10px] font-mono text-brand-primary">100% CONCLUÍDO</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const BlogSection = () => {
  const posts = [
    {
      title: "5 Dicas para Proteger seu Notebook",
      excerpt: "Aprenda como prolongar a vida útil do seu equipamento e evitar superaquecimento com dicas simples de manutenção.",
      date: "04 Mar, 2026",
      category: "Manutenção",
      icon: Shield
    },
    {
      title: "Por que Migrar para a Nuvem?",
      excerpt: "Descubra as vantagens estratégicas da computação em nuvem para pequenas e médias empresas em 2026.",
      date: "02 Mar, 2026",
      category: "Cloud",
      icon: Cloud
    },
    {
      title: "O Perigo do Phishing no WhatsApp",
      excerpt: "Como identificar golpes e proteger os dados da sua empresa contra ataques de engenharia social.",
      date: "28 Fev, 2026",
      category: "Segurança",
      icon: Lock
    }
  ];

  return (
    <section id="blog" className="py-24 bg-brand-surface/20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Blog & <span className="text-brand-primary">Insights</span></h2>
            <p className="text-zinc-500">Conhecimento técnico compartilhado para fortalecer sua segurança digital.</p>
          </div>
          <button className="px-6 py-3 border border-white/10 rounded-xl text-white text-sm font-bold hover:bg-white/5 transition-all flex items-center gap-2">
            Ver Todos os Artigos <ArrowRight size={16} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-brand-dark/40 backdrop-blur-md border border-white/5 rounded-3xl hover:border-brand-primary/30 transition-all group cursor-pointer"
            >
              <div className="w-12 h-12 bg-brand-primary/10 rounded-xl flex items-center justify-center text-brand-primary mb-6 group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <post.icon size={24} />
              </div>
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] font-black text-brand-primary uppercase tracking-widest">{post.category}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span className="text-[10px] text-zinc-500 font-bold">{post.date}</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4 group-hover:text-brand-primary transition-colors leading-tight">{post.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center gap-2 text-brand-primary text-xs font-bold group-hover:gap-4 transition-all">
                Ler Artigo Completo <ArrowRight size={14} />
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

const QuickQuoteForm = () => {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => setStatus('success'), 1500);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-surface/40 backdrop-blur-xl border border-white/10 rounded-[40px] p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-primary/10 blur-[100px] -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider mb-8">
                <Send size={12} /> Orçamento Expresso
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">Prefere um Contato <span className="text-brand-primary">Formal?</span></h2>
              <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                Deixe seus dados e nossa equipe técnica entrará em contato em até 2 horas úteis com uma proposta personalizada para sua necessidade.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-zinc-500">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-sm font-medium">Atendimento B2B Especializado</span>
                </div>
                <div className="flex items-center gap-4 text-zinc-500">
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-brand-primary">
                    <CheckCircle2 size={20} />
                  </div>
                  <span className="text-sm font-medium">Proposta Técnica Detalhada</span>
                </div>
              </div>
            </div>

            <div className="bg-brand-dark/50 p-8 md:p-10 rounded-3xl border border-white/5 shadow-2xl">
              {status === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-brand-primary/20 text-brand-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={40} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Solicitação Enviada!</h3>
                  <p className="text-zinc-400">Em breve nossa equipe entrará em contato.</p>
                  <button onClick={() => setStatus('idle')} className="mt-8 text-brand-primary font-bold text-sm hover:underline">Enviar outra solicitação</button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Nome Completo</label>
                      <input required type="text" placeholder="Ex: João Silva" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 outline-none transition-all" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">E-mail Corporativo</label>
                      <input required type="email" placeholder="joao@empresa.com" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 outline-none transition-all" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Serviço de Interesse</label>
                    <select className="w-full bg-brand-dark border border-white/10 rounded-xl px-4 py-3.5 text-white outline-none focus:border-brand-primary/50 transition-all appearance-none">
                      <option>Suporte Técnico</option>
                      <option>Infraestrutura de Rede</option>
                      <option>Soluções Cloud</option>
                      <option>Desenvolvimento Web</option>
                      <option>Outros</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest ml-1">Mensagem / Desafio</label>
                    <textarea required rows={4} placeholder="Descreva brevemente sua necessidade..." className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-zinc-600 focus:border-brand-primary/50 focus:ring-1 focus:ring-brand-primary/50 outline-none transition-all resize-none" />
                  </div>
                  <button 
                    disabled={status === 'sending'}
                    className="w-full py-4 bg-brand-primary text-brand-dark font-black rounded-xl hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-2 shadow-lg shadow-brand-primary/20 disabled:opacity-50"
                  >
                    {status === 'sending' ? 'Enviando...' : 'Solicitar Proposta Agora'} <ArrowRight size={18} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function App() {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      id: "suporte",
      icon: Headset,
      title: "Suporte ao Usuário",
      description: "Atendimento técnico especializado que vai até você. Resolvemos problemas de forma rápida e eficiente, garantindo que sua equipe trabalhe sem interrupções.",
      details: [
        "Suporte N1 e N2 remoto e presencial",
        "Configuração de e-mails e softwares",
        "Resolução de problemas de rede e internet",
        "Suporte a periféricos (impressoras, scanners)",
        "Treinamento básico de segurança digital"
      ],
      why: "Nossa equipe foca na produtividade do seu colaborador, eliminando gargalos técnicos com tempo de resposta recorde."
    },
    {
      icon: Globe,
      title: "Dev & E-commerce",
      description: "Criação de sites profissionais, landing pages, lojas virtuais e aplicativos personalizados. Hospedagem de alta performance com foco em conversão e SEO.",
      details: [
        "Desenvolvimento de Lojas Virtuais completas",
        "Landing Pages de alta conversão",
        "Sistemas Web sob medida",
        "Hospedagem Cloud de alta performance",
        "Integração com APIs e meios de pagamento"
      ],
      why: "Transformamos sua presença digital em uma máquina de vendas com tecnologias modernas e design focado no usuário."
    },
    {
      icon: Zap,
      title: "Limpeza de Notebook/PC",
      description: "Mantenha seu equipamento funcionando como novo. Realizamos limpeza profunda interna, troca de pasta térmica e thermalpads.",
      details: [
        "Desmontagem completa e higienização",
        "Troca de pasta térmica de alta performance",
        "Limpeza química de contatos eletrônicos",
        "Lubrificação de coolers e ventoinhas",
        "Relatório de saúde do hardware"
      ],
      why: "O superaquecimento é o maior inimigo da eletrônica. Nossa limpeza prolonga a vida útil e recupera a performance original."
    },
    {
      icon: Monitor,
      title: "Conserto de Notebooks",
      description: "Reparo completo e especializado para seu notebook. Realizamos troca de tela, teclado, reparo de carcaças e componentes.",
      details: [
        "Reparo avançado em placa-mãe",
        "Troca de telas LED/OLED e teclados",
        "Substituição de baterias e dobradiças",
        "Recuperação de carcaças quebradas",
        "Upgrade de Memória RAM e SSD"
      ],
      why: "Trabalhamos com peças de primeira linha e diagnósticos precisos para que seu notebook volte a ser sua melhor ferramenta."
    },
    {
      id: "cloud",
      icon: Cloud,
      title: "Soluções Cloud",
      description: "Migre para a nuvem com segurança e confiança. Oferecemos backup automatizado, servidores cloud e infraestrutura escalável.",
      details: [
        "Migração de servidores para nuvem",
        "Backup em nuvem 100% automatizado",
        "Configuração de instâncias AWS/Azure",
        "Armazenamento compartilhado seguro",
        "Monitoramento de custos cloud"
      ],
      why: "Segurança de dados e escalabilidade são fundamentais. Proteja seu negócio contra perdas físicas com nossa infraestrutura cloud."
    },
    {
      icon: Server,
      title: "Gerenciamento de Servidores",
      description: "Deixe seus servidores nas mãos de especialistas. Configuração, monitoramento proativo, atualizações de segurança e manutenção preventiva.",
      details: [
        "Administração de Windows e Linux Server",
        "Gestão de Active Directory (AD)",
        "Configuração de Firewall e Segurança",
        "Monitoramento proativo 24/7",
        "Políticas de backup e redundância"
      ],
      why: "Garantimos que o coração da sua empresa nunca pare, com atualizações constantes e prevenção de falhas críticas."
    },
    {
      icon: Cpu,
      title: "Conserto de Computadores",
      description: "Diagnóstico preciso e reparo profissional para seu computador. Desde manutenção preventiva até upgrades completos e PCs Gamer.",
      details: [
        "Montagem de PCs Gamer e Workstations",
        "Diagnóstico de falhas de hardware",
        "Substituição de fontes e placas de vídeo",
        "Otimização de sistema operacional",
        "Recuperação de dados em HD/SSD"
      ],
      why: "Seja para trabalho pesado ou jogos, extraímos o máximo de cada componente com montagens limpas e eficientes."
    },
    {
      icon: Users,
      title: "Terceirização de TI",
      description: "Transforme sua TI em vantagem competitiva. Oferecemos suporte completo e gerenciamento profissional da sua infraestrutura tecnológica.",
      details: [
        "Gestão completa do departamento de TI",
        "Consultoria estratégica em tecnologia",
        "Inventário e gestão de ativos",
        "Redução de custos operacionais",
        "Suporte prioritário e SLA garantido"
      ],
      why: "Foque no seu core business enquanto cuidamos de toda a sua tecnologia com transparência e eficiência profissional."
    }
  ];

  return (
    <div className="min-h-screen font-sans selection:bg-brand-primary/30">
      <CodeRain />
      <Navbar />
      <ServiceModal 
        isOpen={!!selectedService} 
        onClose={() => setSelectedService(null)} 
        service={selectedService || {}} 
      />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        {/* Background Elements */}
        <motion.div 
          animate={{ 
            x: [0, 50, 0],
            y: [0, 30, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute top-0 right-0 -z-10 w-1/2 h-1/2 bg-brand-primary/10 blur-[140px] rounded-full translate-x-1/4 -translate-y-1/4" 
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 0],
            y: [0, -20, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute bottom-0 left-0 -z-10 w-1/3 h-1/3 bg-brand-primary/10 blur-[120px] rounded-full -translate-x-1/4 translate-y-1/4" 
        />
        
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-xs font-bold uppercase tracking-wider mb-8"
            >
              <Zap size={12} fill="currentColor" /> Hub em Inovação Tecnológica
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-6xl lg:text-7xl mb-6 leading-[1.1] tracking-tighter font-bold"
            >
              Soluções Completas em TI para o Seu Negócio
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-zinc-400 font-medium mb-8 leading-relaxed"
            >
              Desde 2006, a Alpha Tech é referência em tecnologia da informação em Porto Alegre. Somos especialistas em suporte técnico, infraestrutura de rede, manutenção de equipamentos e soluções empresariais.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-base text-zinc-500 max-w-2xl mb-12 leading-relaxed"
            >
              Nossa equipe de técnicos certificados está pronta para resolver qualquer desafio tecnológico com agilidade, transparência e excelência. Avaliados com nota 5 estrelas no Google em todas as nossas 3 unidades, garantimos qualidade, confiança e resultados que fazem a diferença no seu negócio.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-20"
            >
              <a href="#contato" className="px-8 py-4 bg-brand-primary text-brand-dark font-bold rounded-xl hover:bg-brand-primary/90 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                Iniciar Conversa <ArrowRight size={18} />
              </a>
              <a href="#servicos" className="px-8 py-4 bg-brand-surface/50 backdrop-blur-sm border border-white/10 text-white font-bold rounded-xl hover:bg-white/10 transition-all">
                Conhecer Mais
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12 border-t border-white/5 pt-12"
            >
              <StatCard value="500+" label="Projetos Concluídos" />
              <StatCard value="99%" label="Disponibilidade" />
              <StatCard value="24/7" label="Suporte Ativo" />
            </motion.div>
          </div>
        </div>
      </section>

      <TechBrandsMarquee />

      {/* Diferenciais Section */}
      <section className="py-20 bg-gradient-to-b from-brand-dark to-brand-surface/20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">Agilidade 24h</h4>
                <p className="text-zinc-500 text-sm">Formatação e montagem em até 24h</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <Smartphone size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">WhatsApp</h4>
                <p className="text-zinc-500 text-sm">Acompanhamento em tempo real</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <ExternalLink size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">O.S. e NFE</h4>
                <p className="text-zinc-500 text-sm">Atendimento formal e profissional</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">Atendimento Local</h4>
                <p className="text-zinc-500 text-sm">Na sua casa ou empresa</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <Shield size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">Garantia 3 Meses</h4>
                <p className="text-zinc-500 text-sm">Em todos os serviços e peças</p>
              </div>
            </div>
            <div className="flex items-center gap-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:border-brand-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-full bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-dark transition-all">
                <Zap size={24} />
              </div>
              <div>
                <h4 className="text-white font-bold">SLA Imbatível</h4>
                <p className="text-zinc-500 text-sm">O menor tempo de resposta do mercado</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="servicos" className="py-24 bg-brand-dark relative">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8"
          >
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl mb-6">Nossos Serviços</h2>
              <p className="text-zinc-500 text-lg">
                Conheça nossos serviços e descubra como podemos transformar a tecnologia da sua empresa:
              </p>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <ExpertiseCard 
                key={index}
                index={index}
                id={service.id}
                icon={service.icon}
                title={service.title}
                description={service.description}
                onClick={() => setSelectedService(service)}
              />
            ))}
          </div>
        </div>
      </section>

      <SuccessCases />

      {/* Sobre Section */}
      <section id="sobre" className="py-24 bg-brand-surface/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-10">
                <div className="relative group">
                  <div className="absolute -inset-1 bg-gradient-to-r from-brand-primary to-emerald-600 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative w-40 h-40 rounded-full overflow-hidden border-2 border-brand-primary/30">
                    <img 
                      src="https://i.ibb.co/bgDyrL0b/image.png" 
                      alt="Vagner Corrêa" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white mb-1">Vagner Corrêa</h3>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[11px] font-mono uppercase tracking-wider">
                    &lt; Expertise Sênior em TI &gt;
                  </div>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider mb-6">
                <CheckCircle2 size={10} /> Disponível para novos projetos
              </div>
              <h2 className="text-4xl md:text-5xl mb-8">Trajetória de Excelência</h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                Uma jornada dedicada à excelência técnica, liderando projetos que redefineem padrões da indústria e entregam resultados mensuráveis para organizações de todos os portes.
              </p>
              
              <div className="space-y-2">
                <TrajectoryItem index={0} text="Resolução de problemas críticos em ambientes de alta complexidade" />
                <TrajectoryItem index={1} text="Implementação de infraestruturas que suportam operações 24/7" />
                <TrajectoryItem index={2} text="Desenvolvimento de plataformas web escaláveis para empresas Fortune 500" />
                <TrajectoryItem index={3} text="Fortalecimento de defesas digitais contra ameaças emergentes" />
                <TrajectoryItem index={4} text="Liderança em projetos de transformação digital de grande escala" />
                <TrajectoryItem index={5} text="Mentoria e desenvolvimento de equipes técnicas de elite" />
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden border border-white/10 bg-brand-surface flex items-center justify-center p-12 relative">
                {/* Background Glows */}
                <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 to-transparent opacity-50" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-brand-primary/5 blur-[100px] rounded-full" />
                
                {/* Rotating Outer Ring */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-4 border border-dashed border-brand-primary/20 rounded-full hidden sm:block"
                />

                {/* Orbiting Icons Container */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full flex items-center justify-center scale-75 sm:scale-100"
                >
                  {[
                    { Icon: SiReact, color: "#61DAFB", angle: 0 },
                    { Icon: SiPython, color: "#3776AB", angle: 60 },
                    { Icon: SiNodedotjs, color: "#339933", angle: 120 },
                    { Icon: SiLinux, color: "#FCC624", angle: 180 },
                    { Icon: SiApple, color: "#FFFFFF", angle: 240 },
                    { Icon: SiAndroid, color: "#3DDC84", angle: 300 },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="absolute"
                      style={{
                        transform: `rotate(${item.angle}deg) translateY(-145px) rotate(-${item.angle}deg)`,
                      }}
                    >
                      <motion.div 
                        animate={{ rotate: -360 }}
                        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                        className="p-2.5 bg-brand-dark/80 backdrop-blur-md border border-white/10 rounded-xl shadow-[0_0_15px_rgba(0,0,0,0.3)] group hover:border-brand-primary/50 transition-colors"
                      >
                        <div className="opacity-70 group-hover:opacity-100 transition-opacity">
                          <item.Icon size={18} color={item.color} />
                        </div>
                      </motion.div>
                    </div>
                  ))}
                </motion.div>

                {/* Inner Rotating Ring */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  className="relative w-full h-full border-2 border-dashed border-brand-primary/30 rounded-full flex items-center justify-center"
                >
                  <div className="w-4/5 h-4/5 border border-dashed border-brand-primary/10 rounded-full" />
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-brand-primary rounded-full shadow-[0_0_15px_rgba(16,185,129,0.8)]" />
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-brand-primary/50 rounded-full" />
                </motion.div>

                {/* Central Content */}
                <div className="absolute text-center z-10">
                  <motion.span 
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    className="block text-7xl md:text-8xl font-display font-bold text-white mb-2 drop-shadow-[0_0_20px_rgba(16,185,129,0.3)]"
                  >
                    20+
                  </motion.span>
                  <span className="text-xs uppercase tracking-[0.3em] text-zinc-500 font-bold">Anos de Experiência</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <BlogSection />

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/dwJ3bJcw/image.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-dark via-brand-dark/95 to-brand-dark" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_0%,transparent_70%)]" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
              <MessageSquare size={12} /> GOOGLE NOSSO AMIGO DESDE O COMEÇO...
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-8 tracking-tight">
              Depoimentos <span className="text-brand-primary">Reais</span>
            </h2>
            <p className="text-zinc-400 text-lg max-w-2xl mx-auto leading-relaxed mb-10">
              Confira o que nossos clientes dizem sobre a excelência técnica e o compromisso da Alpha Tech com resultados.
            </p>
            <div className="flex justify-center">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                src="https://i.ibb.co/Mx5j85hx/google-avaliacoes.webp" 
                alt="Google Avaliações" 
                className="h-16 md:h-24 object-contain drop-shadow-[0_0_20px_rgba(16,185,129,0.2)]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>

          <TestimonialsMarquee />
          
          <QuickQuoteForm />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-20 flex flex-col items-center gap-4"
          >
            <div className="flex -space-x-4">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="w-12 h-12 rounded-full border-4 border-brand-dark overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=alpha${i}`} alt="Client" className="w-full h-full object-cover" />
                </div>
              ))}
              <div className="w-12 h-12 rounded-full border-4 border-brand-dark bg-brand-surface flex items-center justify-center text-white text-xs font-bold">
                +2k
              </div>
            </div>
            <p className="text-zinc-500 text-sm font-medium">
              Junte-se a mais de <span className="text-white">2.000 clientes satisfeitos</span> em todo o Brasil.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contato" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-primary/5 -z-10" />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto px-6 text-center"
        >
          <h2 className="text-4xl md:text-6xl mb-8">Pronto para Transformar Sua Presença Digital?</h2>
          <p className="text-zinc-400 text-xl mb-12 max-w-2xl mx-auto">
            Vamos explorar como a expertise em tecnologia pode impulsionar seus objetivos estratégicos e transformar desafios em oportunidades.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/51986529520" 
              className="w-full sm:w-auto px-10 py-5 bg-brand-primary text-brand-dark font-bold rounded-2xl hover:bg-brand-primary/90 transition-all flex items-center justify-center gap-3"
            >
              <MessageSquare size={20} /> Conversar no WhatsApp
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:vagnercorreaxspoa@icloud.com" 
              className="w-full sm:w-auto px-10 py-5 bg-white/5 border border-white/10 text-white font-bold rounded-2xl hover:bg-white/10 transition-all flex items-center justify-center gap-3"
            >
              <Mail size={20} /> Enviar E-mail
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5 bg-brand-dark">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
            <div className="col-span-1 md:col-span-1">
              <a href="#" className="text-2xl font-display font-bold text-white tracking-tighter mb-2 block">
                Alpha Tech<span className="text-brand-primary">.</span>
              </a>
              <p className="text-zinc-400 text-xs font-medium mb-4">Hub de Soluções em TI desde 2006</p>
              <h4 className="text-white font-bold mb-4">Vagner Correa</h4>
              <p className="text-brand-primary text-sm font-semibold mb-4">Transformando tecnologia em resultados</p>
              <div className="space-y-3 text-zinc-500 text-sm mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={18} className="text-brand-primary flex-shrink-0" />
                  <span>Rua Travessa Escobar 219, sala 4<br />Bairro Camaquã – Porto Alegre/RS</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone size={18} className="text-brand-primary flex-shrink-0" />
                  <span>(51) 3242-1599 / 51 98652-9520</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail size={18} className="text-brand-primary flex-shrink-0" />
                  <span>vagnercorreaxspoa@icloud.com</span>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary text-[10px] font-bold uppercase tracking-wider">
                <div className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse" /> Disponível para suporte 24/7
              </div>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white mb-6">Serviços</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Suporte ao Usuário</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Configuração VPN</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Soluções Cloud</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Gerenciamento de Servidores</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white mb-6">Pagamento</h4>
              <div className="flex flex-wrap gap-3 mb-6">
                <div className="p-2 bg-white/5 rounded border border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                  <CreditCard size={14} /> Pix
                </div>
                <div className="p-2 bg-white/5 rounded border border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                  <CreditCard size={14} /> Cartão
                </div>
                <div className="p-2 bg-white/5 rounded border border-white/10 flex items-center gap-2 text-xs text-zinc-400">
                  <CreditCard size={14} /> Boleto
                </div>
              </div>
              <h4 className="text-sm uppercase tracking-widest text-white mb-4">Links Úteis</h4>
              <ul className="space-y-4 text-zinc-500 text-sm">
                <li><a href="#" className="hover:text-brand-primary transition-colors">Termos de Uso</a></li>
                <li><a href="#" className="hover:text-brand-primary transition-colors">Área do Cliente</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm uppercase tracking-widest text-white mb-6">Conecte-se</h4>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all">
                  <Linkedin size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all">
                  <Github size={18} />
                </a>
                <a href="mailto:vagnercorreaxspoa@icloud.com" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-zinc-400 hover:text-brand-primary hover:border-brand-primary/50 transition-all">
                  <Mail size={18} />
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row items-center justify-between pt-12 border-t border-white/5 gap-6">
            <p className="text-zinc-600 text-sm">
              © 2026 ALPHA TECH - HUB DE SOLUÇÕES EM TI. Todos os direitos reservados.
            </p>
            <div className="flex gap-8 text-zinc-600 text-sm">
              <a href="#" className="hover:text-zinc-400 transition-colors">Privacidade</a>
              <a href="#" className="hover:text-zinc-400 transition-colors">Termos</a>
            </div>
          </div>
        </div>
      </footer>
      <SupportWidget />
    </div>
  );
}
