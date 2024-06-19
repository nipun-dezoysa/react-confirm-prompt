import React, { useState, useEffect, useRef } from "react";
import "./ConfirmBox.css";
import { TiInfoOutline, TiWarningOutline } from "react-icons/ti";
import { GrStatusGood, GrCircleQuestion } from "react-icons/gr";
import { options } from "./varTypes";

function ConfirmBox(props: {
  resolve: (value: boolean) => void;
  container: string;
  title: string;
  options: options;
}) {
  const { resolve, container, title, options } = props;

  const getInitialColor = (type: string) => {
    if (options.color) {
      return options.color;
    } else {
      switch (type) {
        case "question":
          return "rgb(34 211 238)";
        case "warning":
          return "#f00";
        case "success":
          return "rgb(74 222 128)";
        default:
          return "rgb(96 165 250)";
      }
    }
  };

  const [iconColor, setIconColor] = useState(
    getInitialColor(options.type ? options.type : "")
  );

  const getInitialIcon = (type: string) => {
    if (options.icon) {
      return options.icon;
    } else {
      switch (type) {
        case "question":
          return <GrCircleQuestion />;
        case "warning":
          return <TiWarningOutline />;
        case "success":
          return <GrStatusGood />;
        default:
          return <TiInfoOutline />;
      }
    }
  };

  const [icon, setIcon] = useState(
    getInitialIcon(options.type ? options.type : "")
  );

  function confirm(answer: boolean) {
    const div = document.getElementById(container);
    if (div) {
      div.remove();
    }
    resolve(answer);
  }

  const handleMouseOver = (e: any) => {
    e.target.style.backgroundColor = options.hoverColor
      ? options.hoverColor
      : "rgb(28 25 23)";
    e.target.style.color = options.hoverTextColor
      ? options.hoverTextColor
      : "white";
  };

  const handleConfirmOut = (e: any) => {
    e.target.style.backgroundColor = options.confirmColor
      ? options.confirmColor
      : iconColor;
    e.target.style.color = options.confirmTextColor
      ? options.confirmTextColor
      : "white";
  };

  const handleCancelOut = (e: any) => {
    e.target.style.backgroundColor = options.cancelColor
      ? options.cancelColor
      : "rgb(229 231 235)";
    e.target.style.color = options.cancelTextColor
      ? options.cancelTextColor
      : "black";
  };

  const confirmRef = useRef<HTMLButtonElement | null>(null);
  const cancelRef = useRef<HTMLButtonElement | null>(null);
  
  useEffect(() => {
    confirmRef.current?.focus();
  }, []);

  const handleKey = (e:any)=>{
    if(e.keyCode === 38)confirmRef.current?.focus();
    else if(e.keyCode === 40) cancelRef.current?.focus();
  }

  return (
    <>
      <div
        onClick={() => {
          if (!options.disableBlur) confirm(false);
        }}
        className="backGround"
        style={{
          backgroundColor: options.hideBackground
            ? "none"
            : "rgba(0, 0, 0, 0.5)",
        }}
      />
      <div
        className="box"
        style={{
          filter: options.hideShadow
            ? "none"
            : "drop-shadow(0 25px 25px rgb(0 0 0 / 0.15))",
        }}
      >
        <div
          className="icon"
          style={{
            backgroundColor: options.iconColor ? options.iconColor : iconColor,
          }}
        >
          {icon}
        </div>
        <div className="title">{title}</div>
        <div className="description">
          {options.description ? options.description : ""}
        </div>
        <button
          onClick={() => confirm(true)}
          className="btn action"
          style={{
            backgroundColor: options.confirmColor
              ? options.confirmColor
              : iconColor,
            color: options.confirmTextColor
              ? options.confirmTextColor
              : "white",
          }}
          onMouseOver={handleMouseOver}
          onMouseOut={handleConfirmOut}
          ref={confirmRef}
          onKeyDown={handleKey}
        >
          {options.confirmLabel ? options.confirmLabel : "Confirm"}
        </button>
        {!options.hideCancel && (
          <button
            onClick={() => confirm(false)}
            className="btn cancel"
            style={{
              backgroundColor: options.cancelColor
                ? options.cancelColor
                : "rgb(229 231 235)",
              color: options.cancelTextColor
                ? options.cancelTextColor
                : "black",
            }}
            onMouseOver={handleMouseOver}
            onMouseOut={handleCancelOut}
            ref={cancelRef}
            onKeyDown={handleKey}
          >
            {options.cancelLabel ? options.cancelLabel : "Cancel"}
          </button>
        )}
      </div>
    </>
  );
}

export default ConfirmBox;
