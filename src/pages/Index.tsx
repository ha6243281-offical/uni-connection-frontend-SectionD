import { useState, useEffect, useCallback, useMemo } from "react";
import Navbar from "@/components/Navbar";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import FeedCard from "@/components/FeedCard";
import UpcomingBanner from "@/components/UpcomingBanner";
import SkeletonCard from "@/components/SkeletonCard";
import MobileFilters from "@/components/MobileFilters";
import { events, type EventTag } from "@/data/mockData";

const ITEMS_PER_PAGE = 4;

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<EventTag[]>([]);
  const [selectedSociety, setSelectedSociety] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [sortBy, setSortBy] = useState("recent");
  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  const toggleTag = useCallback((tag: EventTag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const clearFilters = useCallback(() => {
    setSelectedTags([]);
    setSelectedSociety("all");
    setSelectedType("all");
  }, []);

  const filtered = useMemo(() => {
    let result = [...events];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(
        (e) =>
          e.title.toLowerCase().includes(q) ||
          e.description.toLowerCase().includes(q) ||
          e.society?.toLowerCase().includes(q)
      );
    }

    if (selectedTags.length > 0) {
      result = result.filter((e) => e.tags.some((t) => selectedTags.includes(t)));
    }

    if (selectedSociety !== "all") {
      result = result.filter((e) => e.society === selectedSociety);
    }

    if (selectedType !== "all") {
      result = result.filter((e) => e.tags.includes(selectedType as EventTag));
    }

    if (sortBy === "engaged") {
      result.sort((a, b) => b.likes + b.comments - (a.likes + a.comments));
    } else {
      result.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    }

    return result;
  }, [searchQuery, selectedTags, selectedSociety, selectedType, sortBy]);

  const displayed = filtered.slice(0, displayCount);
  const hasMore = displayCount < filtered.length;

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 400 &&
        hasMore
      ) {
        setDisplayCount((c) => c + ITEMS_PER_PAGE);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasMore]);

  const filterProps = {
    selectedTags,
    onToggleTag: toggleTag,
    selectedSociety,
    onSocietyChange: setSelectedSociety,
    selectedType,
    onTypeChange: setSelectedType,
    sortBy,
    onSortChange: setSortBy,
    onClearFilters: clearFilters,
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      <div className="mx-auto flex max-w-7xl gap-6 px-4 py-6">
        <LeftSidebar {...filterProps} />

        <main className="min-w-0 flex-1">
          <MobileFilters {...filterProps} />
          <UpcomingBanner />

          {loading ? (
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : displayed.length === 0 ? (
            <div className="flex flex-col items-center justify-center rounded-xl border border-border bg-card py-16 text-center">
              <p className="text-lg font-medium text-card-foreground">No results found</p>
              <p className="text-sm text-muted-foreground">Try adjusting your filters or search query</p>
            </div>
          ) : (
            <div className="space-y-4">
              {displayed.map((event, i) => (
                <FeedCard key={event.id} event={event} index={i} />
              ))}
              {hasMore && (
                <div className="flex justify-center py-4">
                  <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
                </div>
              )}
            </div>
          )}
        </main>

        <RightSidebar />
      </div>
    </div>
  );
};

export default Index;
