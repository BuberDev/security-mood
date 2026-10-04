# Security Mood article publisher

The publisher creates source-reviewed bilingual articles and releases them through Git. Production is never deployed from an uncommitted working tree: a successful run creates one article file, validates it, runs lint and a production build, commits that exact file, and pushes `main`. The Vercel Git integration then builds a deployment tied to that commit SHA.

## What an article must contain

- complete English and Polish versions under the same stable slug;
- at least 700 substantive words per language and four answer-first sections;
- at least three unique primary sources from the allowlist;
- source IDs attached to every factual section and visible citations on the page;
- a direct answer, key takeaways, FAQ, publication/update dates, author information, and methodology;
- at least three useful internal links and one relevant product, without fear-based sales copy;
- `BlogPosting`, `FAQPage`, and `BreadcrumbList` structured data generated from visible content.

The validator rejects incomplete languages, unknown products, non-primary domains, broken source references, invalid dates, and schema violations.

## Commands

```bash
npm run articles:validate
npm run articles:validate -- --network
npm run article:draft
npm run article:publish
```

`article:draft` researches the next unused topic with the locally authenticated Claude CLI, validates the result, runs lint and the production build, and leaves the JSON file for editorial review. It does not commit or push.

`article:publish` performs the same gates and then commits only the new article file and pushes `main`. Set `ARTICLE_TOPIC_KEY` to choose an unused item from `content/editorial-plan.json`. Set `CLAUDE_MODEL` only when a specific locally available model is required.

## Optional macOS schedule

After the implementation commit is available on `origin/main`, install the isolated scheduled publisher with:

```bash
npm run publisher:install
```

The installer creates a separate checkout under `~/Library/Application Support/SecurityMoodPublisher`. It does not operate in the developer checkout, so local work cannot be accidentally committed. Launchd runs it on Monday and Thursday at 09:15 local time. A lock prevents duplicate runs. A dirty isolated checkout stops publication and requires review instead of overwriting data.

The scheduler assumes the machine can authenticate to the Git remote and that the `claude` CLI is already authenticated. Logs are written beside the isolated checkout.

## Discoverability endpoints

- `/sitemap.xml` includes every language URL and uses the article update date.
- `/feed.xml` exposes both language variants in RSS.
- `/llms.txt` is generated from published content so AI systems receive current canonical links and summaries.
- `robots.txt` explicitly allows major search and answer-engine crawlers.

These features improve crawlability and citation readiness; no implementation can guarantee inclusion or citation by a specific AI search product.
