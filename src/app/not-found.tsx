import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <Container className="flex min-h-[60vh] flex-col items-center justify-center gap-6 py-24 text-center">
      <p className="font-display text-7xl font-bold text-gradient">404</p>
      <h1 className="font-display text-2xl font-semibold">Page not found</h1>
      <p className="max-w-md text-muted">
        The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
      </p>
      <Button href="/">Back to home</Button>
    </Container>
  );
}
