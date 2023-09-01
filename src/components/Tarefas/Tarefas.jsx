import { FaEdit, FaWindowClose } from 'react-icons/fa'
import PropTypes from 'prop-types';

import './Tarefas.css';

export default function Tarefas({ tarefas, handleDelete, handleEdit}) {
  return(
    <ul className="tarefas">
        {tarefas.map((tarefa, index) => (
            <li key={tarefa}>
              {tarefa}
              <div>
                <FaEdit onClick={(e) => handleEdit(e, index)} className='edit'/>
                <FaWindowClose onClick={(e) => handleDelete(e, index)} className='close'/>
              </div>
            </li>
        ))}
      </ul>
  );
}

Tarefas.propTypes = {
  tarefas: PropTypes.array.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
}
