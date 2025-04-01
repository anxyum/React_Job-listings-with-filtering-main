function Component({ content, color }) {
  return (
    <div className="tile" style={{ backgroundColor: color }}>
      {content}
    </div>
  );
}

export default Component;
