function Component({ children }) {
  const activeTagsList = <div className="active-tags-list">{children}</div>;
  return (
    <div className="active-tags">
      {activeTagsList}
      <button
        className="active-tags-clear-button"
        onClick={() => {
          activeTagsList.children?.forEach((child) => {
            child.remove();
          });
        }}
      >
        clear
      </button>
    </div>
  );
}

export default Component;
