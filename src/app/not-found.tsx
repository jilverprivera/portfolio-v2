"use client";

/* eslint-disable react/no-unescaped-entities */
import { Container } from "@/components/layout";
import { Button } from "@/components/Button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();

  return (
    <Container className="flex items-center justify-center py-32 sm:pt-32">
      <div className="flex flex-col items-center gap-5">
        <p className="text-9xl font-bold text-neutral-400 dark:text-neutral-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-neutral-800 sm:text-7xl dark:text-neutral-100">
          Page not found
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-400">
          The page you're trying to find doesn't exist.
        </p>
        <Button onClick={() => router.back()}>Go back</Button>
      </div>
    </Container>
  );
};

export default NotFound;
