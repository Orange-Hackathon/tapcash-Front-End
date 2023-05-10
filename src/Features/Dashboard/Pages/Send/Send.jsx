import { useState } from "react";
import SendContacts from "../../Components/SendContacts/SendContacts";
import ConfirmSend from "../../Components/ConfirmSend/ConfirmSend";
import SendSuccess from "../../Components/SendSuccess/SendSuccess";

const Send = ({ handleDashboardChange }) => {
  const [page, setPage] = useState(0);
  const handleChange = (event, newValue) => {
    setPage(newValue);
  };

  return (
    <>
      {page === 0 && <SendContacts handleChange={handleChange} />}
      {page === 1 && <ConfirmSend handleChange={handleChange} />}
      {page === 2 && (
        <SendSuccess
          handleDashboardChange={handleDashboardChange}
          handleChange={handleChange}
        />
      )}
    </>
  );
};

export default Send;
