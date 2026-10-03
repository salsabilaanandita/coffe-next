import { Container, SectionHeading } from "@/components/ui/Layout";

export function PageHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="border-b border-cream-200 bg-cream-100 py-14 md:py-20">
      <Container>
        <SectionHeading level={1} eyebrow={eyebrow} title={title} description={description} />
      </Container>
    </div>
  );
}
