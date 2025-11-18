import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface PortfolioItem {
    id: string;
    title: string;
    description: string;
    ImageUrl: string;
    tags: string[];
    githubUrl?: string;
    projectUrl?: string;
}
const item = {
    id: "abc001", 
    title: "Meu primeiro portfólio",
    description: "Criado por Carlos",
    ImageUrl: "/placeholder.svg",
    tags: ["Typescript", "React", "Next.js"],
    githubUrl: "https://github.com/carlosulker/portfolio-react.git",
    projectUrl: "www.google.com"
};

type PortfolioDetailProps = {
    id: string;
};

export default function PortfolioDetail({id}: PortfolioDetailProps){
    return (
       <div className="container mx-auto px-4 py-8">
        <Button asChild variant="ghost">
            <Link href="/portfolio">
                <ArrowLeft className="mr-2 h-5 w-5" /> Voltar ao Portfólio
            </Link>
        </Button>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="relative h-[300px] md:h-[400px]">
            <Image
              src={item.ImageUrl}
              alt={item.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
            </div>
            <div>
                <h1 className="text-4xl font-bold mb-4">{item.title}</h1>
                <p className="text-lg mb-4">{item.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {item.tags.map((tag) => (
                        <Badge variant="secondary" key={tag}>{tag}</Badge>
                    ))}
                </div>
                <div className="mt-12 space-y-2">
                    <Button asChild className="w-96">
                        <a href={item.githubUrl} target="_blank">
                            Ver código no Github
                        </a>
                    </Button>
                    <Button asChild className="w-96">
                        <a href={item.projectUrl} target="_blank">
                            Ver projeto
                        </a>
                    </Button>
                </div>
            </div>
         </div>
       </div> 
    )
}