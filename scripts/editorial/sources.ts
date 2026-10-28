// Allowlista źródeł pierwotnych — wspólna dla walidatora i toru DeepSeek w generatorze.
const approvedPrimaryHosts = new Set([
  "cisa.gov", "www.cisa.gov", "nist.gov", "www.nist.gov", "pages.nist.gov",
  "fbi.gov", "www.fbi.gov", "ready.gov", "www.ready.gov", "fema.gov", "www.fema.gov",
  "ftc.gov", "www.ftc.gov", "enisa.europa.eu", "www.enisa.europa.eu", "europol.europa.eu",
  "www.europol.europa.eu", "cert.pl", "www.cert.pl", "gov.pl", "www.gov.pl",
  "bezpieczny.szczecin.eu", "www.bezpieczny.szczecin.eu",
  "fidoalliance.org", "www.fidoalliance.org", "owasp.org", "www.owasp.org",
  // Oficjalna dokumentacja producentów — źródło pierwotne dla funkcji ich urządzeń.
  "support.apple.com", "support.google.com",
]);

export function isApprovedPrimarySource(url: string) {
  const source = new URL(url);
  const hostname = source.hostname.toLowerCase();
  return (
    approvedPrimaryHosts.has(hostname) ||
    // CISA uses GovDelivery for official advisories; approve only its CISA account.
    (hostname === "content.govdelivery.com" && source.pathname.startsWith("/accounts/USDHSCISA/")) ||
    // Subdomeny zatwierdzonych instytucji, np. wiedza.cert.pl dla cert.pl.
    [...approvedPrimaryHosts].some((host) => hostname.endsWith(`.${host}`)) ||
    hostname.endsWith(".gov") ||
    hostname.endsWith(".gov.uk") ||
    hostname.endsWith(".police.uk") ||
    hostname.endsWith(".europa.eu")
  );
}
