
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Plus, Edit2, Trash2, Shield } from "lucide-react";
import { AgentMunicipal } from "@/types/database";

interface AgentFormData {
  prenom: string;
  nom: string;
  email: string;
  telephone: string;
  service: string;
  identifiantAgent: string;
}

const AgentManagement = () => {
  const [agents, setAgents] = useState<AgentMunicipal[]>([]);
  const [isCreateOpen, setIsCreateOpen] = useState(false);
  const form = useForm<AgentFormData>();

  const onSubmit = (data: AgentFormData) => {
    console.log("Création agent:", data);
    // Ici on intégrerait avec la base de données
    setIsCreateOpen(false);
    form.reset();
  };

  const mockAgents = [
    {
      id: "1",
      identifiantAgent: "AGT-001",
      service: "État Civil",
      statutAgent: "ACTIF" as const,
      dateEmbauche: new Date("2023-01-15"),
      personneId: "p1"
    },
    {
      id: "2",
      identifiantAgent: "AGT-002",
      service: "Urbanisme",
      statutAgent: "ACTIF" as const,
      dateEmbauche: new Date("2023-03-20"),
      personneId: "p2"
    }
  ];

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="flex items-center space-x-2">
            <Shield className="h-5 w-5 text-red-600" />
            <span>Gestion des Agents Municipaux</span>
          </CardTitle>
          <CardDescription>
            Créer et gérer les comptes des agents municipaux
          </CardDescription>
        </div>
        <Dialog open={isCreateOpen} onOpenChange={setIsCreateOpen}>
          <DialogTrigger asChild>
            <Button className="bg-red-600 hover:bg-red-700">
              <Plus className="h-4 w-4 mr-2" />
              Nouvel Agent
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle>Créer un Agent Municipal</DialogTitle>
              <DialogDescription>
                Remplissez les informations pour créer un nouveau compte agent
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
                  name="service"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Service</FormLabel>
                      <FormControl>
                        <Input placeholder="ex: État Civil, Urbanisme..." {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="identifiantAgent"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Identifiant Agent</FormLabel>
                      <FormControl>
                        <Input placeholder="AGT-XXX" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex justify-end space-x-2">
                  <Button type="button" variant="outline" onClick={() => setIsCreateOpen(false)}>
                    Annuler
                  </Button>
                  <Button type="submit" className="bg-red-600 hover:bg-red-700">
                    Créer l'Agent
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
              <TableHead>Service</TableHead>
              <TableHead>Statut</TableHead>
              <TableHead>Date d'embauche</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {mockAgents.map((agent) => (
              <TableRow key={agent.id}>
                <TableCell className="font-medium">{agent.identifiantAgent}</TableCell>
                <TableCell>{agent.service}</TableCell>
                <TableCell>
                  <Badge variant={agent.statutAgent === 'ACTIF' ? 'default' : 'secondary'}>
                    {agent.statutAgent}
                  </Badge>
                </TableCell>
                <TableCell>{agent.dateEmbauche.toLocaleDateString('fr-FR')}</TableCell>
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

export default AgentManagement;
