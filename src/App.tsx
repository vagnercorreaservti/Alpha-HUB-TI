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
  CreditCard
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
    { name: 'Suporte TI', href: '#suporte' },
    { name: 'Cloud', href: '#cloud' },
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
                className="text-lg font-medium text-zinc-300 hover:text-brand-primary"
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
    whileHover={{ y: -8, scale: 1.02 }}
    className="p-8 bg-brand-surface/40 backdrop-blur-md border border-white/5 rounded-2xl hover:border-brand-primary/50 hover:shadow-[0_0_40px_rgba(16,185,129,0.15)] transition-all group relative overflow-hidden cursor-pointer"
    onClick={onClick}
  >
    <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-brand-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
          className="relative w-full max-w-2xl bg-brand-surface border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-2 bg-brand-primary" />
          <button 
            onClick={onClose}
            className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
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
  <div className="w-[350px] flex-shrink-0 bg-white/5 backdrop-blur-md p-8 rounded-3xl border border-white/10 relative group hover:border-brand-primary/50 transition-all duration-500 mx-3">
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

    <p className="text-zinc-400 text-sm leading-relaxed italic">
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
      content: "Suporte técnico de alto nível! Resolveram uma falha crítica no servidor Linux da minha empresa com agilidade e total profissionalismo. Exccelente expertise em N3 e cibersecurity, recomendo demais!",
      image: "https://i.pravatar.cc/150?u=yuri"
    },
    {
      name: "Matheus Kabib",
      content: "Contratei para implementar VLAN, configurar AD e servidores Windows. Organização impecável e soluções de segurança avançadas. Suporte técnico ao nível enterprise! Perfeito para ambientes corporativos.",
      image: "https://i.pravatar.cc/150?u=matheus"
    },
    {
      name: "Rick Valladares",
      content: "Manutenção preventiva e backup automatizado no meu servidor Linux. Suporte técnico N3 extremamente eficiente. Ambiente agora está seguro e otimizado. Recomendados!",
      image: "https://i.pravatar.cc/150?u=rick"
    },
    {
      name: "Tailine Figueiredo",
      content: "Instalaram e configuraram um sistema de CFTV em cloud com integração firewall e acesso remoto seguro. Projeto entregue pontualmente sem falhas. Nota 10!",
      image: "https://ui-avatars.com/api/?name=Tailine+Figueiredo&background=7cb342&color=fff"
    },
    {
      name: "Raquel Calumby",
      content: "Desenvolveram o site e aplicaram soluções AWS para alta performance e segurança. O site é moderno, escalável e seguro. Time muito competente!",
      image: "https://i.pravatar.cc/150?u=raquel"
    },
    {
      name: "Marcus Araújo",
      content: "Excelência em suporte avançado. Resolveram falhas de configuração no firewall, readequaram a infraestrutura e otimizaram a VLAN corporativa.",
      image: "https://ui-avatars.com/api/?name=Marcus+Araujo&background=00695c&color=fff"
    },
    {
      name: "Leonardo Freitas",
      content: "Contratei para setup de servidores Linux, monitoramento 24/7 e automação de processos. Ambientes complexos geridos de forma impecável. Profissionais extremamente qualificados.",
      image: "https://i.pravatar.cc/150?u=leonardo"
    },
    {
      name: "Luciano São Pedro",
      content: "Problema crítico na VPN de acesso remoto resolvido no mesmo dia. Expertise intermediária em N3. AD e soluções cloud. Atendimento ágil e conhecimento técnico avançado!",
      image: "https://i.pravatar.cc/150?u=luciano"
    }
  ];

  // Double the array for seamless loop
  const marqueeItems = [...testimonials, ...testimonials];

  return (
    <div className="relative w-full overflow-hidden py-10">
      {/* Gradient masks for smooth fade */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-dark to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-dark to-transparent z-10" />
      
      <motion.div
        animate={{
          x: ["0%", "-50%"],
        }}
        transition={{
          duration: 50,
          repeat: Infinity,
          ease: "linear",
        }}
        className="flex w-max px-6"
      >
        {marqueeItems.map((item, i) => (
          <TestimonialCard 
            key={i} 
            name={item.name} 
            content={item.content} 
            image={item.image} 
          />
        ))}
      </motion.div>
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
              className="grid grid-cols-2 md:grid-cols-3 gap-12 border-t border-white/5 pt-12"
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
                  className="absolute inset-4 border border-dashed border-brand-primary/20 rounded-full"
                />

                {/* Orbiting Icons Container */}
                <motion.div 
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute w-full h-full flex items-center justify-center"
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

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://i.ibb.co/dwJ3bJcw/image.png" 
            alt="Background" 
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
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
    </div>
  );
}
