import { Container } from "@/components/ui/container";
import { Marquee } from "@/components/ui/marquee";

const placeholderLogos = [
  "Nova Labs",
  "Orbit Health",
  "Fintra",
  "Meridian",
  "Coastline",
  "Vantage",
  "Kestrel",
  "Northwind",
];

export function TrustedBy() {
  return (
    <section className="border-y border-border py-10">
      <Container>
        <p className="mb-6 text-center text-xs font-medium uppercase tracking-widest text-muted-2">
          Trusted by teams building what&rsquo;s next
        </p>
      </Container>
      <Marquee
        items={placeholderLogos.map((name) => (
          <span
            key={name}
            className="text-lg font-display font-semibold tracking-tight text-muted-2/70 grayscale transition-colors hover:text-foreground"
          >
            {name}
          </span>
        ))}
      />
    </section>
  );
}
