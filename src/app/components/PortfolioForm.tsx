"use client";

import {z} from "zod"
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, Form, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
    title: z.string().min(2, 
        {message: "O título deve ter pelo menos 2 caracteres"}
        ).max(50,
            {message: "O título deve ter no máximo 50 caracteres"}
        ),
    description: z.string(),
    imageUrl: z.string().url({message: "A URL da imagem é inválida"}),
    tags: z.string(),
    projectUrl: z.string().url({message: "A URL do projeto é inválido"}),
    githubUrl: z.string().url({message: "A URL do github é inválido"})
})

export default function portfolioForm() {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            description:"",
            imageUrl:"",
            tags:"",
            projectUrl:"",
            githubUrl:""
        }
    });

    const handleFormSubmit = (value: z.infer<typeof formSchema>) => {
        console.log("Formulário enviado", value)
    }

    return (
        <Form {...form}>
            <form className="space-y-8" onSubmit={form.handleSubmit(handleFormSubmit)}>    
                <FormField
                 control={form.control}
                 name="title" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>Título do Projeto</FormLabel>
                        <FormControl>
                            <Input {...field}/>
                        </FormControl>
                        <FormDescription>o nome do seu projeto</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                 control={form.control}
                 name="description" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>Descrição</FormLabel>
                        <FormControl>
                            <Textarea {...field} />
                        </FormControl>
                        <FormDescription>uma descrição detalhada do seu projeto</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                 control={form.control}
                 name="imageUrl" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>URL da Imagem</FormLabel>
                        <FormControl>
                            <Input {...field} />
                        </FormControl>
                        <FormDescription>
                         a URL da imgem principal do seu projeto
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                 control={form.control}
                 name="tags" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>Tags</FormLabel>
                        <FormControl>
                            <Input placeholder="React, Next.js, Tailwind" {...field} />
                        </FormControl>
                        <FormDescription>Tags separadas por vírgula</FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                 control={form.control}
                 name="projectUrl" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>URL do projeto</FormLabel>
                        <FormControl>
                            <Input placeholder="https://www.meu-projeto.com" {...field} />
                        </FormControl>
                        <FormDescription>
                            A URL onde seu projeto está hospedado
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <FormField
                 control={form.control}
                 name="githubUrl" 
                 render={({field}) => (
                    <FormItem>
                        <FormLabel>URL do Github</FormLabel>
                        <FormControl>
                            <Input placeholder="https://www.github.com/usuario/repositorio" {...field} />
                        </FormControl>
                        <FormDescription>
                            A URL do repositório Github do projeto
                        </FormDescription>
                        <FormMessage />
                    </FormItem>
                )}
            />
            <Button type="submit">Salvar</Button>
        </form>
    </Form>
    );
}