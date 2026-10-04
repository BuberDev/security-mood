import Image from "next/image";
import { CheckCircle2, ExternalLink, ShieldCheck } from "lucide-react";

import { Container } from "@/components/container";
import { LocalizedLink } from "@/components/localized-link";
import { Section } from "@/components/section";
import { Badge } from "@/components/ui/badge";
import type { EditorialArticle } from "@/lib/editorial-article";
import type { Locale } from "@/lib/i18n/config";
import { localizePathname } from "@/lib/i18n/path";
import { getCategoryById, getProductById } from "@/lib/site-data";
import { toAbsoluteUrl, toJsonLd } from "@/lib/seo";

type EditorialArticleViewProps = {
  article: EditorialArticle;
  locale: Locale;
};

function ProductCallout({ productId, locale }: { productId: string; locale: Locale }) {
  const product = getProductById(productId);
  if (!product) return null;

  return (
    <aside className="my-10 grid gap-5 rounded-3xl border border-accent-gold/30 bg-accent-gold/[0.05] p-6 sm:grid-cols-[120px_1fr] sm:items-center">
      <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10">
        <Image src={product.image} alt={product.imageAlt} fill sizes="120px" className="object-cover" />
      </div>
      <div>
        <p className="text-xs uppercase tracking-[0.17em] text-accent-gold">
          {locale === "pl" ? "Powiązane rozwiązanie" : "Related solution"}
        </p>
        <h3 className="mt-2 font-heading text-2xl text-text-primary">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-text-secondary">{product.benefit}</p>
        <LocalizedLink
          href={`/favorites/${product.id}`}
          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-accent-gold hover:text-text-primary"
        >
          {locale === "pl" ? "Sprawdź produkt i zastosowanie" : "See the product and use case"}
          <ExternalLink className="size-4" aria-hidden="true" />
        </LocalizedLink>
      </div>
    </aside>
  );
}

export function EditorialArticleView({ article, locale }: EditorialArticleViewProps) {
  const content = article.locales[locale];
  const category = getCategoryById(article.categoryId);
  const sourceById = new Map(content.sources.map((source) => [source.id, source]));
  const pagePath = localizePathname(`/blog/${article.slug}`, locale);
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        "@id": `${toAbsoluteUrl(pagePath)}#article`,
        headline: content.title,
        description: content.excerpt,
        image: [toAbsoluteUrl(article.heroImage)],
        datePublished: article.publishedAt,
        dateModified: article.updatedAt,
        inLanguage: locale,
        mainEntityOfPage: toAbsoluteUrl(pagePath),
        articleSection: category?.name ?? article.categoryId,
        author: {
          "@type": "Organization",
          name: article.author.name,
          description: article.author.credentials[locale],
        },
        publisher: {
          "@type": "Organization",
          "@id": toAbsoluteUrl("/#organization"),
          name: "Security Mood",
          logo: { "@type": "ImageObject", url: toAbsoluteUrl("/security_mood_logo.png") },
        },
        citation: content.sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: locale === "pl" ? "Strona główna" : "Home", item: toAbsoluteUrl(localizePathname("/", locale)) },
          { "@type": "ListItem", position: 2, name: locale === "pl" ? "Artykuły" : "Articles", item: toAbsoluteUrl(localizePathname("/blog", locale)) },
          { "@type": "ListItem", position: 3, name: content.title, item: toAbsoluteUrl(pagePath) },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: content.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: { "@type": "Answer", text: item.answer },
        })),
      },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: toJsonLd(articleJsonLd) }} />
      <article>
        <header className="relative isolate overflow-hidden border-b border-white/10">
          <div className="relative h-[58vh] min-h-[440px]">
            <Image src={article.heroImage} alt={content.heroAlt} fill priority sizes="100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/65 to-black/25" />
          </div>
          <Container className="relative -mt-56 pb-14">
            <div className="max-w-4xl rounded-[2.5rem] border border-white/12 bg-black/80 p-8 backdrop-blur-md md:p-10">
              {category ? <Badge>{category.name}</Badge> : null}
              <h1 className="mt-4 font-heading text-4xl leading-tight text-text-primary sm:text-5xl md:text-6xl">{content.title}</h1>
              <p className="mt-6 text-lg leading-relaxed text-text-secondary">{content.excerpt}</p>
              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs uppercase tracking-[0.14em] text-text-secondary">
                <span>{article.author.name}</span>
                <time dateTime={article.publishedAt}>{locale === "pl" ? "Opublikowano" : "Published"}: {article.publishedAt}</time>
                <time dateTime={article.updatedAt}>{locale === "pl" ? "Aktualizacja" : "Updated"}: {article.updatedAt}</time>
              </div>
              <p className="mt-3 text-sm text-text-secondary">{article.author.role[locale]} · {article.author.credentials[locale]}</p>
            </div>
          </Container>
        </header>

        <Section className="border-b border-white/10 py-10 md:py-14">
          <Container className="max-w-4xl">
            <div className="rounded-3xl border border-accent-gold/30 bg-accent-gold/[0.06] p-6 md:p-8">
              <div className="flex items-center gap-3 text-accent-gold">
                <ShieldCheck className="size-5" aria-hidden="true" />
                <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">{locale === "pl" ? "Krótka odpowiedź" : "Quick answer"}</h2>
              </div>
              <p className="mt-4 text-lg leading-8 text-text-primary">{content.quickAnswer}</p>
            </div>
            <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h2 className="font-heading text-3xl">{locale === "pl" ? "Najważniejsze wnioski" : "Key takeaways"}</h2>
              <ul className="mt-5 space-y-3">
                {content.keyTakeaways.map((item) => (
                  <li key={item} className="flex gap-3 leading-relaxed text-text-secondary">
                    <CheckCircle2 className="mt-1 size-5 shrink-0 text-accent-gold" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </Container>
        </Section>

        <Section>
          <Container className="max-w-4xl">
            <div className="space-y-16">
              {content.sections.map((section, index) => {
                const sources = section.sourceIds.flatMap((id) => {
                  const source = sourceById.get(id);
                  return source ? [source] : [];
                });

                return (
                  <section key={section.id} id={section.id} className="scroll-mt-28">
                    <h2 className="font-heading text-3xl leading-tight text-text-primary md:text-4xl">{section.heading}</h2>
                    <p className="mt-5 border-l-2 border-accent-gold pl-5 text-lg font-medium leading-8 text-text-primary">{section.answer}</p>
                    <div className="mt-6 space-y-5 text-base leading-8 text-text-secondary">
                      {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                    </div>
                    {section.bullets ? (
                      <ul className="mt-6 space-y-3 rounded-2xl border border-white/10 bg-white/[0.02] p-6 text-text-secondary">
                        {section.bullets.map((bullet) => <li key={bullet}>• {bullet}</li>)}
                      </ul>
                    ) : null}
                    {section.table ? (
                      <div className="mt-8 overflow-x-auto rounded-2xl border border-white/10">
                        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                          <thead className="bg-white/[0.05] text-text-primary"><tr>{section.table.headers.map((header) => <th key={header} className="p-4 font-semibold">{header}</th>)}</tr></thead>
                          <tbody>{section.table.rows.map((row) => <tr key={row.join("|")} className="border-t border-white/10">{row.map((cell) => <td key={cell} className="p-4 align-top leading-6 text-text-secondary">{cell}</td>)}</tr>)}</tbody>
                        </table>
                      </div>
                    ) : null}
                    <p className="mt-5 text-sm text-text-secondary">
                      {locale === "pl" ? "Źródła tej sekcji:" : "Sources for this section:"}{" "}
                      {sources.map((source, sourceIndex) => (
                        <span key={source.id}>{sourceIndex > 0 ? ", " : ""}<a href={source.url} target="_blank" rel="noreferrer" className="underline decoration-accent-gold/60 underline-offset-4 hover:text-text-primary">{source.publisher}: {source.title}</a></span>
                      ))}
                    </p>
                    {section.productId ? <ProductCallout productId={section.productId} locale={locale} /> : null}
                    {!section.productId && index === 1 ? <ProductCallout productId={article.productIds[0]} locale={locale} /> : null}
                  </section>
                );
              })}
            </div>

            <aside className="mt-16 rounded-3xl border border-white/10 bg-white/[0.02] p-6 md:p-8">
              <h2 className="font-heading text-3xl">{locale === "pl" ? "Powiązane przewodniki i produkty" : "Related guides and products"}</h2>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {article.internalLinks.map((link) => (
                  <li key={link.href}><LocalizedLink href={link.href} className="inline-flex items-center gap-2 text-accent-gold hover:text-text-primary">{link.label[locale]} <span aria-hidden="true">→</span></LocalizedLink></li>
                ))}
              </ul>
            </aside>

            <section className="mt-16">
              <h2 className="font-heading text-3xl md:text-4xl">FAQ</h2>
              <div className="mt-6 divide-y divide-white/10 rounded-3xl border border-white/10 px-6 md:px-8">
                {content.faq.map((item) => (
                  <details key={item.question} className="group py-5">
                    <summary className="cursor-pointer list-none font-semibold text-text-primary">{item.question}</summary>
                    <p className="mt-3 leading-7 text-text-secondary">{item.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="mt-16 border-t border-white/10 pt-10">
              <h2 className="font-heading text-3xl">{locale === "pl" ? "Metodologia i źródła" : "Methodology and sources"}</h2>
              <p className="mt-4 leading-7 text-text-secondary">{content.methodology}</p>
              <ol className="mt-6 space-y-4 text-sm text-text-secondary">
                {content.sources.map((source) => (
                  <li key={source.id}>
                    <a href={source.url} target="_blank" rel="noreferrer" className="font-medium text-text-primary underline decoration-accent-gold/60 underline-offset-4">{source.publisher}: {source.title}</a>
                    <span> · {locale === "pl" ? "dostęp" : "accessed"} {source.accessedAt}</span>
                  </li>
                ))}
              </ol>
            </section>
          </Container>
        </Section>
      </article>
    </>
  );
}
