
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { FileText, UserCheck } from "lucide-react";
import Navbar from "@/components/Navbar";

const Register = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-yellow-50 to-red-50">
      <Navbar />
      
      <div className="container mx-auto px-4 py-16 flex items-center justify-center">
        <div className="w-full max-w-lg">
          <div className="text-center mb-8">
            <UserCheck className="w-16 h-16 text-green-600 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900">Créer un compte</h1>
            <p className="text-gray-600">Rejoignez la plateforme eGov Sénégal</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Inscription Citoyen</CardTitle>
              <CardDescription>
                Créez votre compte pour accéder aux services en ligne
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">Prénom</Label>
                  <Input id="firstName" placeholder="Votre prénom" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Nom</Label>
                  <Input id="lastName" placeholder="Votre nom" />
                </div>
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="votre@email.com" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Téléphone</Label>
                <Input id="phone" placeholder="+221 XX XXX XX XX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="nin">Numéro d'Identification Nationale (NIN)</Label>
                <Input id="nin" placeholder="XXXXXXXXXX" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password">Mot de passe</Label>
                <Input id="password" type="password" />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
                <Input id="confirmPassword" type="password" />
              </div>
              
              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <Label htmlFor="terms" className="text-sm">
                  J'accepte les{" "}
                  <Link to="/terms" className="text-green-600 hover:underline">
                    conditions d'utilisation
                  </Link>{" "}
                  et la{" "}
                  <Link to="/privacy" className="text-green-600 hover:underline">
                    politique de confidentialité
                  </Link>
                </Label>
              </div>
              
              <Button className="w-full bg-green-600 hover:bg-green-700">
                Créer mon compte
              </Button>
              
              <div className="text-center text-sm">
                Déjà un compte ?{" "}
                <Link to="/login" className="text-green-600 hover:underline">
                  Se connecter
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Register;
