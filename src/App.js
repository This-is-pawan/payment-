import './App.css';
import { Data } from './Data';

function App() {
  return (
    <>
      <div className="payment-main">
        <div className="payment-align">
          <div className="payment-method">
            <h2>Payment Methods</h2>
            <div className="underline"></div>
            <article className="icons">
              <div className="first">
                <i className="fas fa-wallet"></i>
                <h4>Payment by Card</h4>
                <i className="fa-regular fa-square-caret-right"></i>
              </div>
              <div className="second">
                <i className="fas fa-bank"></i>
                <h4>Internet Banking</h4>
                <i className="fa-regular fa-square-caret-right"></i>
              </div>
              <div className="third">
                <i className="fas fa-credit-card"></i>
                <h4>Apple/Google Pay</h4>
                <i className="fa-regular fa-square-caret-right"></i>
              </div>
              <div className="underline"></div>
            </article>
          </div>

          <div className="centerCard">
            <div className="logo">
              {Data.map((item) => (
           <>
                <img  src={item.img1} className='img' alt={``} />
                <img  src={item.img2} className='img' alt={``} />
                <img  src={item.img3} className='img' alt={``} />
                <img  src={item.img4} className='img' alt={``} />
                </>
              ))}
            </div>
            <form action="" className="form">
              <article>
              <h3 className="cardNumber">Card Number</h3>
              <article className='WalletAlign'>
              <input type="text" id="cardNumber" placeholder="0987523487876" />
              <i className="fas fa-wallet Wallet"></i>
              </article>
              <h3>Expiry Date</h3>
              <input type="text" id="expiryDate" placeholder="09/10" />
              </article>
              <article>

              <h3>CVV</h3>
              <input type="text" id="cvv" placeholder="CCV" />
              <h3>Email</h3>
              <input type="email" id="email" placeholder="example@email.com" />
              </article>
            </form>
            <div className="alignBtn">
              <button className="btn">Pay Now</button>
            </div>
          </div>

          <div className="rightContainer">
            <h2>Order Information</h2>
            <div className="empty"></div>
            <h2>Order Description</h2>
            <h3>Test Payment</h3>
            <div className="underline"></div>
            <div className="logo">
              {Data.map((item) => (
           <>
                <img  src={item.img1} className='img' alt={``} />
                
                
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
