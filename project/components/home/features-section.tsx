import { 
  CircleUserRound, 
  CreditCard, 
  Fingerprint, 
  Laptop, 
  MessageSquare, 
  Shield 
} from "lucide-react";

const features = [
  {
    icon: CircleUserRound,
    title: "Perfis Detalhados",
    description: "Crie um perfil completo com seu portfólio, habilidades e avaliações para se destacar.",
  },
  {
    icon: MessageSquare,
    title: "Comunicação Integrada",
    description: "Chat interno e suporte a videoconferências para alinhamento técnico em tempo real.",
  },
  {
    icon: CreditCard,
    title: "Pagamentos Seguros",
    description: "Integração com plataformas confiáveis para transações seguras e transparentes.",
  },
  {
    icon: Laptop,
    title: "Acompanhamento de Projetos",
    description: "Ferramentas para gerenciar o progresso, entregas e marcos dos seus projetos.",
  },
  {
    icon: Fingerprint,
    title: "Match Inteligente",
    description: "Sistema que recomenda os melhores profissionais com base nas necessidades do projeto.",
  },
  {
    icon: Shield,
    title: "Proteção e Confiança",
    description: "Garantia de qualidade e sistema de resolução de disputas para maior tranquilidade.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Recursos da Plataforma</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Tudo o que você precisa para conectar ideias a soluções personalizadas
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}