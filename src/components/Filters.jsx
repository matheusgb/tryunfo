import React from 'react';
import PropTypes from 'prop-types';

class Filters extends React.Component {
  render() {
    const { inputName, onInputChange2, inputRaro, inputTrunfo } = this.props;
    return (
      <div className="inputs">
        <label htmlFor="nome filtro">
          Nome:
          {' '}
          <input
            type="text"
            id="nome filtro"
            name="inputName"
            value={ inputName }
            onChange={ onInputChange2 }
            data-testid="name-filter"
            className="inpute"
          />
        </label>

        <label htmlFor="rare filtro">
          Divisão:
          {' '}
          <select
            type="text"
            id="rare filtro"
            name="inputRaro"
            value={ inputRaro }
            onChange={ onInputChange2 }
            data-testid="rare-filter"
            className="inpute"
          >
            <option value="">Todos</option>
            <option>Primeira divisão</option>
            <option>Segunda divisão</option>
            <option>Terceira divisão</option>
          </select>
        </label>

        <label htmlFor="trunfo filtro">
          Super clube
          {' '}
          <input
            type="checkbox"
            id="trunfo filtro"
            name="inputTrunfo"
            value={ inputTrunfo }
            onChange={ onInputChange2 }
            data-testid="trunfo-filter"
          />
        </label>
      </div>
    );
  }
}

Filters.propTypes = {
  inputName: PropTypes.string,
  onInputChange2: PropTypes.func,
  inputRaro: PropTypes.string,
  inputTrunfo: PropTypes.bool,
}.isRequired;

export default Filters;
