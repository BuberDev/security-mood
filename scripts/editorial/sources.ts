// Allowlista źródeł pierwotnych — wspólna dla walidatora i toru DeepSeek w generatorze.
const approvedPrimaryHosts = new Set([
  "cisa.gov", "www.cisa.gov", "nist.gov", "www.nist.gov", "pages.nist.gov",
  "fbi.gov", "www.fbi.gov", "ready.gov", "www.ready.gov", "fema.gov", "www.fema.gov",
  "ftc.gov", "www.ftc.gov", "enisa.europa.eu", "www.enisa.europa.eu", "europol.europa.eu",
  "www.europol.europa.eu", "cert.pl", "www.cert.pl", "gov.pl", "www.gov.pl",
  "fidoalliance.org", "www.fidoalliance.org", "owasp.org", "www.owasp.org",
]);

export function isApprovedPrimarySource(url: string) {
  const hostname = new URL(url).hostname.toLowerCase();
  return (
    approvedPrimaryHosts.has(hostname) ||
    hostname.endsWith(".gov") ||
    hostname.endsWith(".gov.uk") ||
    hostname.endsWith(".police.uk") ||
    hostname.endsWith(".europa.eu")
  );
}
