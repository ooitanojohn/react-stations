import React, { useState, useEffect } from "react";
import {BreedsSelect} from "./BreedsSelect";
import styled from "styled-components";

export const DogListContainer = (props) => {
  const [breeds, setBreeds] = useState([]);
  const [selectedBreed, setSelectedBreed] = useState("");

  useEffect(() => {
    const fetchBreeds = async () => {
      try {
        const response = await fetch(
          "https://dog.ceo/api/breeds/list/all"
        );
        const data = await response.json();
        const breedList = Object.keys(data.message);
        setBreeds(breedList);
      } catch (error) {
        console.error("Error fetching dog breeds:", error);
      }
    };

    fetchBreeds();

    return () => {
      // クリーンアップの処理（必要に応じて記述）
    };
  }, []);

  return (
    <_DogListContainer className="dog-list-container">
      <BreedsSelect
        breeds={breeds}
        selectedBreed={selectedBreed}
        setSelectedBreed={setSelectedBreed}
      />
      <p>選択した犬種: {selectedBreed}</p>
    </_DogListContainer>
  );
};

const _DogListContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
  padding: 20px;
`;