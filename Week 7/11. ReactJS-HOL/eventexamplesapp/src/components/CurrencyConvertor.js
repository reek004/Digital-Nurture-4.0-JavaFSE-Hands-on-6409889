import React, { Component } from 'react';

class CurrencyConvertor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: '',
      currency: '',
      convertedAmount: 0
    };
  }

  handleAmountChange = (event) => {
    this.setState({ amount: event.target.value });
  };

  handleCurrencyChange = (event) => {
    this.setState({ currency: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // Conversion rate: 1 Euro = 90 INR (example rate)
    const exchangeRate = 90;
    const amount = parseFloat(this.state.amount);
    const currency = this.state.currency.toLowerCase();
    
    if (!isNaN(amount) && amount > 0) {
      if (currency === 'inr') {
        // Convert from INR to Euro
        const euroValue = amount / exchangeRate;
        this.setState({ convertedAmount: euroValue.toFixed(2) });
        alert(`Converting ₹${amount} INR to Euro = €${euroValue.toFixed(2)}`);
      } else {
        // Convert from Euro to INR
        const inrValue = amount * exchangeRate;
        this.setState({ convertedAmount: inrValue.toFixed(2) });
        alert(`Converting €${amount} Euro to INR = ₹${inrValue.toFixed(2)}`);
      }
    } else {
      alert('Please enter a valid amount');
    }
  };

  render() {
    return (
      <div>
        <h2>Currency Convertor!!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label>Amount: </label>
            <input 
              type="number" 
              value={this.state.amount} 
              onChange={this.handleAmountChange}
              placeholder="Enter amount in INR"
            />
          </div>
          <div>
            <label>Currency: </label>
            <input 
              type="text" 
              value={this.state.currency} 
              onChange={this.handleCurrencyChange}
              placeholder="Enter currency (INR or Euro)"
            />
          </div>
          <button type="submit">Submit</button>
        </form>
        {this.state.convertedAmount > 0 && (
          <p>
            {this.state.currency.toLowerCase() === 'inr' 
              ? `₹${this.state.amount} INR = €${this.state.convertedAmount} EUR`
              : `€${this.state.amount} EUR = ₹${this.state.convertedAmount} INR`
            }
          </p>
        )}
      </div>
    );
  }
}

export default CurrencyConvertor;