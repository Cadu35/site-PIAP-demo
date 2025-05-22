import { 
  CircleDollarSign, 
  FileSearch, 
  Handshake, 
  LightbulbIcon, 
  MessageSquare, 
  Star 
} from "lucide-react";

const steps = [
  {
    icon: LightbulbIcon,
    title: "Defina seu projeto",
    description: "Descreva detalhadamente suas necessidades, requisitos técnicos e orçamento disponível.",
  },
  {
    icon: FileSearch,
    title: "Receba propostas",
    description: "Profissionais qualificados avaliam seu projeto e enviam propostas personalizadas.",
  },
  {
    icon: Handshake,
    title: "Selecione o profissional",
    description: "Analise perfis, avaliações e propostas para escolher o melhor profissional.",
  },
  {
    icon: MessageSquare,
    title: "Colabore e acompanhe",
    description: "Use nossa plataforma de comunicação para alinhar detalhes e acompanhar o progresso.",
  },
  {
    icon: CircleDollarSign,
    title: "Pagamento seguro",
    description: "Realize pagamentos de forma segura através da nossa integração com plataformas confiáveis.",
  },
  {
    icon: Star,
    title: "Avalie o serviço",
    description: "Após a conclusão, avalie o profissional e ajude a fortalecer nossa comunidade.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Como Funciona</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Um processo simples para transformar suas ideias em realidade
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative rounded-lg border bg-card p-6 shadow-sm transition-all hover:shadow-md"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <step.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-xl font-medium">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              <div className="absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full bg-muted font-medium">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}