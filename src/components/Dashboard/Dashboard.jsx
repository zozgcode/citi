import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal from "@bdenzer/react-modal";
import Logo from "../../assets/logoo.png";
// import creditCard from "../../assets/1617888734hh2iaLYuB1.png";
import "./Dashboard.css";
import KarenHayes from "../AllUserTransactions/KarenHayes";
import StephanieSarahJensen from "../AllUserTransactions/StephanieSarahJensen";
import JohnIrwin from "../AllUserTransactions/JohnIrwin";
import HarleyRollin from "../AllUserTransactions/HarleyRollin";
import GeorgeCarrieLilly from "../AllUserTransactions/GeorgeCarrieLilly";
import JackThomasLedBetter from "../AllUserTransactions/JackThomasLedBetter";
import MorganRisse from "../AllUserTransactions/MorganRisse";
import GeorgeRobertMulling from "../AllUserTransactions/GeorgeRobertMulling";
import SherrandaDionnePatton from "../AllUserTransactions/SherrandaDionnePatton";
import SusanNicholson from "../AllUserTransactions/SusanNicholson";
import HendrixEdwardBilly from "../AllUserTransactions/HendrixEdwardBilly";

export default function Dashboard() {
  const [shouldShowModal, setShouldShowModal] = useState(false);
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user")); // get the user data

  const signOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user"); // remove the user data
    navigate("/login");
  };

  const closeModal = () => {
    setShouldShowModal(false);
  };

  const openModal = () => {
    setShouldShowModal(true);
  };
  //   const { match } = props;
  return (
    <div className="dashboard">
      <div className="dashboard_header">
        <img className="Logo" src={Logo} alt="logo" />
        <button className="logout_btn" onClick={signOut} href="#">
          Logout
        </button>
      </div>
      <div className="main-account-balance">
        <div className="account_text">
          <h2>Welcome,<br /> {user.name}</h2>
        </div>
        <div className="account-details">
          <h2>Current Balance</h2>
          <span className="price">${user.amount}</span>
          {user.savingAccountName && (
            <>
              <h2 className="saving_account">Saving Account</h2>
              <h2 className="saving_account_name">
                {user.savingAccountName}{" "}
                <span className="price saving_account_price">
                  ${user.savingAccountAmount}
                </span>
              </h2>
            </>
          )}
        </div>
        <div className="transaction_container">
          {user.id === 1 && <KarenHayes />}
          {user.id === 2 && <StephanieSarahJensen />}
          {user.id === 3 && <JohnIrwin />}
          {user.id === 4 && <HarleyRollin />}
          {user.id === 5 && <GeorgeCarrieLilly />}
          {user.id === 6 && <JackThomasLedBetter />}
          {user.id === 7 && <MorganRisse />}
          {user.id === 8 && <GeorgeRobertMulling />}
          {user.id === 9 && <SherrandaDionnePatton />}
          {user.id === 10 && <SusanNicholson />}
          {user.id === 11 && <HendrixEdwardBilly />}
        </div>
      </div>
      {/* <div className="credit_card">
        <img src={creditCard} alt="creditCard" />
        <span>{user.cardName}</span>
      </div> */}
      <div className="account-footer">
        <div>
          <span>
            <i className="fa fa-user" aria-hidden="true"></i>
          </span>
          <span>Account</span>
        </div>
        <div onClick={() => openModal()}>
          <span>
            <i className="fa fa-exchange" aria-hidden="true"></i>
          </span>
          <span>Transfer</span>
        </div>

        <div>
          <span>
            <i className="fa-solid fa-angles-down"></i>
          </span>
          <span>Deposit</span>
        </div>
        <div>
          <span>
            <i className="fa fa-money" aria-hidden="true"></i>
          </span>
          <span>Pay</span>
        </div>
      </div>
      <Modal
        closeModal={closeModal}
        shouldShowModal={shouldShowModal}
        title="Transfer Fund"
      >
        <form className="modal_form" onSubmit={(e) => e.preventDefault()}>
          <div>
            <label>Recipient Account</label>
            <input type="text" />
          </div>
          <div>
            <label>Amount ($)</label>
            <input type="text" />
          </div>
          <div>
            <button onClick={() => closeModal()}>Transfer</button>
          </div>
        </form>
      </Modal>
    </div>
  );
}
