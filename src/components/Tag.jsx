function Component({ content, onClick }) {
  return <span onClick={() => onClick(content)} className="tag">{content}</span>;
}

export default Component;
