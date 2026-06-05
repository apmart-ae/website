import { Suspense } from "react";
import SearchContent from "./SearchContent";

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="mx-auto max-w-[1280px] px-4 py-12 text-center text-gray-400">Loading…</div>}>
      <SearchContent />
    </Suspense>
  );
}
