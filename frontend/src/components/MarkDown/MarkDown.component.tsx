import Markdown from "react-markdown";

type MarkDownProps = {
  markdownText: string;
  className?: string;
};

const MarkDown = ({ markdownText, className }: MarkDownProps) => {
  return <Markdown className={className}>{markdownText}</Markdown>;
};

export default MarkDown;
