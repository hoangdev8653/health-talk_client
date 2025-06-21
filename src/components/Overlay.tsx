import React from "react";

type OverlayProps = {
    onClick?: () => void;
}

function Overlay({ onClick } : OverlayProps) {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor: "rgba(0, 0, 0, 0.5)", zIndex: "49" }}
      className="fixed top-0 left-0 w-full h-full overflow-y-auto "
    ></div>
  );
}

export default Overlay;
