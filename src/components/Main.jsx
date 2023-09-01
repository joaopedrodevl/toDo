import './Main.css';

import { Component } from "react";
import Form from './Form/Form';
import Tarefas from './Tarefas/Tarefas';

export default class Main extends Component {
  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));
    if (!tarefas) return;
    this.setState({ tarefas });
  }

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;
    if (tarefas === prevState.tarefas) return;
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  handleInput = (event) => {
    const { value } = event.target;
    this.setState({ novaTarefa: value });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { novaTarefa, tarefas, index } = this.state;
    if (novaTarefa === '' || tarefas.indexOf(novaTarefa) !== -1) return;
    if (index ===  -1) {
      this.setState({
        tarefas: [...tarefas, novaTarefa.trim()],
        novaTarefa: '',
      });
    } else {
      const novasTarefas = [...tarefas];
      novasTarefas[index] = novaTarefa;
      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }

  }

  handleDelete = (event, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({ tarefas: [...novasTarefas] });
  }

  handleEdit = (event, index) => {
    const { tarefas } = this.state;

    this.setState({ index, novaTarefa: tarefas[index] });
  }

  render() {
    const { novaTarefa, tarefas } = this.state;

    return (
      <div className="main">
        <h1>Lista de tarefas</h1>

        <Form handleSubmit={this.handleSubmit} handleInput={this.handleInput} novaTarefa={novaTarefa} />

        <Tarefas tarefas={tarefas} handleDelete={this.handleDelete} handleEdit={this.handleEdit} />

      </div>
    );
  }
}
