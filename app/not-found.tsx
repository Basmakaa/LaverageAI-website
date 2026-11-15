import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="shell flex min-h-[70vh] flex-col justify-center pt-32 pb-24">
      <p className="text-sm text-faint">404</p>
      <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
        This page is not here.
      </h1>
      <p className="mt-5 max-w-md text-base leading-relaxed text-muted">
        The link may be out of date. The home page has services, workshops, and a way to book a
        call.
      </p>
      <div className="mt-8">
        <ButtonLink href="/">Back to home</ButtonLink>
      </div>
    </section>
  );
}
