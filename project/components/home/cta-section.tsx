import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";

export function CTASection() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary/5 to-background" />
      <div className="container relative">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Pronto para transformar suas ideias em realidade?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Junte-se à PIAP hoje e conecte-se com os melhores profissionais em automação e design 3D.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button size="lg" asChild>
              <Link href={ROUTES.CREATE_PROJECT}>
                Criar um Projeto <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <Link href={ROUTES.SIGN_UP}>Cadastre-se</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}