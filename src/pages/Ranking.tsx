import { Card } from "@/components/ui/card";

const Ranking = () => {
  const rankingData = [
    { position: 1, name: "Imperador 77", points: 345 },
    { position: 2, name: "Cosems FC", points: 345 },
    { position: 3, name: "Mafra sp", points: 345 },
    { position: 4, name: "Luanv", points: 342 },
    { position: 5, name: "BomfimFC", points: 339 },
    { position: 6, name: "FLA NAÇÃO VQO", points: 339 },
    { position: 7, name: "SERVE F.C", points: 339 },
    { position: 8, name: "Fabianoolho", points: 339 },
    { position: 9, name: "Emer10 fc", points: 336 },
    { position: 10, name: "Oscar Feras", points: 336 },
    { position: 11, name: "PHSD", points: 336 },
    { position: 12, name: "RESERVA DO GANDULA", points: 336 },
    { position: 13, name: "Fininh0", points: 336 },
    { position: 14, name: "José Cardoso", points: 336 },
    { position: 15, name: "Plantel Verde FC", points: 333 },
    { position: 16, name: "13@RBFC.", points: 333 },
    { position: 17, name: "Fc jordanois!!!", points: 333 },
    { position: 18, name: "São Caetano CA Fut Breja", points: 333 },
    { position: 19, name: "Cabeça d'água", points: 333 },
    { position: 20, name: "Ronaldo volaniuk", points: 333 },
    { position: 21, name: "Fabiano olho", points: 330 },
    { position: 22, name: "Biricutico", points: 330 },
    { position: 23, name: "Anita jogando", points: 330 },
    { position: 24, name: "Vds hallelujah", points: 330 },
    { position: 25, name: "Art Pura F.C", points: 330 },
    { position: 26, name: "igorgaldino", points: 330 },
    { position: 27, name: "Jogador10A", points: 330 },
    { position: 28, name: "MENIN ATLÉTICO GALO", points: 330 },
    { position: 29, name: "Louisdolabela", points: 330 },
    { position: 30, name: "Mantovani15", points: 330 },
  ];

  const getPositionSuffix = (position: number) => {
    return position + "º";
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Ranking Geral</h1>
            
            {/* Header Row */}
            <div className="flex justify-between items-center pb-4 border-b border-border">
              <span className="text-muted-foreground font-medium">Posição</span>
              <span className="text-muted-foreground font-medium">Pontuação</span>
            </div>
          </div>

          {/* Ranking List */}
          <div className="space-y-1">
            {rankingData.map((player, index) => (
              <div
                key={player.position}
                className={`flex justify-between items-center py-3 px-2 rounded-lg ${
                  index % 2 === 0 ? "bg-muted/30" : "bg-transparent"
                }`}
              >
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground font-medium w-8">
                    {getPositionSuffix(player.position)}
                  </span>
                  <span className="font-medium text-foreground">
                    {player.name}
                  </span>
                </div>
                <span className="font-bold text-lg">
                  {player.points}
                </span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Ranking;