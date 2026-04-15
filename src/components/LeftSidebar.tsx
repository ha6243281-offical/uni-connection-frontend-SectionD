import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allTags, societies, eventTypes, type EventTag } from "@/data/mockData";
import { Filter, X } from "lucide-react";

const tagColors: Record<EventTag, string> = {
  tech: "bg-badge-tech",
  workshop: "bg-badge-workshop",
  seminar: "bg-badge-seminar",
  competition: "bg-badge-competition",
  cultural: "bg-badge-cultural",
};

interface LeftSidebarProps {
  selectedTags: EventTag[];
  onToggleTag: (tag: EventTag) => void;
  selectedSociety: string;
  onSocietyChange: (society: string) => void;
  selectedType: string;
  onTypeChange: (type: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
  onClearFilters: () => void;
}

const LeftSidebar = ({
  selectedTags, onToggleTag, selectedSociety, onSocietyChange,
  selectedType, onTypeChange, sortBy, onSortChange, onClearFilters,
}: LeftSidebarProps) => {
  const hasFilters = selectedTags.length > 0 || selectedSociety !== "all" || selectedType !== "all";

  return (
    <aside className="sticky top-20 hidden h-fit w-64 shrink-0 space-y-6 lg:block">
      <div className="rounded-xl border border-border bg-card p-4 shadow-sm">
        <div className="mb-4 flex items-center justify-between">
          <h3 className="flex items-center gap-2 font-semibold text-card-foreground">
            <Filter className="h-4 w-4" /> Filters
          </h3>
          {hasFilters && (
            <Button variant="ghost" size="sm" onClick={onClearFilters} className="h-7 text-xs text-muted-foreground">
              <X className="mr-1 h-3 w-3" /> Clear
            </Button>
          )}
        </div>

        <div className="space-y-4">
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Tags</label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  className={`cursor-pointer capitalize transition-all ${
                    selectedTags.includes(tag)
                      ? `${tagColors[tag]} text-primary-foreground`
                      : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
                  }`}
                  onClick={() => onToggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Society</label>
            <Select value={selectedSociety} onValueChange={onSocietyChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All societies" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All societies</SelectItem>
                {societies.map((s) => (
                  <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Event Type</label>
            <Select value={selectedType} onValueChange={onTypeChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="All types" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {eventTypes.map((t) => (
                  <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Sort By</label>
            <Select value={sortBy} onValueChange={onSortChange}>
              <SelectTrigger className="w-full">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="engaged">Most Engaged</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default LeftSidebar;
