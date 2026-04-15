import { Calendar, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { events } from "@/data/mockData";

const UpcomingBanner = () => {
  const upcoming = events
    .filter((e) => e.type === "event" && new Date(e.date) >= new Date())
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
    .slice(0, 5);

  if (upcoming.length === 0) return null;

  return (
    <section className="mb-6">
      <h2 className="mb-3 text-lg font-semibold text-foreground">⏳ Upcoming This Week</h2>
      <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
        {upcoming.map((e) => (
          <div
            key={e.id}
            className="min-w-[260px] shrink-0 rounded-xl border border-border bg-card p-4 shadow-sm transition-shadow hover:shadow-md"
          >
            {e.image && (
              <img src={e.image} alt={e.title} loading="lazy" className="mb-2 h-24 w-full rounded-lg object-cover" />
            )}
            <Badge className="mb-2 bg-warning text-warning-foreground">Happening Soon</Badge>
            <h4 className="mb-1 text-sm font-semibold text-card-foreground line-clamp-1">{e.title}</h4>
            <div className="mb-2 flex items-center gap-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-1"><Calendar className="h-3 w-3" /> {new Date(e.date).toLocaleDateString("en-US", { month: "short", day: "numeric" })}</span>
              {e.time && <span className="flex items-center gap-1"><Clock className="h-3 w-3" /> {e.time}</span>}
            </div>
            <Button size="sm" className="h-7 w-full text-xs">Register</Button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default UpcomingBanner;
