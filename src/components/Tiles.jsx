function Component({ children }) {
  if (!children) return null;
  return <div className="tiles">{children}</div>;
}

export default Component;
