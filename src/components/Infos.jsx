function Component({ children }) {
  return (
    <div className="infos">
      {children.map((child, index) => (
        <>
          {index > 0 && (
            <svg
              width="5"
              height="4"
              viewBox="0 0 5 4"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="2.5" cy="2" r="2" fill="#B7C4C4" />
            </svg>
          )}
          {child}
        </>
      ))}
    </div>
  );
}

export default Component;
