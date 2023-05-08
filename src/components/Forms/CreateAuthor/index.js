const FormCreateAuthor = (props) => {
  const handleFirstName = (ev) => {
    props.handleFirstName(ev.target.value);
  };

  const handleLastName = (ev) => {
    props.handleLastName(ev.target.value);
  };

  const handleCreateAuthor = (ev) => {
    ev.preventDefault();
    props.handleCreateAuthor();
  };

  return (
    <div className='form'>
      <h3 className='form__title'>Create author</h3>
      <form>
        <div className='form__author'>
          <label className='label' htmlForm='first-name'>
            First Name:
          </label>
          <input
            className='input'
            type='text'
            name='first-name'
            id='first-name'
            value={props.firstName}
            onChange={handleFirstName}
            required
          />
          <label htmlFor='last-name'>Last Name:</label>
          <input
            className='input'
            type='text'
            name='last-name'
            id='last-name'
            value={props.lastName}
            onChange={handleLastName}
            required
          />
        </div>
        <div className='form__btns'>
          <input
            className='btn form__create'
            type='submit'
            value='Create'
            onClick={handleCreateAuthor}
          />
        </div>
      </form>
    </div>
  );
};

export default FormCreateAuthor;
