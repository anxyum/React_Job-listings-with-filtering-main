function Component({ tag, onClick }) {
  return <span onClick={() => onClick(tag)} className="tag">{tag}</span>;
}

export default Component;
