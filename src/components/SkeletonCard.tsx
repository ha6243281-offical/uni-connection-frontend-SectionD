const SkeletonCard = () => (
  <div className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
    <div className="relative h-48 w-full overflow-hidden bg-muted">
      <div className="absolute inset-0 -translate-x-full animate-shimmer bg-gradient-to-r from-transparent via-background/40 to-transparent" />
    </div>
    <div className="space-y-3 p-4">
      <div className="h-3 w-24 rounded bg-muted" />
      <div className="h-5 w-3/4 rounded bg-muted" />
      <div className="h-3 w-full rounded bg-muted" />
      <div className="flex gap-2">
        <div className="h-5 w-14 rounded-full bg-muted" />
        <div className="h-5 w-14 rounded-full bg-muted" />
      </div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="h-4 w-12 rounded bg-muted" />
          <div className="h-4 w-12 rounded bg-muted" />
        </div>
        <div className="h-8 w-20 rounded bg-muted" />
      </div>
    </div>
  </div>
);

export default SkeletonCard;
