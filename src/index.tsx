import React from "react";
import ConfirmBox from "./component/ConfirmBox";
import { createRoot } from "react-dom/client";
import { options } from "./component/varTypes";

export function showConfirm(title: string, options: options = {}) {
  const root = document.getElementById("root");
  const div = document.createElement("div");
  div.id = randomName();
  div.style.position = "fixed";
  div.style.top = "0";
  div.style.left = "0";
  div.style.width = "100%";
  div.style.height = "100%";
  div.style.zIndex = "1000";
  div.style.display = "flex";
  div.style.justifyContent = "center";
  div.style.alignItems = "center";
  return new Promise((resolve, reject) => {
    if (root) {
      root.appendChild(div);
      const container = createRoot(div);
      container.render(
        <ConfirmBox
          confirm={(answer: boolean) => {
            container.unmount();
            root.removeChild(div);
            resolve(answer);
          }}
          title={title}
          options={options}
        />
      );
    } else {
      reject("root not found");
    }
  });
}

function randomName(): string {
  return Math.random().toString(36).substring(7);
}
