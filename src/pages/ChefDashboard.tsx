
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MapPin, Users, FileText, CheckCircle, Clock, AlertCircle } from "lucide-react";
import Navbar from "@/components/Navbar";

const ChefDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord Chef de Quartier</h1>
            <p className="text-gray-600">Quartier Plateau - Zone Administrative</p>
          </div>
          <Badge variant="outline" className="bg-orange-100 text-orange-800">
            Chef de Quartier
          </Badge>
        </div>

        {/* Statistiques du quartier */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Résidents</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">2,847</div>
              <p className="text-xs text-muted-foreground">Quartier Plateau</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Demandes ce Mois</CardTitle>
              <FileText className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">127</div>
              <p className="text-xs text-muted-foreground">+12% vs mois dernier</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Validations Requises</CardTitle>
              <Clock className="h-4 w-4 text-orange-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">En attente</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Taux de Validation</CardTitle>
              <CheckCircle className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89.3%</div>
              <p className="text-xs text-muted-foreground">Ce mois</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="validations" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="validations">Validations</TabsTrigger>
            <TabsTrigger value="residents">Résidents</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="validations" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Demandes à Valider</CardTitle>
                <CardDescription>
                  Validations de résidence et attestations pour votre quartier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <AlertCircle className="h-8 w-8 text-orange-600" />
                      <div>
                        <h3 className="font-medium">Mamadou Diallo</h3>
                        <p className="text-sm text-gray-600">Attestation de résidence - Rue 15</p>
                        <p className="text-xs text-gray-500">Demandé il y a 2 jours</p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Rejeter</Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Valider</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <AlertCircle className="h-8 w-8 text-orange-600" />
                      <div>
                        <h3 className="font-medium">Fatou Ndiaye</h3>
                        <p className="text-sm text-gray-600">Certificat de domicile - Avenue Hassan II</p>
                        <p className="text-xs text-gray-500">Demandé il y a 1 jour</p>
                      </div>
                    </div>
                    <div className="space-x-2">
                      <Button variant="outline" size="sm">Rejeter</Button>
                      <Button size="sm" className="bg-green-600 hover:bg-green-700">Valider</Button>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                      <div>
                        <h3 className="font-medium">Ousmane Ba</h3>
                        <p className="text-sm text-gray-600">Attestation de résidence - Rue 22</p>
                        <p className="text-xs text-gray-500">Validé il y a 3 heures</p>
                      </div>
                    </div>
                    <Badge variant="outline" className="bg-green-100 text-green-800">
                      Validé
                    </Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="residents" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des Résidents</CardTitle>
                <CardDescription>
                  Résidents enregistrés dans votre quartier
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-medium">Zone Résidentielle A</h3>
                        <p className="text-sm text-gray-600">1,245 résidents - Rues 1-10</p>
                      </div>
                    </div>
                    <Button variant="outline">Gérer</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-medium">Zone Résidentielle B</h3>
                        <p className="text-sm text-gray-600">987 résidents - Rues 11-20</p>
                      </div>
                    </div>
                    <Button variant="outline">Gérer</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-4">
                      <MapPin className="h-8 w-8 text-blue-600" />
                      <div>
                        <h3 className="font-medium">Zone Commerciale</h3>
                        <p className="text-sm text-gray-600">615 résidents - Avenues principales</p>
                      </div>
                    </div>
                    <Button variant="outline">Gérer</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Rapports du Quartier</CardTitle>
                <CardDescription>
                  Statistiques et rapports de votre zone
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Rapport Mensuel</h3>
                      <p className="text-sm text-gray-600">Activités du quartier ce mois</p>
                    </div>
                    <Button>Générer</Button>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div>
                      <h3 className="font-medium">Statistiques de Validation</h3>
                      <p className="text-sm text-gray-600">Performance des validations</p>
                    </div>
                    <Button variant="outline">Consulter</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Profil Chef de Quartier</CardTitle>
                <CardDescription>
                  Informations personnelles et zone de responsabilité
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium">Nom complet</label>
                      <p className="text-gray-600">Ibrahima Sarr</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Quartier</label>
                      <p className="text-gray-600">Plateau</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Date de nomination</label>
                      <p className="text-gray-600">15 Mars 2023</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium">Téléphone</label>
                      <p className="text-gray-600">+221 77 XXX XX XX</p>
                    </div>
                  </div>
                  <div className="pt-4">
                    <Button>Modifier le Profil</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ChefDashboard;
