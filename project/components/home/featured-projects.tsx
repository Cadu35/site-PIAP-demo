import Link from "next/link";
import { ArrowUpRight, Calendar, CircleDollarSign } from "lucide-react";

import { DUMMY_PROJECTS, PROJECT_STATUS_COLORS, ROUTES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";

export function FeaturedProjects() {
  return (
    <section className="py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Projetos em Destaque</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça alguns dos projetos disponíveis na plataforma
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={ROUTES.PROJECT_DETAILS(project.id)}
              className="group rounded-lg border bg-card shadow-sm transition-all hover:shadow-md"
            >
              <div className="p-6">
                <div className="mb-4 flex justify-between">
                  <Badge
                    className={cn(
                      "font-medium",
                      PROJECT_STATUS_COLORS[project.status]
                    )}
                  >
                    {project.status === 'open' ? 'Aberto' : 
                     project.status === 'in_progress' ? 'Em Progresso' : 
                     project.status}
                  </Badge>
                  <Badge variant="outline">
                    {project.category === 'electronics' ? 'Eletrônica' : 
                     project.category === '3ddesign' ? 'Design 3D' : 
                     'Eletrônica & Design 3D'}
                  </Badge>
                </div>
                <h3 className="mb-2 text-xl font-medium group-hover:text-primary">
                  {project.title}
                </h3>
                <p className="mb-4 line-clamp-2 text-muted-foreground">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-4 text-sm">
                  <div className="flex items-center gap-1.5">
                    <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
                    <span>R$ {project.budget.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-muted-foreground" />
                    <time dateTime={project.createdAt.toISOString()}>
                      {formatDate(project.createdAt)}
                    </time>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between rounded-b-lg border-t bg-muted/50 px-6 py-4">
                <span className="text-sm font-medium">Ver detalhes</span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button asChild>
            <Link href={ROUTES.PROJECTS}>
              Ver Todos os Projetos
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}