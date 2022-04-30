import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <div className="form2">
        <label htmlFor="nome da carta">
          Nome:

          <input
            type="text"
            name="cardName"
            data-testid="name-input"
            id="nome da carta"
            value={ cardName }
            className="input"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="descrição da carta">
          Descrição:
          <br />
          <textarea
            cols="30"
            rows="5"
            name="cardDescription"
            data-testid="description-input"
            id="descrição da carta"
            className="input"
            value={ cardDescription }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="primeiro atributo">
          Ataque:
          <input
            type="number"
            name="cardAttr1"
            data-testid="attr1-input"
            id="primeiro atributo"
            className="inputn"
            value={ cardAttr1 }
            defaultValue="0"
            max="90"
            min="0"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="segundo atributo">
          Meio de campo:
          <input
            type="number"
            name="cardAttr2"
            data-testid="attr2-input"
            id="segundo atributo"
            className="inputn"
            value={ cardAttr2 }
            defaultValue="0"
            max="90"
            min="0"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="terceiro atributo">
          Defesa:
          <input
            type="number"
            name="cardAttr3"
            data-testid="attr3-input"
            id="terceiro atributo"
            className="inputn"
            value={ cardAttr3 }
            defaultValue="0"
            max="90"
            min="0"
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="imagem">
          URL do escudo do clube:

          <input
            type="text"
            className="input"
            name="cardImage"
            data-testid="image-input"
            id="imagem"
            value={ cardImage }
            onChange={ onInputChange }
          />
        </label>

        <label htmlFor="raridade">
          Divisão:
          {' '}
          <select
            data-testid="rare-input"
            id="raridade"
            name="cardRare"
            className="inputr"
            value={ cardRare }
            onChange={ onInputChange }
            defaultValue="DEFAULT"
          >
            <option value="DEFAULT" disabled>Selecione sua divisão</option>
            <option>Primeira divisão</option>
            <option>Segunda divisão</option>
            <option>Terceira divisão</option>
          </select>
        </label>

        {
          hasTrunfo === true ? (<p>Você já tem um Super Trunfo em seu baralho</p>)
            : (
              <label htmlFor="trynfo">
                Super clube?
                {' '}
                <input
                  className="super"
                  type="checkbox"
                  data-testid="trunfo-input"
                  id="trynfo"
                  name="cardTrunfo"
                  checked={ cardTrunfo }
                  onChange={ onInputChange }
                />
              </label>
            )
        }

        <button
          type="submit"
          data-testid="save-button"
          name="isSaveButtonDisabled"
          className="submit"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string,
  cardDescription: PropTypes.string,
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardImage: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  hasTrunfo: PropTypes.bool,
  isSaveButtonDisabled: PropTypes.bool,
  onInputChange: PropTypes.func,
  onSaveButtonClick: PropTypes.func,
}.isRequired;

export default Form;
