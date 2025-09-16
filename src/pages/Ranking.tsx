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
    { position: 1, name: "MasterPro", points: 1250 },
    { position: 2, name: "Elite Player", points: 1245 },
    { position: 3, name: "Pro Champion", points: 1240 },
    { position: 4, name: "Victory FC", points: 1235 },
    { position: 5, name: "Golden Team", points: 1230 },
    { position: 6, name: "Super Pro", points: 1225 },
    { position: 7, name: "Dream Team", points: 1220 },
    { position: 8, name: "Legend FC", points: 1215 },
    { position: 9, name: "Champions United", points: 1210 },
    { position: 10, name: "Pro Master", points: 1205 },
    { position: 11, name: "Elite FC", points: 1200 },
    { position: 12, name: "Victory Pro", points: 1195 },
    { position: 13, name: "Golden Pro", points: 1190 },
    { position: 14, name: "Super Elite", points: 1185 },
    { position: 15, name: "Dream Pro", points: 1180 },
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
                <TabsTrigger value="f12" className="text-sm font-medium">F12</TabsTrigger>
                <TabsTrigger value="f12pro" className="text-sm font-medium">F12 Pró</TabsTrigger>
              </TabsList>
              
              <TabsContent value="f12" className="mt-0">
                <div className="mb-4">
                  {/* Header Row */}
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground font-medium">Posição</span>
                    <span className="text-muted-foreground font-medium">Pontuação</span>
                  </div>
                </div>
                {renderRankingList(f12RankingData)}
              </TabsContent>
              
              <TabsContent value="f12pro" className="mt-0">
                <div className="mb-4">
                  {/* Header Row */}
                  <div className="flex justify-between items-center pb-4 border-b border-border">
                    <span className="text-muted-foreground font-medium">Posição</span>
                    <span className="text-muted-foreground font-medium">Pontuação</span>
                  </div>
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