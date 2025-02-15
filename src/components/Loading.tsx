import clsx from "clsx";
import { Icon } from "./Icon";

interface Props {
  spinSize?: number;
  text: string;
  subText?: string;
  className?: string;
  fullHeight?: boolean;
}
export const Loading = (props: Props) => {
  return (
    <div
      className={clsx("splash-screen", props.className)}
      style={{
        height: props.fullHeight ? "100vh" : "100%",
      }}
    >
      <Icon
        icon="Loader"
        size={props.spinSize ?? 40}
        className="text-gray-400 animate-spin"
      />
      <h1 className="mt-6 mb-3 text-xl text-gray-500">{props.text}...</h1>
      <span>{props.subText}</span>
    </div>
  );
};
