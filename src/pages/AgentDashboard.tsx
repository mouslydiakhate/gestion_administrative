
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { FileText, Users, Clock, CheckCircle, AlertCircle, Filter, Search } from "lucide-react";
import Navbar from "@/components/Navbar";

const AgentDashboard = () => {
  const pendingRequests = [
    {
      id: "REQ-001",
      citizen: "Amadou Diallo",
      type: "Extrait de naissance",
      status: "pending",
      date: "2024-01-20",
      priority: "normal"
    },
    {
      id: "REQ-002",
      citizen: "Fatou Sow", 
      type: "Casier judiciaire",
      status: "processing",
      date: "2024-01-21",
      priority: "urgent"
    },
    {
      id: "REQ-003",
      citizen: "Moussa Kane",
      type: "Certificat de nationalité", 
      status: "review",
      date: "2024-01-22",
      priority: "normal"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "pending":
        return <Badge className="bg-gray-100 text-gray-800">En attente</Badge>;
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800">En cours</Badge>;
      case "review":
        return <Badge className="bg-blue-100 text-blue-800">À réviser</Badge>;
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Terminé</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      case "high":
        return <Badge className="bg-orange-100 text-orange-800">Prioritaire</Badge>;
      default:
        return <Badge variant="secondary">Normal</Badge>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <FileText className="w-8 h-8 text-red-600" />
              <span className="text-xl font-bold text-gray-900">eGov Agent</span>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Agent: Marie Ndiaye</span>
              <Button variant="outline" size="sm">Déconnexion</Button>
            </div>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Tableau de bord agent</h1>
            <p className="text-gray-600">Gestion des demandes administratives</p>
          </div>
        </div>

        <Tabs defaultValue="requests" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="requests">Demandes</TabsTrigger>
            <TabsTrigger value="statistics">Statistiques</TabsTrigger>
            <TabsTrigger value="citizens">Citoyens</TabsTrigger>
            <TabsTrigger value="reports">Rapports</TabsTrigger>
          </TabsList>

          <TabsContent value="requests" className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">En attente</p>
                      <p className="text-2xl font-bold text-gray-900">12</p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">En cours</p>
                      <p className="text-2xl font-bold text-yellow-600">8</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Terminées</p>
                      <p className="text-2xl font-bold text-green-600">45</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Aujourd'hui</p>
                      <p className="text-2xl font-bold text-blue-600">5</p>
                    </div>
                    <FileText className="w-8 h-8 text-blue-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Filters */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Filter className="w-5 h-5" />
                  <span>Filtres</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex space-x-4">
                  <div className="flex-1">
                    <div className="relative">
                      <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                      <Input placeholder="Rechercher par nom ou numéro..." className="pl-10" />
                    </div>
                  </div>
                  <Select>
                    <SelectTrigger className="w-48">
                      <SelectValue placeholder="Type de document" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous les documents</SelectItem>
                      <SelectItem value="birth">Extrait de naissance</SelectItem>
                      <SelectItem value="criminal">Casier judiciaire</SelectItem>
                      <SelectItem value="nationality">Certificat de nationalité</SelectItem>
                    </SelectContent>
                  </Select>
                  <Select>
                    <SelectTrigger className="w-32">
                      <SelectValue placeholder="Statut" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Tous</SelectItem>
                      <SelectItem value="pending">En attente</SelectItem>
                      <SelectItem value="processing">En cours</SelectItem>
                      <SelectItem value="review">À réviser</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </CardContent>
            </Card>

            {/* Requests List */}
            <div className="space-y-4">
              {pendingRequests.map((request) => (
                <Card key={request.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="font-semibold">{request.type}</h3>
                            <p className="text-sm text-gray-600">#{request.id} - {request.citizen}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            {getStatusBadge(request.status)}
                            {getPriorityBadge(request.priority)}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-gray-600">
                          <span>Demandé le {request.date}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="outline">Voir détails</Button>
                        <Button size="sm" className="bg-green-600 hover:bg-green-700">Traiter</Button>
                        <Button size="sm" variant="outline" className="text-red-600 border-red-600">Rejeter</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="statistics">
            <div className="grid md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle>Statistiques mensuelles</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Demandes traitées</span>
                      <span className="font-semibold">156</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Temps moyen de traitement</span>
                      <span className="font-semibold">2.3 jours</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Taux de satisfaction</span>
                      <span className="font-semibold">98%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Répartition par type</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span>Extrait de naissance</span>
                      <span className="font-semibold">45%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Casier judiciaire</span>
                      <span className="font-semibold">35%</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Certificat de nationalité</span>
                      <span className="font-semibold">20%</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="citizens">
            <Card>
              <CardHeader>
                <CardTitle>Gestion des citoyens</CardTitle>
                <CardDescription>
                  Recherche et gestion des comptes citoyens
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="relative">
                    <Search className="w-4 h-4 absolute left-3 top-3 text-gray-400" />
                    <Input placeholder="Rechercher un citoyen par nom, email ou NIN..." className="pl-10" />
                  </div>
                  
                  <div className="text-center py-8 text-gray-500">
                    <Users className="w-12 h-12 mx-auto mb-4 text-gray-300" />
                    <p>Utilisez la recherche pour trouver un citoyen</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports">
            <Card>
              <CardHeader>
                <CardTitle>Rapports et exports</CardTitle>
                <CardDescription>
                  Générez des rapports et exportez les données
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold">Rapports disponibles</h3>
                    <Button className="w-full" variant="outline">
                      Rapport mensuel (PDF)
                    </Button>
                    <Button className="w-full" variant="outline">
                      Export des demandes (CSV)
                    </Button>
                    <Button className="w-full" variant="outline">
                      Statistiques détaillées (Excel)
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="font-semibold">Période</h3>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Sélectionner la période" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="current-month">Mois en cours</SelectItem>
                        <SelectItem value="last-month">Mois dernier</SelectItem>
                        <SelectItem value="quarter">Trimestre</SelectItem>
                        <SelectItem value="year">Année</SelectItem>
                      </SelectContent>
                    </Select>
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

export default AgentDashboard;
