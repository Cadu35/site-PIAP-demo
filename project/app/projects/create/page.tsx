"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { FileUp, Info } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ROUTES } from "@/lib/constants";

const projectFormSchema = z.object({
  title: z
    .string()
    .min(5, { message: "O título deve ter pelo menos 5 caracteres" })
    .max(100, { message: "O título não pode exceder 100 caracteres" }),
  description: z
    .string()
    .min(20, { message: "A descrição deve ter pelo menos 20 caracteres" })
    .max(500, { message: "A descrição não pode exceder 500 caracteres" }),
  category: z.enum(["electronics", "3ddesign", "both"], {
    required_error: "Selecione uma categoria",
  }),
  budget: z
    .number({ required_error: "O orçamento é obrigatório" })
    .min(100, { message: "O orçamento mínimo é de R$ 100" }),
  requirements: z
    .string()
    .min(20, { message: "Os requisitos devem ter pelo menos 20 caracteres" }),
});

type ProjectFormValues = z.infer<typeof projectFormSchema>;

export default function CreateProjectPage() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<ProjectFormValues>({
    resolver: zodResolver(projectFormSchema),
    defaultValues: {
      title: "",
      description: "",
      budget: 500,
      requirements: "",
    },
  });

  async function onSubmit(data: ProjectFormValues) {
    setIsSubmitting(true);

    // Simulate form submission
    console.log("Form data:", data);
    
    // Simulate API call delay
    setTimeout(() => {
      setIsSubmitting(false);
      router.push(ROUTES.PROJECTS);
    }, 1500);
  }

  return (
    <div className="container py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Criar Novo Projeto</h1>
        <p className="mt-2 text-muted-foreground">
          Preencha os detalhes do seu projeto para receber propostas de profissionais qualificados.
        </p>
      </div>

      <div className="mx-auto max-w-2xl">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Título do Projeto</FormLabel>
                  <FormControl>
                    <Input placeholder="Ex: Sistema de irrigação automatizado" {...field} />
                  </FormControl>
                  <FormDescription>
                    Um título claro e descritivo ajuda os profissionais a entenderem seu projeto.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Descrição do Projeto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Descreva seu projeto em detalhes..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Forneça uma visão geral do que você precisa. Seja específico sobre o problema que está tentando resolver.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="grid gap-4 sm:grid-cols-2">
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Categoria</FormLabel>
                    <Select 
                      onValueChange={field.onChange} 
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Selecione uma categoria" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="electronics">Eletrônica</SelectItem>
                        <SelectItem value="3ddesign">Design 3D</SelectItem>
                        <SelectItem value="both">Eletrônica & Design 3D</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormDescription>
                      Selecione o tipo de expertise necessária para o projeto.
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="budget"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex items-center gap-2">
                      <FormLabel>Orçamento (R$)</FormLabel>
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Info className="h-4 w-4 text-muted-foreground" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="max-w-xs">
                              Este é o valor máximo que você está disposto a pagar. Profissionais podem enviar propostas com valores diferentes.
                            </p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </div>
                    <FormControl>
                      <Input
                        type="number"
                        min={100}
                        step={100}
                        {...field}
                        onChange={(e) => field.onChange(Number(e.target.value))}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="requirements"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Requisitos Técnicos</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Detalhe os requisitos técnicos, componentes necessários, funcionalidades, etc..."
                      className="min-h-[150px]"
                      {...field}
                    />
                  </FormControl>
                  <FormDescription>
                    Seja específico sobre as funcionalidades, componentes necessários e quaisquer restrições técnicas.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="rounded-lg border bg-muted/50 p-4">
              <div className="flex items-center gap-2">
                <FileUp className="h-5 w-5 text-muted-foreground" />
                <h3 className="text-sm font-medium">Anexos (opcional)</h3>
              </div>
              <p className="mt-1 text-sm text-muted-foreground">
                Adicione diagramas, esboços ou qualquer documento que possa ajudar a esclarecer seu projeto.
              </p>
              <Button variant="outline" className="mt-4" type="button">
                Adicionar Arquivos
              </Button>
            </div>

            <div className="flex justify-end gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => router.push(ROUTES.PROJECTS)}
              >
                Cancelar
              </Button>
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Criando..." : "Criar Projeto"}
              </Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}