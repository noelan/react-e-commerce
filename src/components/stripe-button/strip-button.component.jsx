import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({ price }) => {
  const onToken = token => {
    console.log(token);
    alert("Paiement réussi");
  };

  const priceForStripe = price * 100;
  const publishableKey = "pk_test_z53T8FAkfFjyPMezD9hidBSh009aeDKm9b";
  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={"Your total is" + price + "$"}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
