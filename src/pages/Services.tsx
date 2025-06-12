
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useDocumentTypes } from "@/hooks/useDocumentTypes";
import DocumentTypeCard from "@/components/DocumentTypeCard";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Loader2 } from "lucide-react";

const Services = () => {
  const { documentTypes, loading, error } = useDocumentTypes();
  const navigate = useNavigate();

  const handleRequestDocument = (documentId: string) => {
    // Rediriger vers la page de connexion si pas connecté
    // ou vers le formulaire de demande si connecté
    navigate('/login');
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <div className="flex items-center space-x-2">
            <Loader2 className="w-6 h-6 animate-spin text-green-600" />
            <span>Chargement des services...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
        <Navbar />
        <div className="container mx-auto px-4 py-16 flex items-center justify-center">
          <Card className="w-full max-w-md">
            <CardHeader>
              <CardTitle className="text-red-600">Erreur</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{error}</p>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Nos Services
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Découvrez tous les documents officiels que vous pouvez demander en ligne
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {documentTypes.map((documentType) => (
            <DocumentTypeCard
              key={documentType.id}
              document={documentType}
              onRequestDocument={handleRequestDocument}
            />
          ))}
        </div>
        
        {documentTypes.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">Aucun service disponible pour le moment.</p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default Services;
