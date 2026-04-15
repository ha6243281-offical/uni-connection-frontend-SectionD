import { Heart, MessageCircle, Calendar, Clock, Rocket, Users, Image } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { FeedEvent, EventTag } from "@/data/mockData";

const tagColors: Record<EventTag, string> = {
  tech: "bg-badge-tech",
  workshop: "bg-badge-workshop",
  seminar: "bg-badge-seminar",
  competition: "bg-badge-competition",
  cultural: "bg-badge-cultural",
};

const typeIcons: Record<string, React.ReactNode> = {
  event: <Calendar className="h-4 w-4" />,
  highlight: <Image className="h-4 w-4" />,
  startup: <Rocket className="h-4 w-4" />,
  society: <Users className="h-4 w-4" />,
};

interface FeedCardProps {
  event: FeedEvent;
  index: number;
}

const FeedCard = ({ event, index }: FeedCardProps) => {
  const formattedDate = new Date(event.date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article
      className="animate-fade-in-up overflow-hidden rounded-xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      {event.image && (
        <div className="relative overflow-hidden">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            width={800}
            height={512}
            className="h-48 w-full object-cover transition-transform duration-300 hover:scale-105"
          />
          {event.isUrgent && (
            <Badge className="absolute left-3 top-3 bg-warning text-warning-foreground">
              ⏳ Happening Soon
            </Badge>
          )}
        </div>
      )}

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2 text-xs text-muted-foreground">
          {typeIcons[event.type]}
          <span className="capitalize">{event.type}</span>
          {event.society && (
            <>
              <span>·</span>
              <span>{event.society}</span>
            </>
          )}
        </div>

        <h3 className="mb-1 text-lg font-semibold text-card-foreground">{event.title}</h3>
        <p className="mb-3 text-sm text-muted-foreground">{event.description}</p>

        <div className="mb-3 flex flex-wrap gap-1.5">
          {event.tags.map((tag) => (
            <Badge key={tag} className={`${tagColors[tag]} text-xs capitalize text-primary-foreground`}>
              {tag}
            </Badge>
          ))}
        </div>

        <div className="mb-3 flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Calendar className="h-3.5 w-3.5" /> {formattedDate}
          </span>
          {event.time && (
            <span className="flex items-center gap-1">
              <Clock className="h-3.5 w-3.5" /> {event.time}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-destructive">
              <Heart className="h-4 w-4" /> {event.likes}
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary">
              <MessageCircle className="h-4 w-4" /> {event.comments}
            </button>
          </div>
          {event.type === "event" && (
            <Button size="sm" className="h-8">
              Register
            </Button>
          )}
          {event.type === "startup" && (
            <Button variant="outline" size="sm" className="h-8">
              View More
            </Button>
          )}
        </div>
      </div>
    </article>
  );
};

export default FeedCard;
