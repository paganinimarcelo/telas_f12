import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle } from "lucide-react";
import { useState } from "react";

const Betting = () => {
  const [selectedTab, setSelectedTab] = useState("brasileirao");
  const [selectedBet, setSelectedBet] = useState<string | null>(null);
  const [betPlaced, setBetPlaced] = useState(false);

  const handleBet = (team: string) => {
    setSelectedBet(team);
    setBetPlaced(true);
    setTimeout(() => setBetPlaced(false), 3000);
  };

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        {/* Header Tabs */}
        <div className="flex mb-6">
          <Button
            variant={selectedTab === "libertadores" ? "default" : "secondary"}
            className={`flex-1 rounded-r-none ${
              selectedTab === "libertadores" 
                ? "bg-muted text-foreground" 
                : "bg-card text-muted-foreground"
            }`}
            onClick={() => setSelectedTab("libertadores")}
          >
            Copa Libertadores
          </Button>
          <Button
            variant={selectedTab === "brasileirao" ? "default" : "secondary"}
            className={`flex-1 rounded-l-none ${
              selectedTab === "brasileirao" 
                ? "bg-primary text-primary-foreground" 
                : "bg-card text-muted-foreground"
            }`}
            onClick={() => setSelectedTab("brasileirao")}
          >
            Brasileiro - Série A
          </Button>
        </div>

        {/* Match Card */}
        <Card className="p-6 mb-6">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold mb-2">Botafogo x Mirassol</h2>
            <p className="text-muted-foreground">Rodada 12 • qua., 17 de setembro • 19:30</p>
          </div>

          {/* Soccer Field Visualization */}
          <div className="relative mb-8">
            <div className="bg-field-green rounded-lg p-8 relative overflow-hidden">
              {/* Field markings */}
              <div className="absolute inset-0 opacity-30">
                <div className="w-full h-full border-2 border-white rounded-lg relative">
                  <div className="absolute left-0 top-1/2 w-16 h-20 border-2 border-white -translate-y-1/2 rounded-r-lg"></div>
                  <div className="absolute right-0 top-1/2 w-16 h-20 border-2 border-white -translate-y-1/2 rounded-l-lg"></div>
                  <div className="absolute left-1/2 top-0 w-px h-full bg-white -translate-x-1/2"></div>
                  <div className="absolute left-1/2 top-1/2 w-20 h-20 border-2 border-white rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              </div>
              
              {/* Team Jerseys */}
              <div className="flex justify-between items-center relative z-10">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-20 bg-black rounded-lg flex items-center justify-center mb-2 relative">
                    <div className="w-12 h-16 bg-white rounded flex items-center justify-center">
                      <span className="text-black font-bold text-sm">BOT</span>
                    </div>
                    <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
                  </div>
                </div>

                <div className="bg-white/90 rounded-full px-6 py-3 font-bold text-lg">
                  VS
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-16 h-20 bg-yellow-500 rounded-lg flex items-center justify-center mb-2 relative">
                    <span className="text-green-700 font-bold text-sm">MIR</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Success Message */}
          {betPlaced && (
            <div className="flex items-center justify-center gap-2 mb-6 p-3 bg-success/10 rounded-lg">
              <CheckCircle className="w-5 h-5 text-success" />
              <span className="text-success font-medium">Palpite realizado com sucesso!</span>
            </div>
          )}

          {/* Betting Buttons */}
          <div className="space-y-3">
            <Button
              onClick={() => handleBet("botafogo")}
              className="w-full bg-success hover:bg-success/90 text-success-foreground py-4 text-lg font-bold"
            >
              BOTAFOGO
            </Button>
            <Button
              onClick={() => handleBet("empate")}
              className="w-full bg-orange hover:bg-orange/90 text-orange-foreground py-4 text-lg font-bold"
            >
              EMPATE
            </Button>
            <Button
              onClick={() => handleBet("mirassol")}
              className="w-full bg-orange hover:bg-orange/90 text-orange-foreground py-4 text-lg font-bold"
            >
              MIRASSOL
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Betting;