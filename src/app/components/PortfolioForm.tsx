"use client";

import {z} from "zod"
import { Button } from "@/components/ui/button";
import { FormControl, FormDescription, FormField, FormItem, FormLabel, Form, FormMessage,    
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

const MAX_FILE_SIZE = 5000000 // 5MB

const formSchema = z.object({
    title: z.string().min(2, 
        {message: "O título deve ter pelo menos 2 caracteres"}
        ).max(50,
            {message: "O título deve ter no máximo 50 caracteres"}
        ),
    description: z.string(),
    image: z.any()
        .refine((files) => files?.length == 1, {message: "A imagem é obrigatória"})
        .refine((files) => files?.[0].size <= MAX_FILE_SIZE, {message: "A imagem deve ter no máximo 5MB"}),
    tags: z.string(),
    projectUrl: z.string().optional().refine(
            (url) => !url || z.string().url().safeParse(url).success, 
            { message:"URL inválida"}
    ),
    githubUrl: z.string().optional().refine(
            (url) => !url || z.string().url().safeParse(url).success, 
            { message:"URL inválida"}
),
})

export default function portfolioForm() {
    const [previewImage, setPreviewImage] = useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title:"",
            description:"",
            tags:"",
            projectUrl:"",
            githubUrl:""
        }
    });

    const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (!file) return
    
        const reader = new FileReader()
        
        reader.onloadend = () => {
            setPreviewImage(reader.result as string)
        }  
        
        reader.readAsDataURL(file)
    }

    const handleFormSubmit = (value: z.infer<typeof formSchema>) => {
        console.log("Formulário enviado", value)
    }

    return (
        <div className="flex flex-col md:flex-row gap-6">
            <Card className="w-full md:w-1/2 px-8 py-4">
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
                 name="image" 
                 render={() => (
                    <FormItem>
                        <FormLabel>URL da Imagem</FormLabel>
                        <FormControl>
                            <Input 
                                type="file"
                                accept="image/*"
                                onChange={handleImageUpload}
                            />
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
    </Card>
    <Card className="w-full  md:w-1/2">
                <CardHeader>
                    <CardTitle>Preview da Imagem</CardTitle>
                </CardHeader>
                <CardContent>
                    {previewImage ? (
                        <div className="relative h-64">
                            <Image 
                                alt="Preview da Imagem do projeto"
                                src={previewImage}
                                layout="fill"
                                objectFit="cover"
                                className="rouded-md"
                            />
                        </div>
                    ) : (
                        <div className="w-full h-64 flex items-center justify-center rounded-md">
                            <p>Nenhuma imagem selecionada</p>
                        </div>
                    )}
                </CardContent>
    </Card>
        </div>
    );
}