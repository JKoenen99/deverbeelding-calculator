const { useState } = React;

function App() {
  const [items, setItems] = useState([{ description: '', quantity: 1, price: 0 }]);

  const addItem = () => {
    setItems([...items, { description: '', quantity: 1, price: 0 }]);
  };

  const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
  };

  const total = items.reduce((sum, item) => sum + item.quantity * item.price, 0);

  return (
    React.createElement('div', null,
      React.createElement('h1', null, 'Offerte Calculator'),
      React.createElement('table', null,
        React.createElement('thead', null,
          React.createElement('tr', null,
            React.createElement('th', null, 'Omschrijving'),
            React.createElement('th', null, 'Aantal'),
            React.createElement('th', null, 'Prijs per stuk'),
            React.createElement('th', null, 'Subtotaal')
          )
        ),
        React.createElement('tbody', null,
          items.map((item, index) =>
            React.createElement('tr', { key: index },
              React.createElement('td', null,
                React.createElement('input', {
                  type: 'text',
                  value: item.description,
                  onChange: e => updateItem(index, 'description', e.target.value)
                })
              ),
              React.createElement('td', null,
                React.createElement('input', {
                  type: 'number',
                  min: 0,
                  value: item.quantity,
                  onChange: e => updateItem(index, 'quantity', Number(e.target.value))
                })
              ),
              React.createElement('td', null,
                React.createElement('input', {
                  type: 'number',
                  step: '0.01',
                  min: 0,
                  value: item.price,
                  onChange: e => updateItem(index, 'price', Number(e.target.value))
                })
              ),
              React.createElement('td', null, (item.quantity * item.price).toFixed(2))
            )
          )
        )
      ),
      React.createElement('button', { onClick: addItem }, 'Regel toevoegen'),
      React.createElement('h2', null, `Totaal: €${total.toFixed(2)}`)
    )
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(React.createElement(App));
