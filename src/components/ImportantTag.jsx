function Component({ tag, color }) {
  return (
    <div className="important-tag" style={{ backgroundColor: color }}>
      {tag}
    </div>
  );
}

export default Component;
