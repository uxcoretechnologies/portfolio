import Image from "next/image";
import { Container } from "@/components/ui/container";

const clients = [
  { name: "Mahindra", src: "/images/home/client-mahindra.png", width: 2560, height: 315, className: "h-5 sm:h-6" },
  { name: "ICICI Bank", src: "/images/home/client-icici.png", width: 160, height: 42, className: "h-7 sm:h-8" },
  { name: "EY", src: "/images/home/client-ey.png", width: 150, height: 101, className: "h-12 sm:h-14" },
  { name: "Croma", src: "/images/home/client-croma.png", width: 150, height: 57, className: "h-8 sm:h-9" },
  { name: "Myntra", src: "/images/home/client-myntra.png", width: 150, height: 55, className: "h-7 sm:h-8" },
];

export function TrustedBy() {
  return (
    <section className="border-y border-border py-14 sm:py-16" >
       <Container className="max-w-5xl">
        <p className="font-display text-xl font-semibold tracking-tight sm:text-2xl">
          Meet some of our 50+ clients
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-6 sm:flex-nowrap sm:gap-x-10">
          {clients.map((client) => (
            <Image
              key={client.name}
              src={client.src}
              alt={client.name}
              width={client.width}
              height={client.height}
              className={`w-auto grayscale transition-all hover:grayscale-0 ${client.className}`}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
