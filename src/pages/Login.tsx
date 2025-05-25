
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { FileText, User, Shield } from "lucide-react";
import Navbar from "@/components/Navbar";

const Login = () => {
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
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="citizen" className="flex items-center space-x-2">
                <User className="w-4 h-4" />
                <span>Citoyen</span>
              </TabsTrigger>
              <TabsTrigger value="agent" className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Agent</span>
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
                  <Button asChild className="w-full bg-green-600 hover:bg-green-700">
                    <Link to="/dashboard">Se connecter</Link>
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
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default Login;
