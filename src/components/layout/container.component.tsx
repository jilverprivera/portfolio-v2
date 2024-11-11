import clsx from "clsx";
import React from "react";

export const Container = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={clsx(`max-w-screen-2xl mx-auto py-24`, className)}>
      {children}
    </div>
  );
};

