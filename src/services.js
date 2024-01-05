import axios from "axios";

// const MOCK_API_BASE_URL = "https://65971a09668d248edf229561.mockapi.io";

const MOCK_API_BASE_URL = "https://65986476668d248edf248d1e.mockapi.io/";

export const getCoordinates = async (address) => {
  const options = {
    method: "GET",
    url: "https://forward-reverse-geocoding.p.rapidapi.com/v1/forward",
    params: {
      city: address,
    },
    headers: {
      "X-RapidAPI-Key": "0561863ecdmsha19dc02207be928p1f1a09jsn4563bc2d6a3e",
      "X-RapidAPI-Host": "forward-reverse-geocoding.p.rapidapi.com",
    },
  };

  return await axios(options).then((response) => {
    return response;
  });
};

export const getAds = async () => {
  const data = await axios.get(`${MOCK_API_BASE_URL}/ads`);
  return data;
};
