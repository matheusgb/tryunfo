import React from 'react';
import Form from './components/Form';
import Card from './components/Card';
import Filters from './components/Filters';
import './styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      savedCards: [],
      inputName: '',
      inputRaro: '',
      inputTrunfo: false,
      total: 210,
    };
    this.onInputChange = this.onInputChange.bind(this);
    this.validar = this.validar.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.remove = this.remove.bind(this);
    this.onInputChange2 = this.onInputChange2.bind(this);
  }

  onInputChange({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    }, () => {
      this.validar();
    });
  }

  onInputChange2({ target }) {
    const { name } = target;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name]: value,
    });
  }

  onSaveButtonClick() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo } = this.state;

    const data = { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo };

    this.setState((ea) => ({
      savedCards: [...ea.savedCards, data],
      isSaveButtonDisabled: true,
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: '',
      cardTrunfo: false,
    }));

    document.getElementById('reset').reset();

    this.setState({ total: 210 });

    if (cardTrunfo === true) { this.setState({ hasTrunfo: true }); }
  }

  validar() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare } = this.state;

    const max = 90;
    const sumAll = 210;

    const fields = [cardName, cardDescription, cardImage, cardRare];
    const emptyFields = fields.every((field) => field !== '');

    const att1 = cardAttr1 >= 0 && cardAttr1 <= max;
    const att2 = cardAttr2 >= 0 && cardAttr2 <= max;
    const att3 = cardAttr3 >= 0 && cardAttr3 <= max;
    const sum = parseInt(cardAttr1, 10)
    + parseInt(cardAttr2, 10) + parseInt(cardAttr3, 10) <= sumAll;

    const sum2 = +cardAttr1 + +cardAttr2 + +cardAttr3;

    const valid = emptyFields && att1 && att2 && att3 && sum;
    if (valid === true) {
      this.setState({ isSaveButtonDisabled: false });
    } else {
      this.setState({ isSaveButtonDisabled: true });
    }

    this.setState({ total: sumAll - sum2 });
  }

  remove(e) {
    const { savedCards } = this.state;

    if (e.target.parentNode.firstChild.firstChild.lastChild.className === 'truf') {
      this.setState({ hasTrunfo: false });
    }

    this.setState({ savedCards: savedCards
      .filter((_, i) => i !== +e.currentTarget.className) });
  }

  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3, cardImage,
      cardRare, cardTrunfo, hasTrunfo, isSaveButtonDisabled, savedCards, inputName,
      inputRaro, inputTrunfo, total } = this.state;

    const tar = ({ target }) => target.name;

    return (
      <div className="total">
        <main className="meio">
          <div className="form">
            <div className="superclube">
              <p className="titulo">SUPER</p>
              <p className="titulo">CLUBE</p>
            </div>
            <p>Adicione seu clube de futebol!</p>
            <div className="forminho">
              <Form
                value={ tar }
                isSaveButtonDisabled={ isSaveButtonDisabled }
                onSaveButtonClick={ this.onSaveButtonClick }
                onInputChange={ this.onInputChange }
                hasTrunfo={ hasTrunfo }
                total={ total }
              />
            </div>
          </div>
          <div className="card">
            <div className="blur">
              <Card
                cardName={ cardName }
                cardDescription={ cardDescription }
                cardAttr1={ cardAttr1 }
                cardAttr2={ cardAttr2 }
                cardAttr3={ cardAttr3 }
                cardImage={ cardImage }
                cardRare={ cardRare }
                cardTrunfo={ cardTrunfo }
              />
            </div>
          </div>
        </main>

        <Filters
          inputName={ inputName }
          onInputChange2={ this.onInputChange2 }
          inputRaro={ inputRaro }
          inputTrunfo={ inputTrunfo }
        />

        <div className="savedcards">
          {savedCards
            .filter((el) => (inputTrunfo === false ? el : el.cardTrunfo === true))
            .filter((el) => (inputRaro === '' ? el : el.cardRare === inputRaro))
            .filter((el) => el.cardName.toLowerCase().includes(inputName.toLowerCase()))
            .map((el, index) => (
              <div key={ el.cardName }>
                <Card
                  key={ el.cardName }
                  cardName={ el.cardName }
                  cardDescription={ el.cardDescription }
                  cardAttr1={ el.cardAttr1 }
                  cardAttr2={ el.cardAttr2 }
                  cardAttr3={ el.cardAttr3 }
                  cardImage={ el.cardImage }
                  cardRare={ el.cardRare }
                  cardTrunfo={ el.cardTrunfo }
                  { ...cardTrunfo === true
            && <p className="truf" data-testid="trunfo-card"> Super Trunfo </p> }
                />

                <button
                  type="button"
                  className={ index }
                  onClick={ this.remove }
                  data-testid="delete-button"
                >
                  Excluir

                </button>
              </div>
            ))}
        </div>
      </div>
    );
  }
}

export default App;
