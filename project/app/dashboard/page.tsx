"use client";

import * as React from "react";
import Link from "next/link";
import { 
  Activity, 
  BarChart3, 
  Bell, 
  Calendar, 
  CircleDollarSign, 
  Clock, 
  MessageSquare, 
  PlusIcon, 
  User 
} from "lucide-react";

import { DUMMY_PROJECTS, PROJECT_STATUS_COLORS, ROUTES } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn, formatDate } from "@/lib/utils";

export default function DashboardPage() {
  // For demo purposes, we'll assume the user is a client
  const userRole = "client";
  const activeProjects = DUMMY_PROJECTS.filter(
    (project) => project.status === "open" || project.status === "in_progress"
  );
  const completedProjects = DUMMY_PROJECTS.filter(
    (project) => project.status === "completed"
  );

  return (
    <div className="container py-8">
      <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <p className="text-muted-foreground">
            Bem-vindo de volta! Aqui está um resumo da sua atividade.
          </p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="icon">
            <Bell className="h-4 w-4" />
          </Button>
          <Button variant="outline" size="icon">
            <MessageSquare className="h-4 w-4" />
          </Button>
          <Button asChild>
            <Link href={ROUTES.CREATE_PROJECT}>
              <PlusIcon className="mr-2 h-4 w-4" /> Criar Projeto
            </Link>
          </Button>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Projetos Ativos
            </CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{activeProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              +2 projetos no último mês
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Propostas Recebidas
            </CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              +4 propostas na última semana
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Investimento Total
            </CardTitle>
            <CircleDollarSign className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">R$ 4.500</div>
            <p className="text-xs text-muted-foreground">
              Em projetos em andamento
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">
              Projetos Concluídos
            </CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{completedProjects.length}</div>
            <p className="text-xs text-muted-foreground">
              Total de projetos finalizados
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-7">
        <Tabs defaultValue="projects" className="lg:col-span-4">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="projects">Meus Projetos</TabsTrigger>
            <TabsTrigger value="messages">Mensagens</TabsTrigger>
          </TabsList>
          <TabsContent value="projects" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle>Projetos Recentes</CardTitle>
                <CardDescription>
                  Gerencie seus projetos ativos e veja seu progresso.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {activeProjects.length > 0 ? (
                  activeProjects.map((project) => (
                    <div
                      key={project.id}
                      className="flex flex-col justify-between gap-2 rounded-lg border p-4 sm:flex-row sm:items-center"
                    >
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-medium">{project.title}</h3>
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
                        </div>
                        <div className="mt-1 flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-3.5 w-3.5" />
                          <span>Criado em {formatDate(project.createdAt)}</span>
                          <CircleDollarSign className="ml-2 h-3.5 w-3.5" />
                          <span>R$ {project.budget.toLocaleString()}</span>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className="mt-2 sm:mt-0"
                      >
                        <Link href={ROUTES.PROJECT_DETAILS(project.id)}>
                          Ver Detalhes
                        </Link>
                      </Button>
                    </div>
                  ))
                ) : (
                  <div className="flex flex-col items-center justify-center py-10 text-center">
                    <Activity className="h-10 w-10 text-muted-foreground" />
                    <h3 className="mt-4 text-lg font-medium">
                      Nenhum projeto ativo
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      Crie um novo projeto para começar a receber propostas.
                    </p>
                    <Button className="mt-4" asChild>
                      <Link href={ROUTES.CREATE_PROJECT}>
                        <PlusIcon className="mr-2 h-4 w-4" /> Criar Projeto
                      </Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="messages">
            <Card>
              <CardHeader>
                <CardTitle>Mensagens Recentes</CardTitle>
                <CardDescription>
                  Comunicação com profissionais sobre seus projetos.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center justify-center py-10 text-center">
                  <MessageSquare className="h-10 w-10 text-muted-foreground" />
                  <h3 className="mt-4 text-lg font-medium">
                    Nenhuma mensagem recente
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">
                    As mensagens de profissionais aparecerão aqui.
                  </p>
                  <Button className="mt-4" variant="outline" asChild>
                    <Link href={ROUTES.MESSAGES}>
                      Ver Todas as Mensagens
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <div className="space-y-6 lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>Atividades Recentes</CardTitle>
              <CardDescription>
                Atualizações dos seus projetos nas últimas semanas.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="relative mt-0.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Bell className="h-4 w-4 text-primary" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-8 flex justify-center">
                      <div className="w-px bg-border" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Nova proposta recebida</p>
                    <p className="text-sm text-muted-foreground">
                      Você recebeu uma nova proposta para o projeto "Sistema de Irrigação Automatizado".
                    </p>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Há 2 horas atrás</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-0.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-4 w-4 text-primary" />
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 top-8 flex justify-center">
                      <div className="w-px bg-border" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Nova mensagem</p>
                    <p className="text-sm text-muted-foreground">
                      Carlos Mendes enviou uma mensagem sobre o seu projeto.
                    </p>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Há 1 dia atrás</span>
                    </div>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="relative mt-0.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                      <Activity className="h-4 w-4 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-medium">Projeto criado</p>
                    <p className="text-sm text-muted-foreground">
                      Você criou um novo projeto "Sistema de Monitoramento de Temperatura".
                    </p>
                    <div className="mt-1 flex items-center text-xs text-muted-foreground">
                      <Clock className="mr-1 h-3 w-3" />
                      <span>Há 3 dias atrás</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}