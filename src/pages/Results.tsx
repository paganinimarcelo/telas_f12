import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const Results = () => {
  const matchResults = [
    {
      date: "14 de setembro",
      time: "20:30",
      homeTeam: "Vasco",
      awayTeam: "Ceará",
      homeScore: 2,
      awayScore: 2,
      homeIcon: "🏴",
      awayIcon: "⚫",
      myBet: "SEM PALPITE"
    },
    {
      date: "14 de setembro", 
      time: "17:30",
      homeTeam: "São Paulo",
      awayTeam: "Botafogo", 
      homeScore: 1,
      awayScore: 0,
      homeIcon: "🔴",
      awayIcon: "⚫",
      myBet: "SEM PALPITE"
    },
    {
      date: "14 de setembro",
      time: "16:00", 
      homeTeam: "Atlético-MG",
      awayTeam: "Santos",
      homeScore: 1,
      awayScore: 1,
      homeIcon: "⚫",
      awayIcon: "⚪",
      myBet: "SEM PALPITE"
    },
    {
      date: "14 de setembro",
      time: "16:00",
      homeTeam: "Juventude", 
      awayTeam: "Flamengo",
      homeScore: 0,
      awayScore: 2,
      homeIcon: "🟢",
      awayIcon: "🔴",
      myBet: "SEM PALPITE"
    },
    {
      date: "14 de setembro",
      time: "11:00",
      homeTeam: "Bragantino",
      awayTeam: "Sport", 
      homeScore: 1,
      awayScore: 1,
      homeIcon: "🔴",
      awayIcon: "⚫",
      myBet: "SEM PALPITE"
    }
  ];

  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-md mx-auto">
        <Card className="p-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-xl font-bold">Brasileiro - Série A</h1>
            <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
              <span className="text-sm">Exibir estatísticas</span>
              <ChevronDown className="w-4 h-4 ml-1" />
            </Button>
          </div>

          {/* Results List */}
          <div className="space-y-4">
            {matchResults.map((match, index) => (
              <div key={index} className="border-b border-border pb-4 last:border-b-0">
                <div className="flex items-center justify-between">
                  {/* Date and Time */}
                  <div className="text-sm text-muted-foreground">
                    <div>{match.date}</div>
                    <div>{match.time}</div>
                  </div>

                  {/* Match Info */}
                  <div className="flex items-center gap-4 flex-1 justify-center">
                    {/* Home Team */}
                    <div className="flex items-center gap-2">
                      <span className="font-medium">{match.homeTeam}</span>
                      <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">
                        {match.homeIcon}
                      </div>
                    </div>

                    {/* Score */}
                    <div className="flex items-center gap-2 font-bold text-lg">
                      <span>{match.homeScore}</span>
                      <span className="text-muted-foreground text-sm">VS</span>
                      <span>{match.awayScore}</span>
                    </div>

                    {/* Away Team */}
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-muted flex items-center justify-center text-xs">
                        {match.awayIcon}
                      </div>
                      <span className="font-medium">{match.awayTeam}</span>
                    </div>
                  </div>

                  {/* My Bet Status */}
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground mb-1">Meu palpite</div>
                    <div className="flex items-center gap-1">
                      <span className="text-xs font-medium">{match.myBet}</span>
                      <div className="w-5 h-5 rounded-full bg-muted flex items-center justify-center">
                        <span className="text-xs">⊖</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Results;