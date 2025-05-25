
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { FileText, Download, Clock, CheckCircle, AlertCircle, User } from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";

const Dashboard = () => {
  const requests = [
    {
      id: "REQ-001",
      type: "Extrait de naissance",
      status: "completed",
      date: "2024-01-15",
      amount: "2,500 FCFA"
    },
    {
      id: "REQ-002", 
      type: "Casier judiciaire",
      status: "processing",
      date: "2024-01-20",
      amount: "5,000 FCFA"
    },
    {
      id: "REQ-003",
      type: "Certificat de nationalité",
      status: "pending",
      date: "2024-01-22",
      amount: "10,000 FCFA"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Terminé</Badge>;
      case "processing":
        return <Badge className="bg-yellow-100 text-yellow-800"><Clock className="w-3 h-3 mr-1" />En cours</Badge>;
      case "pending":
        return <Badge className="bg-gray-100 text-gray-800"><AlertCircle className="w-3 h-3 mr-1" />En attente</Badge>;
      default:
        return <Badge>{status}</Badge>;
    }
  };

  const quickServices = [
    {
      title: "Extrait de naissance",
      description: "Demande d'extrait de naissance",
      icon: FileText,
      route: "/request/birth-certificate"
    },
    {
      title: "Casier judiciaire",
      description: "Bulletin de casier judiciaire",
      icon: FileText,
      route: "/request/criminal-record"
    },
    {
      title: "Certificat de nationalité",
      description: "Certificat de nationalité sénégalaise",
      icon: FileText,
      route: "/request/nationality-certificate"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Mon espace</h1>
            <p className="text-gray-600">Bienvenue, Amadou Diallo</p>
          </div>
          <div className="flex items-center space-x-2">
            <User className="w-5 h-5 text-gray-600" />
            <span className="text-sm text-gray-600">NIN: 1234567890</span>
          </div>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Vue d'ensemble</TabsTrigger>
            <TabsTrigger value="requests">Mes demandes</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
            <TabsTrigger value="profile">Profil</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Statistics Cards */}
            <div className="grid md:grid-cols-4 gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Total demandes</p>
                      <p className="text-2xl font-bold text-gray-900">3</p>
                    </div>
                    <FileText className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">Terminées</p>
                      <p className="text-2xl font-bold text-green-600">1</p>
                    </div>
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">En cours</p>
                      <p className="text-2xl font-bold text-yellow-600">1</p>
                    </div>
                    <Clock className="w-8 h-8 text-yellow-600" />
                  </div>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-gray-600">En attente</p>
                      <p className="text-2xl font-bold text-gray-600">1</p>
                    </div>
                    <AlertCircle className="w-8 h-8 text-gray-600" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Services */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Services rapides</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {quickServices.map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer">
                    <CardHeader>
                      <CardTitle className="flex items-center space-x-2">
                        <service.icon className="w-5 h-5 text-green-600" />
                        <span>{service.title}</span>
                      </CardTitle>
                      <CardDescription>{service.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button asChild className="w-full">
                        <Link to={service.route}>Faire une demande</Link>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requests" className="space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-semibold">Mes demandes</h2>
              <Button asChild>
                <Link to="/request/new">Nouvelle demande</Link>
              </Button>
            </div>
            
            <div className="space-y-4">
              {requests.map((request) => (
                <Card key={request.id}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-4">
                          <div>
                            <h3 className="font-semibold">{request.type}</h3>
                            <p className="text-sm text-gray-600">#{request.id}</p>
                          </div>
                          {getStatusBadge(request.status)}
                        </div>
                        <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                          <span>Demandé le {request.date}</span>
                          <span>Montant: {request.amount}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {request.status === "completed" && (
                          <Button size="sm" variant="outline">
                            <Download className="w-4 h-4 mr-2" />
                            Télécharger
                          </Button>
                        )}
                        <Button size="sm" variant="ghost">Détails</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Documents téléchargeables</CardTitle>
                <CardDescription>
                  Vos documents traités et prêts au téléchargement
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 border rounded-lg">
                    <div className="flex items-center space-x-3">
                      <FileText className="w-8 h-8 text-green-600" />
                      <div>
                        <p className="font-medium">Extrait de naissance</p>
                        <p className="text-sm text-gray-600">Généré le 15/01/2024</p>
                      </div>
                    </div>
                    <Button size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Télécharger PDF
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Informations personnelles</CardTitle>
                <CardDescription>
                  Gérez vos informations de profil
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="text-sm font-medium">Prénom</Label>
                    <p className="text-sm text-gray-600">Amadou</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Nom</Label>
                    <p className="text-sm text-gray-600">Diallo</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Email</Label>
                    <p className="text-sm text-gray-600">amadou.diallo@email.com</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">Téléphone</Label>
                    <p className="text-sm text-gray-600">+221 77 123 45 67</p>
                  </div>
                  <div>
                    <Label className="text-sm font-medium">NIN</Label>
                    <p className="text-sm text-gray-600">1234567890</p>
                  </div>
                </div>
                <Button>Modifier les informations</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Dashboard;
