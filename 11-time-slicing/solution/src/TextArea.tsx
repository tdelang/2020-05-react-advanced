import React, { useRef, useLayoutEffect } from "react";
import calculateNodeHeight from "./calculateNodeHeight";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TextArea: React.FC<Props> = (props) => {
  const textareaElement = useRef<HTMLTextAreaElement>(null);

  useLayoutEffect(() => {
    if (textareaElement.current) {
      const height = calculateNodeHeight(textareaElement.current);
      textareaElement.current.style.height = `${height}px`;
    }
  });

  return (
    <textarea
      ref={textareaElement}
      value={props.value}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
    />
  );
};

export default TextArea;
