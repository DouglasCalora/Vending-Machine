export default class CashRegister {
  constructor() {
    this._totalPrice = 0
    this._alreadyPayd = 0
    this.total = 0
    this.isValidityCoin = true
    this._complete = false
    this.coin = 0
    this.infos = {
      totalPayd: '',
      charge: 0,
      memorizeCharge: '',
      isValidityCoin: true,
      faildBuy: false,
      finished: false,
      finishedCharge: false
    }
    this._coinsInRegister = {
      5: 5,
      10: 10,
      25: 1,
      50: 1,
      100: 5
    }
  }

  getTotalPrice(totalPrice) {
    return this._totalPrice = totalPrice
  }

  getCoin(coin) {
    this._coin = coin
    return this.addCoin(this._coin)
  }

  addCoin(value) {
    if (!this._coinsInRegister.hasOwnProperty(value)) {
      this.infos.totalPayd = this._alreadyPayd
      
      return this.infos.isValidityCoin = false
    }
    
    if (this._complete) {
      return this.infos.faildBuy = true;
    }
    
    this._alreadyPayd += value
    this._coinsInRegister[value]++
    this.infos.totalPayd = this._alreadyPayd
    this.infos.isValidityCoin = true

    this.chargeBack()
  
    return this.infos
  }

  chargeBack() {
    let charge = this._totalPrice - this._alreadyPayd

    if (charge < 0) {
      
    } else if (charge === 0) {
      this.infos.finished = true
      this.infos.charge = 0

      return this.reset()
    } else {
      return this.infos.charge = charge
    }

    //Calcular troco
    charge = Math.abs(charge)
    const memorizeCharge = charge
    
    let chargeCoins = {}
    let coinsEntries = Object.entries(this._coinsInRegister)
    let coinsLength = coinsEntries.length
    
    for (let count = coinsLength - 1; count >= 0; count--) {
      let value = coinsEntries[count][0]
      let quantity = coinsEntries[count][1]
      
      let needed = parseInt(charge / value)
      
      if (needed >= 1 && quantity >= 1) {
        if (quantity < needed) {
          charge -= value * quantity
          chargeCoins[value] = quantity
        } else {
          charge -= value * needed
          chargeCoins[value] = needed
        }
      }
    }
    
    this.infos.charge = chargeCoins
    this.infos.memorizeCharge = memorizeCharge
    
    if (charge > 0) {
      this.infos.faildBuy = true

      return this.reset()
    }

    this.infos.finishedCharge = true

    this.reset()
  }

  reset() {
    this._complete = true
    this._alreadyPayd = 0
  }
}