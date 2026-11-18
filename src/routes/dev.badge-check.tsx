import { createFileRoute } from "@tanstack/react-router";
import { ProfileBadge } from "@/components/profile/ProfileBadge";

// TEMPORARY browser check harness for the blue-mark card; removed after the check.
export const Route = createFileRoute("/dev/badge-check")({
  validateSearch: (s: Record<string, unknown>) => ({ att: typeof s["att"] === "string" ? (s["att"] as string) : "" }),
  component: Harness,
});

function Harness() {
  const { att } = Route.useSearch();
  let attestation = null;
  try { attestation = att ? JSON.parse(atob(att)) : null; } catch { attestation = null; }
  return (
    <main className="flex min-h-screen items-start justify-center bg-background p-8 text-foreground">
      <h1 className="flex items-center gap-1.5 font-display text-2xl">
        <span>Jona</span>
        <ProfileBadge type="verified" method="team" legalName="Jona Delplanche" country="BE" verifiedAt="2026-10-10T08:16:00Z" attestation={attestation} handle="jdelplanche" size="sm" />
      </h1>
    </main>
  );
}
