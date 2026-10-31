export interface IssueItem {
  id: string;
  title: string;
  severity: 'P0' | 'P1' | 'P2';
}

/**
 * QueuePrefetchManager demonstrates deterministic deduplication and early-exit
 * continuation loop guards for chunked browser table prefetching.
 */
export class QueuePrefetchManager {
  private rawItems: IssueItem[] = [];
  private seenIds = new Set<string>();

  /** Resets raw state on search query change to prevent stale item bleed-through. */
  public resetForNewSearch(): void {
    this.rawItems = [];
    this.seenIds.clear();
  }

  /**
   * Appends a fetched page of items, deduplicating by unique ID.
   * Returns false if the page contained only duplicates so the caller can break early.
   */
  public appendPageDeduplicated(pageItems: IssueItem[]): boolean {
    const newUniqueItems = pageItems.filter((item) => !this.seenIds.has(item.id));
    if (newUniqueItems.length === 0) {
      // Continuation loop early exit: prevent runaway pagination & count doubling
      return false;
    }
    for (const item of newUniqueItems) {
      this.seenIds.add(item.id);
      this.rawItems.push(item);
    }
    return true;
  }

  public getItems(): ReadonlyArray<IssueItem> {
    return this.rawItems;
  }
}
