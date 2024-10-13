import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useCounter } from "src/hooks/useCounter";
import { useInputArray } from "src/hooks/useImputArray";
import { useBgLightBlue } from "src/hooks/useBgLightBlue";

export default function App({ Component, pageProps }: AppProps) {
  const counter = useCounter();
  const array = useInputArray();
  useBgLightBlue();
  return <Component {...pageProps} {...counter} {...array} />;
}
