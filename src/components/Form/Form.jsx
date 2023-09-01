import PropTypes from 'prop-types';
import { FaPlus } from 'react-icons/fa'

import './Form.css';

export default function Form({ handleSubmit, handleInput, novaTarefa }){
  return (
    <form action="#" className='form' onSubmit={handleSubmit}>
      <div className='tarefa-container'>
        <input onChange={handleInput} type="text" placeholder="Digite uma tarefa" value={novaTarefa}/>
        <button type="submit">
          <FaPlus />
        </button>
      </div>
    </form>
  );
}

Form.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleInput: PropTypes.func.isRequired,
  novaTarefa: PropTypes.string.isRequired,
}
