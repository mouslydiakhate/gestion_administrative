
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { FileText, Clock, DollarSign } from "lucide-react";
import { TypeDocument } from "@/types/database";

interface DocumentTypeCardProps {
  document: TypeDocument;
  onRequestDocument: (documentId: string) => void;
}

const DocumentTypeCard = ({ document, onRequestDocument }: DocumentTypeCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300">
      <CardHeader>
        <div className="flex items-center justify-between">
          <FileText className="w-8 h-8 text-green-600" />
          <Badge variant={document.isActif ? "default" : "secondary"}>
            {document.isActif ? "Disponible" : "Indisponible"}
          </Badge>
        </div>
        <CardTitle className="text-xl">{document.nom}</CardTitle>
        <CardDescription>{document.description}</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center space-x-2">
            <DollarSign className="w-4 h-4 text-green-600" />
            <span>{document.prix.toLocaleString()} FCFA</span>
          </div>
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-blue-600" />
            <span>{document.delaiTraitement} jours</span>
          </div>
        </div>
        
        {document.documentsRequis.length > 0 && (
          <div>
            <h4 className="font-semibold text-sm mb-2">Documents requis :</h4>
            <ul className="text-xs text-gray-600 space-y-1">
              {document.documentsRequis.map((doc, index) => (
                <li key={index}>• {doc}</li>
              ))}
            </ul>
          </div>
        )}
        
        <Button 
          className="w-full" 
          onClick={() => onRequestDocument(document.id)}
          disabled={!document.isActif}
        >
          Faire une demande
        </Button>
      </CardContent>
    </Card>
  );
};

export default DocumentTypeCard;
