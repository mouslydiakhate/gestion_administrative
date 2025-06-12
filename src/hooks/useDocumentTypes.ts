
import { useState, useEffect } from 'react';
import { TypeDocument } from '@/types/database';

// Mock data - à remplacer par de vraies données depuis votre API
const mockDocumentTypes: TypeDocument[] = [
  {
    id: '1',
    nom: 'Extrait de naissance',
    description: 'Document officiel attestant de votre naissance',
    prix: 500,
    delaiTraitement: 3,
    documentsRequis: ['Copie CNI', 'Justificatif de domicile'],
    isActif: true
  },
  {
    id: '2',
    nom: 'Casier judiciaire',
    description: 'Bulletin n°3 du casier judiciaire',
    prix: 1000,
    delaiTraitement: 5,
    documentsRequis: ['Copie CNI', 'Photo d\'identité'],
    isActif: true
  },
  {
    id: '3',
    nom: 'Certificat de nationalité',
    description: 'Certificat attestant de votre nationalité sénégalaise',
    prix: 2000,
    delaiTraitement: 7,
    documentsRequis: ['Extrait de naissance', 'Copie CNI', 'Justificatif de résidence'],
    isActif: true
  }
];

export const useDocumentTypes = () => {
  const [documentTypes, setDocumentTypes] = useState<TypeDocument[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Simulation d'un appel API
    const fetchDocumentTypes = async () => {
      try {
        setLoading(true);
        // Simulation d'un délai d'API
        await new Promise(resolve => setTimeout(resolve, 1000));
        setDocumentTypes(mockDocumentTypes);
        setError(null);
      } catch (err) {
        setError('Erreur lors du chargement des types de documents');
      } finally {
        setLoading(false);
      }
    };

    fetchDocumentTypes();
  }, []);

  return { documentTypes, loading, error };
};
