const Container = (props) => {
  const { children } = props;
  return (
    <div className="This-is">
      <h1>Container Text</h1>
      {children}
    </div>
  );
};
export default Container;
