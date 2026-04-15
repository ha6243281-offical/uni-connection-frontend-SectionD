import { TrendingUp, Users, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { events, societies, startups } from "@/data/mockData";

const RightSidebar = () => {
  const trending = [...events].sort((a, b) => b.likes - a.likes).slice(0, 3);

  return (
    <aside className="sticky top-20 hidden h-fit w-72 shrink-0 space-y-4 xl:block">
      {/* Trending */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-card-foreground">
          <TrendingUp className="h-4 w-4 text-primary" /> Trending
        </h3>
        <div className="space-y-3">
          {trending.map((e) => (
            <div key={e.id} className="group cursor-pointer rounded-lg p-2 transition-colors hover:bg-secondary">
              <p className="text-sm font-medium text-card-foreground group-hover:text-primary">{e.title}</p>
              <p className="text-xs text-muted-foreground">{e.likes} likes · {e.comments} comments</p>
            </div>
          ))}
        </div>
      </div>

      {/* Suggested Societies */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-card-foreground">
          <Users className="h-4 w-4 text-primary" /> Suggested Societies
        </h3>
        <div className="space-y-3">
          {societies.slice(0, 4).map((s) => (
            <div key={s.id} className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-card-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.members} members</p>
              </div>
              <Button variant="outline" size="sm" className="h-7 text-xs">
                Join
              </Button>
            </div>
          ))}
        </div>
      </div>

      {/* Top Startups */}
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <h3 className="mb-3 flex items-center gap-2 font-semibold text-card-foreground">
          <Rocket className="h-4 w-4 text-primary" /> Top Startups
        </h3>
        <div className="space-y-3">
          {startups.map((s) => (
            <div key={s.id} className="group cursor-pointer rounded-lg p-2 transition-colors hover:bg-secondary">
              <div className="flex items-center gap-2">
                <span className="text-xl">{s.logo}</span>
                <div>
                  <p className="text-sm font-medium text-card-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{s.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
