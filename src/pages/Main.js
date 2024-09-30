import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import BotpressChat from "../components/BotpressChat";
import bgimg2 from "../images/plant1.png";

function Main() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [prediction, setPrediction] = useState(null);
  const [health, setHealth] = useState("");
  const [imageURL, setImageURL] = useState("");
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
    setImageURL(URL.createObjectURL(e.target.files[0]));
  };

  const getPrediction = async () => {
    if (!selectedFile) {
      alert("Please upload an image first.");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      const response = await axios.post(
        "http://localhost:5000/predict",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setPrediction(response.data.prediction);
      const pred = response.data.prediction[1];
      if (pred === 0) {
        navigate("/healthy", { state: { imageURL } });
      } else if (pred === 1) {
        navigate("/multiple", { state: { imageURL } });
      } else if (pred === 2) {
        navigate("/rust", { state: { imageURL } });
      } else navigate("/scab", { state: { imageURL } });
    } catch (error) {
      console.error("Error fetching prediction:", error);
    }
  };

  return (
    <div
      className="bg-cover bg-center h-screen"
      style={{ backgroundImage: `url(${bgimg2})` }}
    >
      <BotpressChat />
      <h1 className="flex justify-center text-[100px] font-spicy text-white">
        Choose an image
      </h1>
      <input
        type="file"
        onChange={handleFileChange}
        accept="image/*"
        className="absolute text-xl mt-[80px] left-[36%] bg-white p-3 border rounded-full hover:rounded-none hover:bg-green-800 font-mono transition-all ease-in-out duration-300"
      />
      <div className="absolute flex justify-center left-[43%] mt-[200px]">
        <div className="relative group cursor-pointer">
          <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-blue-500-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <div className="relative px-7 py-6 bg-white ring-1 ring-gray-900/5 rounded-lg leading-none flex items-top justify-start space-x-6">
            <div className="space-y-2">
              <button
                className="text-slate-800 font-mono"
                onClick={getPrediction}
              >
                Get Prediction
              </button>
            </div>
          </div>
        </div>
      </div>

      {prediction && (
        <div>
          <h2>Prediction Result:</h2>
          <p>{prediction[0]}</p>
          <p>{health}</p>
        </div>
      )}
    </div>
  );
}

export default Main;
