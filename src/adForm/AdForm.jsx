import React, { useState } from "react";

const AdForm = () => {
  const [advertisement, setAdvertisement] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    // Отримати дані з форми та використати їх
    console.log("Submitted Advertisement:", advertisement);

    // Тут ви можете реалізувати логіку для відправлення даних на сервер або виконати інші дії
  };

  const handleInputChange = (event) => {
    setAdvertisement(event.target.value);
  };

  return (
    <>
      <h2>Make an advertisement</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Advertisement:
          <input
            type="text"
            value={advertisement}
            onChange={handleInputChange}
          />
        </label>
        <button type="submit">Post advertisement</button>
      </form>
    </>
  );
};

export default AdForm;
