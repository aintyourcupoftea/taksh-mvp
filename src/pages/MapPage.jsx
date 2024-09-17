import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function MapPage() {
  const navigate = useNavigate(); // Initialize navigate hook

  // Function to handle button click
  const handleButtonClick = (id) => {
    // Send the id to the ProjectsPage component via state
    navigate('/projects', { state: { levelId: id } });
  };

  return (
    <>
      <h1>Map Page</h1>

      {/* Buttons for levels */}
      <button onClick={() => handleButtonClick(1)}>Level-1</button><br />
      <button onClick={() => handleButtonClick(2)}>Level-2</button><br />
      <button onClick={() => handleButtonClick(3)}>Level-3</button><br />
      <button onClick={() => handleButtonClick(4)}>Level-4</button><br />
      <button onClick={() => handleButtonClick(5)}>Level-5</button><br />
      <button onClick={() => handleButtonClick(6)}>Level-6</button><br />
      <button onClick={() => handleButtonClick(7)}>Level-7</button><br />
    </>
  );
}