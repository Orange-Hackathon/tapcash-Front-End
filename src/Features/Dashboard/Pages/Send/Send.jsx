import { useState } from "react";
import SendContacts from "../../Components/SendContacts/SendContacts";
import ConfirmSend from "../../Components/ConfirmSend/ConfirmSend";

const Send = () => {
  const [page, setPage] = useState(0);
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <>
      {page === 0 && <SendContacts handleChange={handleChange} />}
      {page === 1 && <ConfirmSend handleChange={handleChange} />}
      {page === 2 && <SendContacts handleChange={handleChange} />}
    </>
  );
};

export default Send;
