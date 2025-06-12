
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DemandeDocument, TypeDocument } from "@/types/database";
import { Calendar, FileText, User, CreditCard } from "lucide-react";

interface DocumentRequestStatusProps {
  demande: DemandeDocument;
  typeDocument: TypeDocument;
  onViewDetails: (demandeId: string) => void;
}

const DocumentRequestStatus = ({ demande, typeDocument, onViewDetails }: DocumentRequestStatusProps) => {
  const getStatusColor = (statut: DemandeDocument['statut']) => {
    switch (statut) {
      case 'EN_ATTENTE':
        return 'bg-yellow-100 text-yellow-800';
      case 'EN_COURS':
        return 'bg-blue-100 text-blue-800';
      case 'APPROUVE':
        return 'bg-green-100 text-green-800';
      case 'REJETE':
        return 'bg-red-100 text-red-800';
      case 'TERMINE':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getPaymentStatusColor = (statut: DemandeDocument['statutPaiement']) => {
    switch (statut) {
      case 'PAYE':
        return 'bg-green-100 text-green-800';
      case 'EN_ATTENTE':
        return 'bg-yellow-100 text-yellow-800';
      case 'REMBOURSE':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card className="hover:shadow-md transition-shadow">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center space-x-2">
            <FileText className="w-5 h-5" />
            <span>{typeDocument.nom}</span>
          </CardTitle>
          <Badge className={getStatusColor(demande.statut)}>
            {demande.statut.replace('_', ' ')}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <User className="w-4 h-4 text-gray-500" />
            <span>N° {demande.numeroDemande}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-gray-500" />
            <span>{new Date(demande.datedemande).toLocaleDateString()}</span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <CreditCard className="w-4 h-4 text-gray-500" />
            <span className="text-sm">{demande.montantPaye.toLocaleString()} FCFA</span>
          </div>
          <Badge className={getPaymentStatusColor(demande.statutPaiement)}>
            {demande.statutPaiement.replace('_', ' ')}
          </Badge>
        </div>
        
        {demande.motifRejet && (
          <div className="p-3 bg-red-50 border border-red-200 rounded-md">
            <p className="text-sm text-red-700">
              <strong>Motif de rejet :</strong> {demande.motifRejet}
            </p>
          </div>
        )}
        
        <Button 
          variant="outline" 
          className="w-full"
          onClick={() => onViewDetails(demande.id)}
        >
          Voir les détails
        </Button>
      </CardContent>
    </Card>
  );
};

export default DocumentRequestStatus;
