import { Filter } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { allTags, societies, eventTypes, type EventTag } from "@/data/mockData";

const tagColors: Record<EventTag, string> = {
  tech: "bg-badge-tech",
  workshop: "bg-badge-workshop",
  seminar: "bg-badge-seminar",
  competition: "bg-badge-competition",
  cultural: "bg-badge-cultural",
};

interface MobileFiltersProps {
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

const MobileFilters = (props: MobileFiltersProps) => (
  <div className="mb-4 lg:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <Filter className="h-4 w-4" /> Filters
          {props.selectedTags.length > 0 && (
            <Badge className="ml-1 bg-primary text-primary-foreground">{props.selectedTags.length}</Badge>
          )}
        </Button>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Filters</SheetTitle>
        </SheetHeader>
        <div className="mt-6 space-y-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Tags</label>
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <Badge
                  key={tag}
                  className={`cursor-pointer capitalize transition-all ${
                    props.selectedTags.includes(tag)
                      ? `${tagColors[tag]} text-primary-foreground`
                      : "bg-secondary text-secondary-foreground"
                  }`}
                  onClick={() => props.onToggleTag(tag)}
                >
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Society</label>
            <Select value={props.selectedSociety} onValueChange={props.onSocietyChange}>
              <SelectTrigger><SelectValue placeholder="All societies" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All societies</SelectItem>
                {societies.map((s) => <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Event Type</label>
            <Select value={props.selectedType} onValueChange={props.onTypeChange}>
              <SelectTrigger><SelectValue placeholder="All types" /></SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All types</SelectItem>
                {eventTypes.map((t) => <SelectItem key={t} value={t} className="capitalize">{t}</SelectItem>)}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="mb-2 block text-sm font-medium text-muted-foreground">Sort By</label>
            <Select value={props.sortBy} onValueChange={props.onSortChange}>
              <SelectTrigger><SelectValue /></SelectTrigger>
              <SelectContent>
                <SelectItem value="recent">Most Recent</SelectItem>
                <SelectItem value="engaged">Most Engaged</SelectItem>
              </SelectContent>
            </Select>
          </div>
          {(props.selectedTags.length > 0 || props.selectedSociety !== "all" || props.selectedType !== "all") && (
            <Button variant="outline" className="w-full" onClick={props.onClearFilters}>Clear All Filters</Button>
          )}
        </div>
      </SheetContent>
    </Sheet>
  </div>
);

export default MobileFilters;
