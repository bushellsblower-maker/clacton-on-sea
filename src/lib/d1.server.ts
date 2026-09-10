/**
 * Cloudflare Worker bindings. Server-only.
 * Shared games-db (prefixed per-game tables).
 */
import { env } from "cloudflare:workers";

export interface D1PreparedStatement {
  bind(...values: unknown[]): D1PreparedStatement;
  first<T = Record<string, unknown>>(): Promise<T | null>;
  all<T = Record<string, unknown>>(): Promise<{ results?: T[] }>;
  run(): Promise<{ meta: { changes: number; last_row_id?: number } }>;
}

export interface D1Database {
  prepare(query: string): D1PreparedStatement;
}

export function tryGetD1(): D1Database | null {
  try {
    const db = (env as { DB?: D1Database }).DB;
    return db ?? null;
  } catch {
    return null;
  }
}

export function getD1(): D1Database {
  const db = tryGetD1();
  if (!db) throw new Error("Games database is not available");
  return db;
}

export async function sha256Hex(input: string): Promise<string> {
  const buf = await crypto.subtle.digest(
    "SHA-256",
    new TextEncoder().encode(input),
  );
  return [...new Uint8Array(buf)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}
