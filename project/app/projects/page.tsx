"use client";

import * as React from "react";
import Link from "next/link";
import { 
  ArrowDownIcon, 
  ArrowUpIcon, 
  Calendar, 
  CircleDollarSign, 
  FilterIcon, 
  PlusIcon, 
  SearchIcon, 
  SlidersHorizontal 
} from "lucide-react";

import { 
  DUMMY_PROJECTS, 
  PROJECT_STATUS_COLORS, 
  PROJECT_STATUS_LABELS, 
  ROUTES 
} from "@/lib/constants";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { cn } from "@/lib/utils";
import { formatDate } from "@/lib/utils";
import { Project, ProjectFilter } from "@/lib/types";

export default function ProjectsPage() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [filters, setFilters] = React.useState<ProjectFilter>({});
  const [projects, setProjects] = React.useState<Project[]>(DUMMY_PROJECTS);
  const [sortBy, setSortBy] = React.useState<string>("newest");
  const [budgetRange, setBudgetRange] = React.useState([0, 5000]);

  const filteredProjects = React.useMemo(() => {
    let filtered = [...projects];

    // Apply search filter
    if (searchTerm) {
      const term = searchTerm.toLowerCase();
      filtered = filtered.filter(
        (project) =>
          project.title.toLowerCase().includes(term) ||
          project.description.toLowerCase().includes(term)
      );
    }

    // Apply category filter
    if (filters.category) {
      filtered = filtered.filter(
        (project) => project.category === filters.category
      );
    }

    // Apply status filter
    if (filters.status) {
      filtered = filtered.filter(
        (project) => project.status === filters.status
      );
    }

    // Apply budget filter
    if (filters.minBudget !== undefined || filters.maxBudget !== undefined) {
      filtered = filtered.filter(
        (project) =>
          project.budget >= (filters.minBudget || 0) &&
          project.budget <= (filters.maxBudget || Infinity)
      );
    }

    // Apply sorting
    if (sortBy === "newest") {
      filtered.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
    } else if (sortBy === "oldest") {
      filtered.sort((a, b) => a.createdAt.getTime() - b.createdAt.getTime());
    } else if (sortBy === "budget-high") {
      filtered.sort((a, b) => b.budget - a.budget);
    } else if (sortBy === "budget-low") {
      filtered.sort((a, b) => a.budget - b.budget);
    }

    return filtered;
  }, [projects, searchTerm, filters, sortBy]);

  const handleFilterChange = (key: keyof ProjectFilter, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const clearFilters = () => {
    setFilters({});
    setBudgetRange([0, 5000]);
    setSearchTerm("");
  };

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Projetos</h1>
        <Button asChild>
          <Link href={ROUTES.CREATE_PROJECT}>
            <PlusIcon className="mr-2 h-4 w-4" /> Criar Projeto
          </Link>
        </Button>
      </div>

      <div className="mb-6 flex flex-col gap-4 sm:flex-row">
        <div className="relative flex-1">
          <SearchIcon className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Pesquisar projetos..."
            className="pl-9"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <Select value={sortBy} onValueChange={setSortBy}>
            <SelectTrigger className="w-[180px]">
              <span className="flex items-center">
                <SlidersHorizontal className="mr-2 h-4 w-4" />
                Ordenar por
              </span>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">
                <span className="flex items-center">
                  <ArrowDownIcon className="mr-2 h-3 w-3" />
                  Mais recentes
                </span>
              </SelectItem>
              <SelectItem value="oldest">
                <span className="flex items-center">
                  <ArrowUpIcon className="mr-2 h-3 w-3" />
                  Mais antigos
                </span>
              </SelectItem>
              <SelectItem value="budget-high">
                <span className="flex items-center">
                  <ArrowDownIcon className="mr-2 h-3 w-3" />
                  Maior orçamento
                </span>
              </SelectItem>
              <SelectItem value="budget-low">
                <span className="flex items-center">
                  <ArrowUpIcon className="mr-2 h-3 w-3" />
                  Menor orçamento
                </span>
              </SelectItem>
            </SelectContent>
          </Select>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="gap-2">
                <FilterIcon className="h-4 w-4" />
                Filtros
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filtrar Projetos</SheetTitle>
                <SheetDescription>
                  Ajuste os filtros para encontrar os projetos que você procura.
                </SheetDescription>
              </SheetHeader>
              <div className="mt-6 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Categoria</h3>
                  <Select
                    value={filters.category || ""}
                    onValueChange={(value) =>
                      handleFilterChange(
                        "category",
                        value === "" ? undefined : value
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todas as categorias" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todas as categorias</SelectItem>
                      <SelectItem value="electronics">Eletrônica</SelectItem>
                      <SelectItem value="3ddesign">Design 3D</SelectItem>
                      <SelectItem value="both">Eletrônica & Design 3D</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <h3 className="text-sm font-medium">Status</h3>
                  <Select
                    value={filters.status || ""}
                    onValueChange={(value) =>
                      handleFilterChange(
                        "status",
                        value === "" ? undefined : value
                      )
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Todos os status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">Todos os status</SelectItem>
                      <SelectItem value="open">
                        {PROJECT_STATUS_LABELS.open}
                      </SelectItem>
                      <SelectItem value="in_progress">
                        {PROJECT_STATUS_LABELS.in_progress}
                      </SelectItem>
                      <SelectItem value="completed">
                        {PROJECT_STATUS_LABELS.completed}
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-medium">Orçamento</h3>
                    <p className="text-sm text-muted-foreground">
                      R$ {budgetRange[0]} - R$ {budgetRange[1]}
                    </p>
                  </div>
                  <Slider
                    value={budgetRange}
                    min={0}
                    max={5000}
                    step={100}
                    onValueChange={(value) => {
                      setBudgetRange(value);
                      handleFilterChange("minBudget", value[0]);
                      handleFilterChange("maxBudget", value[1]);
                    }}
                  />
                </div>

                <div className="flex justify-between pt-4">
                  <Button variant="outline" onClick={clearFilters}>
                    Limpar Filtros
                  </Button>
                  <Button>Aplicar Filtros</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      {filteredProjects.length === 0 ? (
        <Card className="flex flex-col items-center justify-center p-10 text-center">
          <FilterIcon className="h-10 w-10 text-muted-foreground" />
          <h2 className="mt-4 text-xl font-semibold">Nenhum projeto encontrado</h2>
          <p className="mt-2 text-muted-foreground">
            Tente ajustar seus filtros ou criar um novo projeto.
          </p>
          <Button className="mt-6" asChild>
            <Link href={ROUTES.CREATE_PROJECT}>
              <PlusIcon className="mr-2 h-4 w-4" /> Criar Projeto
            </Link>
          </Button>
        </Card>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
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
                    {PROJECT_STATUS_LABELS[project.status]}
                  </Badge>
                  <Badge variant="outline">
                    {project.category === "electronics"
                      ? "Eletrônica"
                      : project.category === "3ddesign"
                      ? "Design 3D"
                      : "Eletrônica & Design 3D"}
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
                <Button size="sm" variant="ghost" className="gap-1 px-2">
                  Ver detalhes
                </Button>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}