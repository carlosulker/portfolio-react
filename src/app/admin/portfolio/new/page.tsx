import PortfolioForm from "@/app/components/PortfolioForm";

export default function NewPortfolioPage(){
    return(
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-semibold mb-8">
              Adicionar Novo Projeto ao Portfólio
            </h1>
            <PortfolioForm />
        </div>
    )
}