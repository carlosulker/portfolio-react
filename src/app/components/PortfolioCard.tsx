import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,  } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type PortfolioCardProps = {
    id: string;
    title: string;
    description: string;
    ImageUrl: string;
    tags: string[];
}

export function PortfolioCard({id, title, description, ImageUrl, tags}: PortfolioCardProps) {
    return (
        <Card className="overflow-hiddin">
            <div className="relative h-48">
                <Image 
                    alt={title}
                    src={ImageUrl}   
                    layout="fill"
                    objectFit="cover"

                />
            </div>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <Badge key={tag}>{tag}</Badge>
                    ))}
                </div>
            </CardContent>
            <CardFooter>
                <Button asChild>
                   <Link href={`/portfolio/${id}`}>Ver Detalhes</Link>
                </Button>
            </CardFooter>
        </Card>
    )
}