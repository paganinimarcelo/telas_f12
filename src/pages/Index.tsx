import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Trophy, Target, BarChart3 } from "lucide-react";
const Index = () => {
  return <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-2">Fantasy 12</h1>
          <p className="text-muted-foreground">O melhor fantasy Game do Brasil</p>
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <Link to="/betting">
              <Button className="w-full h-20 bg-primary hover:bg-primary/90 text-primary-foreground flex items-center justify-center gap-3">
                <Target className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">Fazer Palpite</div>
                  <div className="text-sm opacity-90">Aposte nos próximos jogos</div>
                </div>
              </Button>
            </Link>
          </Card>

          <Card className="p-6">
            <Link to="/ranking">
              <Button className="w-full h-20 bg-success hover:bg-success/90 text-success-foreground flex items-center justify-center gap-3">
                <Trophy className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">Ranking</div>
                  <div className="text-sm opacity-90">Veja sua posição no ranking</div>
                </div>
              </Button>
            </Link>
          </Card>

          <Card className="p-6">
            <Link to="/results">
              <Button className="w-full h-20 bg-orange hover:bg-orange/90 text-orange-foreground flex items-center justify-center gap-3">
                <BarChart3 className="w-8 h-8" />
                <div className="text-left">
                  <div className="font-bold text-lg">Resultados</div>
                  <div className="text-sm opacity-90">Confira os resultados dos jogos</div>
                </div>
              </Button>
            </Link>
          </Card>
        </div>
      </div>
    </div>;
};
export default Index;