import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle,  } from "@/components/ui/card";
import { Badge } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";



export function PortfolioCard() {
    return (
        <Card>
            <div>
                <Image 
                    alt="Titulo do Portfolio"
                    src=""
                />
            </div>
            <CardHeader>
                <CardTitle>Titulo</CardTitle>
                <CardDescription>Descrição</CardDescription>
            </CardHeader>
            <CardContent>
                <Badge>React</Badge>
                <Badge>Next.js</Badge>
                <Badge>Typescript</Badge>
            </CardContent>
            <CardFooter>
                <Button>Ver Detalhes</Button>
            </CardFooter>
        </Card>
    )
}