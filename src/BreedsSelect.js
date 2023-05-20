import React from "react";
import styled from "styled-components";

export const BreedsSelect = ({ breeds, selectedBreed, setSelectedBreed }) => {
  const handleChange = (event) => {
    setSelectedBreed(event.target.value);
  };

  return (
    <Select value={selectedBreed} onChange={handleChange}>
      <option value="">選択してください</option>
      {breeds.map((breed) => (
        <option key={breed} value={breed}>
          {breed}
        </option>
      ))}
    </Select>
  );
};

const Select = styled.select`
height: 40px;
width: 200px;
border: grey 1px solid;
border-radius: 50px !important;
`;