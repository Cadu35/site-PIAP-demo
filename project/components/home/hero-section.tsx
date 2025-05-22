"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, CircuitBoard, Code, Layers } from "lucide-react";

import { Button } from "@/components/ui/button";
import { ROUTES } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function HeroSection() {
  const [activeTab, setActiveTab] = useState<"client" | "professional">("client");

  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
      <div className="container relative flex flex-col items-center py-20 text-center md:py-32">
        <div className="animate-fade-in space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Conectando ideias a{" "}
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              soluções de automação
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground md:text-xl">
            A plataforma que conecta clientes a desenvolvedores de circuitos eletrônicos e designers 3D para projetos personalizados.
          </p>
        </div>

        <div className="mt-8 w-full max-w-lg">
          <div className="flex rounded-lg border p-1">
            <button
              className={cn(
                "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all",
                activeTab === "client"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
              )}
              onClick={() => setActiveTab("client")}
            >
              Sou Cliente
            </button>
            <button
              className={cn(
                "flex-1 rounded-md px-4 py-2 text-sm font-medium transition-all",
                activeTab === "professional"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-muted-foreground hover:bg-muted"
              )}
              onClick={() => setActiveTab("professional")}
            >
              Sou Profissional
            </button>
          </div>

          <div className="mt-4 space-y-4 rounded-lg border bg-card p-6 text-left shadow-sm">
            {activeTab === "client" ? (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Encontre o profissional ideal para seu projeto</h3>
                <p className="text-sm text-muted-foreground">
                  Descreva suas necessidades e receba propostas de especialistas qualificados em automação e design 3D.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild className="flex-1">
                    <Link href={ROUTES.CREATE_PROJECT}>
                      Criar Projeto <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={ROUTES.PROJECTS}>Ver Projetos</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <h3 className="text-lg font-medium">Encontre projetos alinhados com suas habilidades</h3>
                <p className="text-sm text-muted-foreground">
                  Acesse projetos que correspondam à sua expertise e estabeleça conexões com clientes.
                </p>
                <div className="flex flex-col gap-2 sm:flex-row">
                  <Button asChild className="flex-1">
                    <Link href={ROUTES.SIGN_UP}>
                      Cadastre-se <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="flex-1">
                    <Link href={ROUTES.PROJECTS}>Ver Projetos</Link>
                  </Button>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-2">
            <CircuitBoard className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">500+ Projetos</span>
          </div>
          <div className="flex items-center gap-2">
            <Code className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">300+ Desenvolvedores</span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-muted-foreground" />
            <span className="text-sm font-medium">200+ Designers 3D</span>
          </div>
        </div>
      </div>
    </div>
  );
}