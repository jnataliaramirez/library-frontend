const FormNewBook = (props) => {
  const handleNameBook = (ev) => {
    props.handleNameBook(ev.target.value);
  };

  const handleAuthorBook = (ev) => {
    props.handleAuthorBook(ev.target.value);
  };

  const handleIsbnBook = (ev) => {
    props.handleIsbnBook(ev.target.value);
  };

  const handleCreateBook = (ev) => {
    ev.preventDefault();
    props.handleCreateBook();
  };

  const handleUpdateBook = (ev) => {
    ev.preventDefault();
    props.handleUpdateBook();
  };

  const renderSelect = () => {
    const empty = [];
    empty.push({ first_name: '---', last_name: '---', uuid: '0-initial' });
    const authorJoin = empty.concat(props.authors);
    return authorJoin.map((author) => {
      return (
        <option value={author.uuid} key={`author-${author.uuid}`}>
          {author.first_name} {author.last_name}
        </option>
      );
    });
  };

  return (
    <div className='form'>
      <h3 className='form__title'>Add info your library</h3>
      <form>
        <div className='form__books'>
          <label className='label' htmlFor='nameBook'>
            Name:
          </label>
          <input
            className='input'
            type='text'
            name='nameBook'
            id='nameBook'
            value={props.nameBook}
            onChange={handleNameBook}
            required
          />
          <label htmlFor='authorBook'>Author:</label>
          <select name='authorBook' id='authorBook' onChange={handleAuthorBook}>
            {renderSelect()}
          </select>
          <label htmlFor='isbnBook'>ISBN:</label>
          <input
            className='input'
            type='text'
            name='isbnBook'
            id='isbnBook'
            value={props.isbnBook}
            onChange={handleIsbnBook}
            required
          />
        </div>
        <div className='form__btns'>
          <input
            className='btn form__create'
            type='submit'
            value='Create'
            onClick={handleCreateBook}
          />
          <input
            className='btn form__update'
            type='submit'
            value='Update'
            onClick={handleUpdateBook}
          />
        </div>
      </form>
    </div>
  );
};

export default FormNewBook;
