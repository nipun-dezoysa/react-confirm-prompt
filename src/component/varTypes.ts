export type options = {
  description?: string;
  confirmLabel?: string;
  confirmColor?: string;
  confirmTextColor?: string;
  cancelLabel?: string;
  cancelColor?: string;
  cancelTextColor?: string;
  hideCancel?: boolean;
  disableBlur?: boolean;
  type?: "info" | "warning" | "success" | "question";
  color?: string;
  hoverColor?: string;
  hoverTextColor?: string;
  icon?: JSX.Element;
  iconColor?: string;
  hideBackground?: boolean;
  hideShadow?: boolean;
};
