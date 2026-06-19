import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const contentFilePattern = /\.(md|mdx)$/;

export function hasContentFiles(dir: string): boolean {
  let entries;
  try {
    entries = readdirSync(dir, { withFileTypes: true });
  } catch {
    return false;
  }

  return entries.some((entry) => {
    if (entry.isFile()) return contentFilePattern.test(entry.name);
    if (entry.isDirectory()) return hasContentFiles(join(dir, entry.name));
    return false;
  });
}
