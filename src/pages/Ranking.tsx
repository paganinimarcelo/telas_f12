import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Ranking = () => {
  const f12RankingData = [
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
  ];

  const f12ProRankingData = [
    { position: 1, name: "Pro Master 2024", points: 487 },
    { position: 2, name: "Elite Champions", points: 485 },
    { position: 3, name: "Victory Squad", points: 482 },
    { position: 4, name: "Golden Eagles", points: 478 },
    { position: 5, name: "Thunder Bolts", points: 475 },
    { position: 6, name: "Diamond Legends", points: 472 },
    { position: 7, name: "Fire Storm FC", points: 469 },
    { position: 8, name: "Ice Wolves", points: 466 },
    { position: 9, name: "Steel Panthers", points: 463 },
    { position: 10, name: "Royal Kings", points: 460 },
    { position: 11, name: "Shadow Hunters", points: 457 },
    { position: 12, name: "Lightning Strike", points: 454 },
    { position: 13, name: "Crimson Warriors", points: 451 },
    { position: 14, name: "Phoenix Rising", points: 448 },
    { position: 15, name: "Mystic Dragons", points: 445 },
  ];

  const getPositionSuffix = (position: number) => {
    return position + "º";
  };

  const renderRankingList = (data: typeof f12RankingData) => (
    <div className="space-y-1">
      {data.map((player, index) => (
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
  );

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-4">Ranking</h1>
            
            <Tabs defaultValue="f12" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-6">
                <TabsTrigger value="f12" className="font-semibold">F12</TabsTrigger>
                <TabsTrigger value="f12-pro" className="font-semibold">F12 Pró</TabsTrigger>
              </TabsList>
              
              <TabsContent value="f12" className="space-y-4">
                {/* Header Row */}
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground font-medium">Posição</span>
                  <span className="text-muted-foreground font-medium">Pontuação</span>
                </div>
                {renderRankingList(f12RankingData)}
              </TabsContent>
              
              <TabsContent value="f12-pro" className="space-y-4">
                {/* Header Row */}
                <div className="flex justify-between items-center pb-4 border-b border-border">
                  <span className="text-muted-foreground font-medium">Posição</span>
                  <span className="text-muted-foreground font-medium">Pontuação</span>
                </div>
                {renderRankingList(f12ProRankingData)}
              </TabsContent>
            </Tabs>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Ranking;