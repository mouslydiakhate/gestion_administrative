
// Types basés sur le diagramme de base de données

export interface PersonneMarite {
  id: string;
  prenom: string;
  nom: string;
  dateNaissance: Date;
  lieuNaissance: string;
  nationalite: string;
  profession: string;
  adresse: string;
  telephone: string;
  email: string;
  nin: string; // Numéro d'Identification Nationale
  situationMatrimoniale: 'CELIBATAIRE' | 'MARIE' | 'DIVORCE' | 'VEUF';
  createdAt: Date;
  updatedAt: Date;
}

export interface Citoyen {
  id: string;
  personneId: string;
  motDePasse: string;
  statutCompte: 'ACTIF' | 'INACTIF' | 'SUSPENDU';
  dateInscription: Date;
  derniereConnexion: Date;
}

export interface AgentMunicipal {
  id: string;
  personneId: string;
  identifiantAgent: string;
  motDePasse: string;
  service: string;
  dateEmbauche: Date;
  statutAgent: 'ACTIF' | 'INACTIF';
}

export interface Administrateur {
  id: string;
  personneId: string;
  identifiantAdmin: string;
  motDePasse: string;
  niveauAcces: 'SUPER_ADMIN' | 'ADMIN' | 'MODERATEUR';
  dateCreation: Date;
}

export interface ChefDeQuartier {
  id: string;
  personneId: string;
  quartier: string;
  identifiantChef: string;
  motDePasse: string;
  dateNomination: Date;
}

export interface TypeDocument {
  id: string;
  nom: string;
  description: string;
  prix: number;
  delaiTraitement: number; // en jours
  documentsRequis: string[];
  isActif: boolean;
}

export interface DemandeDocument {
  id: string;
  citoyenId: string;
  typeDocumentId: string;
  datedemande: Date;
  statut: 'EN_ATTENTE' | 'EN_COURS' | 'APPROUVE' | 'REJETE' | 'TERMINE';
  motifRejet?: string;
  dateTraitement?: Date;
  agentTraitantId?: string;
  montantPaye: number;
  statutPaiement: 'EN_ATTENTE' | 'PAYE' | 'REMBOURSE';
  numeroDemande: string;
}

export interface Notification {
  id: string;
  destinataireId: string;
  typeDestinataire: 'CITOYEN' | 'AGENT' | 'ADMIN' | 'CHEF_QUARTIER';
  titre: string;
  message: string;
  type: 'INFO' | 'WARNING' | 'SUCCESS' | 'ERROR';
  isLue: boolean;
  dateEnvoi: Date;
  dateLecture?: Date;
}

export interface Fichier {
  id: string;
  nom: string;
  cheminFichier: string;
  taille: number;
  typeMime: string;
  demandeId?: string;
  uploadedBy: string;
  dateUpload: Date;
}
