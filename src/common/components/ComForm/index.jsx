const ComForm = ({children, onSubmit, ...props}) => {
  const submitOnEnterKey = (e) => e.key === 'Enter' && onSubmit();
  return (
    <form onKeyDown={submitOnEnterKey} {...props}>
      {children}
    </form>
  );
};

export default ComForm;
