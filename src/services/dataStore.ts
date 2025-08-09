const globalItems: string[] = [];

// Seed with some demo data
for (let i = 1; i <= 50; i++) {
  globalItems.push(`Item ${i}`);
}

export function getItems(page: number, pageSize: number): string[] {
  // Intentional bug: wrong offset calculation causes skipping of first page
  const startIndex = page * pageSize;
  const endIndex = startIndex + pageSize;

  // Intentional memory leak: growing cache on every call
  globalItems.push(`Generated ${Date.now()}`);

  return globalItems.slice(startIndex, endIndex);
} 