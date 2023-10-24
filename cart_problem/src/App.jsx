import React, { useState } from "react";
import Biryani from "./components/Biryani";
import Chips from "./components/Chips";
import Noodles from "./components/Noodles";
import "./index.css";

function App() {
  const [noodlesQuantity, setNoodlesQuantity] = useState(0);
  const [biryaniQuantity, setBiryaniQuantity] = useState(0);
  const [chipsQuantity, setChipsQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  function handleIncNoodlesQuantity() {
    setNoodlesQuantity((quantity) => quantity + 1);
  }

  function handleDecNoodlesQuantity() {
    if (noodlesQuantity > 0) {
      setNoodlesQuantity((quantity) => quantity - 1);
    }
  }

  function handleIncBiryaniQuantity() {
    setBiryaniQuantity((quantity) => quantity + 1);
  }

  function handleDecBiryaniQuantity() {
    if (biryaniQuantity > 0) {
      setBiryaniQuantity((quantity) => quantity - 1);
    }
  }

  function handleIncChipsQuantity() {
    setChipsQuantity((quantity) => quantity + 1);
  }

  function handleDecChipsQuantity() {
    if (chipsQuantity > 0) {
      setChipsQuantity((quantity) => quantity - 1);
    }
  }

  function updateTotal() {
    const noodlesPrice = 30;
    const biryaniPrice = 90;
    const chipsPrice = 10;
    const newTotal =
      noodlesQuantity * noodlesPrice +
      biryaniQuantity * biryaniPrice +
      chipsQuantity * chipsPrice;
    setTotal(newTotal);
  }

  // Call the updateTotal function whenever a quantity changes
  // This will ensure the total is updated correctly
  React.useEffect(() => {
    updateTotal();
  }, [noodlesQuantity, biryaniQuantity, chipsQuantity]);

  return (
    <>
      <div className="chart">
        <h2>Cart</h2>
        <Noodles
          onhandleinc={handleIncNoodlesQuantity}
          onhandledec={handleDecNoodlesQuantity}
          quantity={noodlesQuantity}
          price={30}
        />
        <Biryani
          onhandleinc={handleIncBiryaniQuantity}
          onhandledec={handleDecBiryaniQuantity}
          quantity={biryaniQuantity}
          price={90}
        />
        <Chips
          onhandleinc={handleIncChipsQuantity}
          onhandledec={handleDecChipsQuantity}
          quantity={chipsQuantity}
          price={10}
        />
        <h2>Total: {total}</h2>
      </div>
    </>
  );
}

export default App;
