type TextAreaProps = {
  defaultText: string;
  setText: (e?: any) => void;
  cols: number;
  rows: number;
  className?: string;
  id: string;
  name: string;
};

const TextArea = ({
  name,
  id,
  defaultText,
  setText,
  rows,
  cols,
  className,
}: TextAreaProps) => {
  return (
    <>
      <textarea
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        onChange={(e: any) => setText(e.target.value)}
        defaultValue={defaultText}
        className={className}
      ></textarea>
    </>
  );
};

TextArea.defaultProps = {
  cols: 30,
  rows: 10,
};

export default TextArea;
