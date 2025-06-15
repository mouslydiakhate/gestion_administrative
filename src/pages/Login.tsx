import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { FileText, User, Shield, Crown, MapPin } from "lucide-react";
import Navbar from "@/components/Navbar";

const Login = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const redirectUrl = searchParams.get('redirect');
  const documentType = searchParams.get('type');

  // Fonction pour gérer la connexion du citoyen
  const handleCitizenLogin = () => {
    if (redirectUrl && documentType) {
      navigate(`${redirectUrl}?type=${documentType}`);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <FileText className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Connexion</h1>
            <p className="text-gray-600">Accédez à votre espace personnel</p>
          </div>

          <Tabs defaultValue="citizen" className="w-full">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="citizen" className="flex items-center space-x-1">
                <User className="w-3 h-3" />
                <span className="text-xs">Citoyen</span>
              </TabsTrigger>
              <TabsTrigger value="agent" className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span className="text-xs">Agent</span>
              </TabsTrigger>
              <TabsTrigger value="admin" className="flex items-center space-x-1">
                <Crown className="w-3 h-3" />
                <span className="text-xs">Admin</span>
              </TabsTrigger>
              <TabsTrigger value="chef" className="flex items-center space-x-1">
                <MapPin className="w-3 h-3" />
                <span className="text-xs">Chef</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="citizen">
              <Card>
                <CardHeader>
                  <CardTitle>Espace Citoyen</CardTitle>
                  <CardDescription>
                    Connectez-vous pour accéder à vos demandes
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="citizen-email">Email</Label>
                    <Input id="citizen-email" type="email" placeholder="votre@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="citizen-password">Mot de passe</Label>
                    <Input id="citizen-password" type="password" />
                  </div>
                  <Button 
                    onClick={handleCitizenLogin}
                    className="w-full bg-green-600 hover:bg-green-700"
                  >
                    Se connecter
                  </Button>
                  <div className="text-center text-sm">
                    <Link to="/forgot-password" className="text-green-600 hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                  <div className="text-center text-sm">
                    Pas encore de compte ?{" "}
                    <Link to="/register" className="text-green-600 hover:underline">
                      S'inscrire
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agent">
              <Card>
                <CardHeader>
                  <CardTitle>Espace Agent</CardTitle>
                  <CardDescription>
                    Accès réservé aux agents administratifs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="agent-id">Identifiant agent</Label>
                    <Input id="agent-id" placeholder="AGT-XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="agent-password">Mot de passe</Label>
                    <Input id="agent-password" type="password" />
                  </div>
                  <Button asChild className="w-full bg-red-600 hover:bg-red-700">
                    <Link to="/agent-dashboard">Se connecter</Link>
                  </Button>
                  <div className="text-center text-sm">
                    <Link to="/agent-forgot" className="text-red-600 hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="admin">
              <Card>
                <CardHeader>
                  <CardTitle>Espace Administrateur</CardTitle>
                  <CardDescription>
                    Accès réservé aux administrateurs système
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="admin-id">Identifiant administrateur</Label>
                    <Input id="admin-id" placeholder="ADM-XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="admin-password">Mot de passe</Label>
                    <Input id="admin-password" type="password" />
                  </div>
                  <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                    <Link to="/admin-dashboard">Se connecter</Link>
                  </Button>
                  <div className="text-center text-sm">
                    <Link to="/admin-forgot" className="text-purple-600 hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="chef">
              <Card>
                <CardHeader>
                  <CardTitle>Espace Chef de Quartier</CardTitle>
                  <CardDescription>
                    Accès réservé aux chefs de quartier
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="chef-id">Identifiant chef</Label>
                    <Input id="chef-id" placeholder="CHF-XXXX" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="chef-password">Mot de passe</Label>
                    <Input id="chef-password" type="password" />
                  </div>
                  <Button asChild className="w-full bg-orange-600 hover:bg-orange-700">
                    <Link to="/chef-dashboard">Se connecter</Link>
                  </Button>
                  <div className="text-center text-sm">
                    <Link to="/chef-forgot" className="text-orange-600 hover:underline">
                      Mot de passe oublié ?
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
