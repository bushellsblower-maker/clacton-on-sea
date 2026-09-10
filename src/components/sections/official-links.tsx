import { ExternalLink, Play } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  guideVideos,
  officialLinks,
  youtubeIdFromUrl,
} from "@/data/visitor-guides";

const GROUPS: { title: string; match: (title: string) => boolean }[] = [
  {
    title: "Visit & plan",
    match: (t) => t.startsWith("Discover") || t.startsWith("Visit Essex"),
  },
  {
    title: "Tendring District Council",
    match: (t) => t.startsWith("Tendring"),
  },
  {
    title: "Venues & events",
    match: (t) =>
      t.includes("Pier") ||
      t.includes("Airshow") ||
      t.includes("Carnival") ||
      t.includes("Shopping") ||
      t.includes("Martello") ||
      t.includes("Priory") ||
      t === "Naze Tower",
  },
  {
    title: "Nature reserves",
    match: (t) => t.includes("Wildlife") || t.includes("countryside"),
  },
  {
    title: "Trains",
    match: (t) => t.includes("Anglia") || t.includes("National Rail"),
  },
];

function groupLinks() {
  const used = new Set<string>();
  return GROUPS.map((group) => {
    const items = officialLinks.filter((link) => {
      if (used.has(link.url)) return false;
      if (!group.match(link.title)) return false;
      used.add(link.url);
      return true;
    });
    return { title: group.title, items };
  }).filter((g) => g.items.length > 0);
}

export function OfficialLinksSection() {
  const groups = groupLinks();

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
          Official links & videos
        </p>
        <h1 className="font-display text-3xl font-semibold tracking-tight">
          Confirm it on the official pages
        </h1>
        <p className="max-w-2xl text-fg-muted">
          {officialLinks.length} research-checked URLs plus {guideVideos.length}{" "}
          verified YouTube walks. No invented video IDs.
        </p>
      </header>

      <section className="space-y-6">
        {groups.map((group) => (
          <div key={group.title} className="space-y-3">
            <h2 className="font-display text-xl font-semibold tracking-tight">
              {group.title}
            </h2>
            <ul className="grid gap-3 md:grid-cols-2">
              {group.items.map((link) => (
                <li key={link.url}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-full min-w-0 items-start gap-3 rounded-xl border border-border bg-bg-elevated p-4 transition-shadow hover:shadow-md"
                  >
                    <ExternalLink className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                    <span className="min-w-0">
                      <span className="block font-display font-semibold leading-snug">
                        {link.title}
                      </span>
                      <span className="mt-1 block text-sm text-fg-muted">
                        {link.why}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-soft text-accent">
            <Play className="h-4 w-4" />
          </span>
          <h2 className="font-display text-xl font-semibold tracking-tight">
            Verified videos
          </h2>
        </div>
        <div className="grid gap-5 lg:grid-cols-2">
          {guideVideos.map((video) => {
            const id = youtubeIdFromUrl(video.url);
            return (
              <Card key={video.url} className="overflow-hidden">
                {id && (
                  <div className="aspect-video bg-bg-inverse">
                    <iframe
                      title={video.title}
                      src={`https://www.youtube-nocookie.com/embed/${id}`}
                      className="h-full w-full border-0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                )}
                <CardContent className="space-y-2 p-5">
                  <div className="flex flex-wrap gap-1.5">
                    <Badge variant="outline">{video.channel}</Badge>
                    <Badge variant="secondary">{video.topic}</Badge>
                  </div>
                  <h3 className="font-display font-semibold leading-snug">
                    {video.title}
                  </h3>
                  <p className="text-sm text-fg-muted">{video.relevance}</p>
                  {video.notes && (
                    <p className="text-xs leading-relaxed text-fg-subtle">
                      {video.notes}
                    </p>
                  )}
                  <a
                    href={video.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-medium text-accent underline-offset-2 hover:underline"
                  >
                    Open on YouTube
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>
    </div>
  );
}
