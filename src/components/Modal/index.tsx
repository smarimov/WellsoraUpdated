import clsx from "clsx";
import { PropsWithChildren, ReactNode, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Icon } from "../Icon";
import "./style.sass";
import { useHotkey } from "@/hooks/useHotkey";

interface ModalProps extends PropsWithChildren {
  show: boolean;
  onClose: (state: boolean) => void;
  title?: ReactNode;
  maxWidth?: string | number;
  contentClass?: string;
  wrapperClass?: string;
  titlebarClass?: string;
  disableOutsideClose?: boolean;
  size?: "full" | "default";
  disableCloseOnEsc?: boolean;
}
export const Modal = (props: ModalProps) => {
  const {
    show,
    disableCloseOnEsc,
    disableOutsideClose,
    contentClass,
    wrapperClass,
    size = "default",
    titlebarClass,
  } = props;
  const close = () => {
    props.onClose(false);
  };
  const wrapperRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  useHotkey({ Escape: !disableCloseOnEsc ? close : void 0 });
  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    if (wrapper == null || content == null) return;
    setTimeout(() => {
      wrapper.classList.add("custom-modal-show");
      content.classList.add("custom-modal__content-show");
    }, 20);
  }, [show]);
  if (!show) return null;
  return createPortal(
    <div
      ref={wrapperRef}
      className="custom-modal"
      onClick={!disableOutsideClose ? close : void 0}
    >
      <div
        ref={contentRef}
        className={clsx(
          "custom-modal__content",
          contentClass,
          size === "full" && "w-full"
        )}
        onClick={(e) => e.stopPropagation()}
        style={props.maxWidth != null ? { maxWidth: props.maxWidth } : {}}
      >
        <div
          className={clsx(
            "flex justify-between gap-3 px-3 py-3 md:gap-6 md:px-6 md:py-5 bg-Light",
            titlebarClass
          )}
        >
          <div className="flex items-center text-base font-semibold ">
            {props.title}
          </div>
          <div
            className="flex items-center justify-center w-8 h-8 p-2 bg-white rounded-lg cursor-pointer hover:bg-divider"
            onClick={close}
          >
            <Icon icon="Cancel01" />
          </div>
        </div>
        <div
          className={clsx(
            "border-t flex-[1_0_1] overflow-y-auto",
            wrapperClass
          )}
        >
          {props.children}
        </div>
      </div>
    </div>,
    document.getElementById("root")!
  );
};

export const ActionWrapper = ({
  rtl = false,
  className,
  ...props
}: PropsWithChildren & {
  rtl?: boolean;
  className?: JSX.IntrinsicElements["div"]["className"];
}) => {
  return (
    <div
      className={clsx(
        className,
        "border-t flex items-center md:justify-end gap-3 text p-5",
        rtl && "md:justify-end"
      )}
      {...props}
    />
  );
};
