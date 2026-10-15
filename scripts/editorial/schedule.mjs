import fs from "node:fs";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "../..");
const contentDirectory = path.join(projectRoot, "content", "articles");
const weekdays = new Set([2, 5]); // Tuesday and Friday.

function warsawDate(date = new Date()) {
  const parts = new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/Warsaw",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);
  const get = (type) => parts.find((part) => part.type === type)?.value;
  return `${get("year")}-${get("month")}-${get("day")}`;
}

const today = warsawDate();
const notBefore = process.env.SLOT_NOT_BEFORE ?? today;
if (!/^\d{4}-\d{2}-\d{2}$/.test(notBefore)) {
  throw new Error("SLOT_NOT_BEFORE must use YYYY-MM-DD.");
}

const publishedDates = new Set();
for (const file of fs.readdirSync(contentDirectory)) {
  if (!file.endsWith(".json")) continue;
  try {
    const article = JSON.parse(fs.readFileSync(path.join(contentDirectory, file), "utf8"));
    if (typeof article.publishedAt === "string") publishedDates.add(article.publishedAt.slice(0, 10));
  } catch {
    // The editorial validator reports malformed article files during publication.
  }
}

for (const date = new Date(`${notBefore}T12:00:00.000Z`); date <= new Date(`${today}T12:00:00.000Z`); date.setUTCDate(date.getUTCDate() + 1)) {
  const day = date.getUTCDay();
  if (!weekdays.has(day)) continue;
  const slot = date.toISOString().slice(0, 10);
  if (!publishedDates.has(slot)) {
    process.stdout.write(`${slot}\n`);
    process.exit(0);
  }
}

process.stdout.write("NONE\n");
