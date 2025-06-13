
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2, MapPin } from "lucide-react";
import { ChefDeQuartier } from "@/types/database";

interface ChefFormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  quartier: string;
  identifiantChef: string;
}

const ChefQuartierManagement = () => {
  const [chefs, setChefs] = useState<ChefDeQuartier[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const form = useForm<ChefFormData>();

  const onSubmit = (data: ChefFormData) => {
    console.log("Création chef de quartier:", data);
    // Ici on intégrerait avec la base de données
    setIsCreateOpen(false);
    form.reset();
  };

  const mockChefs = [
    {
      id: "1",
      identifiantChef: "CHF-001",
      quartier: "Plateau",
      dateNomination: new Date("2023-02-10"),
      personneId: "p3"
    },
    {
      id: "2",
      identifiantChef: "CHF-002",
      quartier: "Almadies",
      dateNomination: new Date("2023-04-15"),
      personneId: "p4"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center space-x-2">
            <MapPin className="h-5 w-5 text-orange-600" />
            <span>Gestion des Chefs de Quartier</span>
          </CardTitle>
          <CardDescription>
            Créer et gérer les comptes des chefs de quartier
          </CardDescription>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-orange-600 hover:bg-orange-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouveau Chef
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Créer un Chef de Quartier</DialogTitle>
              <DialogDescription>
                Remplissez les informations pour créer un nouveau compte chef de quartier
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="prenom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Prénom</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="nom"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Nom</FormLabel>
                        <FormControl>
                          <Input {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input type="email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="telephone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Téléphone</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="quartier"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Quartier</FormLabel>
                      <FormControl>
                        <Input placeholder="ex: Plateau, Almadies, Point E..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="identifiantChef"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identifiant Chef</FormLabel>
                      <FormControl>
                        <Input placeholder="CHF-XXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="submit" className="bg-orange-600 hover:bg-orange-700">
                    Créer le Chef
                  </Button>
                </div>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Identifiant</TableHead>
              <TableHead>Quartier</TableHead>
              <TableHead>Date de nomination</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockChefs.map((chef) => (
              <TableRow key={chef.id}>
                <TableCell className="font-medium">{chef.identifiantChef}</TableCell>
                <TableCell>{chef.quartier}</TableCell>
                <TableCell>{chef.dateNomination.toLocaleDateString('fr-FR')}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit2 className="h-3 w-3" />
                    </Button>
                    <Button variant="outline" size="sm" className="text-red-600">
                      <Trash2 className="h-3 w-3" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};

export default ChefQuartierManagement;
