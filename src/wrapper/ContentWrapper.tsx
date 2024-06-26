import React, { ReactNode } from "react";

const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return <div className="px-8">{children}</div>;
};

export default ContentWrapper;
