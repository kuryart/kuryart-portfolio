import { type PropsWithChildren } from "beth-stack/jsx";

export const Doctype = ({ children }: PropsWithChildren) =>
  `<!DOCTYPE html>${children}`;
