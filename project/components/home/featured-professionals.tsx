import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Star } from "lucide-react";

import { DUMMY_USERS, ROUTES, USER_ROLE_LABELS } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export function FeaturedProfessionals() {
  return (
    <section id="professionals" className="bg-muted/50 py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Profissionais em Destaque</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Conheça alguns dos especialistas disponíveis na plataforma
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DUMMY_USERS
            .filter((user) => user.role !== "client")
            .map((professional) => (
              <Card 
                key={professional.id}
                className="group overflow-hidden transition-all hover:shadow-md"
              >
                <div className="relative p-6">
                  <div className="mb-4 flex items-center gap-4">
                    <div className="relative h-16 w-16 overflow-hidden rounded-full">
                      <Image
                        src={professional.avatar}
                        alt={professional.name}
                        className="object-cover"
                        fill
                        sizes="64px"
                      />
                    </div>
                    <div>
                      <h3 className="font-medium group-hover:text-primary">
                        {professional.name}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {USER_ROLE_LABELS[professional.role]}
                      </p>
                      <div className="mt-1 flex items-center gap-1">
                        <Star className="h-3.5 w-3.5 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm">
                          {professional.rating} ({professional.projectsCompleted} projetos)
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">
                    {professional.bio}
                  </p>
                  <div className="mb-8 flex flex-wrap gap-1.5">
                    {professional.skills.slice(0, 4).map((skill, index) => (
                      <Badge key={index} variant="secondary" className="font-normal">
                        {skill}
                      </Badge>
                    ))}
                    {professional.skills.length > 4 && (
                      <Badge variant="outline" className="font-normal">
                        +{professional.skills.length - 4}
                      </Badge>
                    )}
                  </div>
                  <Link
                    href={ROUTES.PROFILE(professional.id)}
                    className="absolute bottom-6 right-6 text-sm font-medium text-primary group-hover:underline"
                  >
                    Ver perfil <ArrowUpRight className="ml-1 inline-block h-3.5 w-3.5" />
                  </Link>
                </div>
              </Card>
            ))}
        </div>

        <div className="mt-10 text-center">
          <Button variant="outline" asChild>
            <Link href={ROUTES.HOME}>
              Ver Todos os Profissionais
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}