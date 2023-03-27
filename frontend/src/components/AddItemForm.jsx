/* eslint react/prop-types: 0 */
import { useState } from "react";
import styled from "@emotion/styled";
import axios from "axios";

const StyledButton = styled.input`
  font-size: 2rem;
  all: unset;
  font-size: 2.5rem;
  margin-left: 0.5rem;
  cursor: pointer;
  &:hover {
    color: blue;
  }
`;

const StyledForm = styled.form`
  display: flex;
  align-items: center;
`;

function AddItemForm({ setItems, items }) {
  const [itemTitle, setItemTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (itemTitle.length > 3) {
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/items`, {
          title: itemTitle,
        })
        .then(() =>
          setItems([...items, { id: items.at(-1).id + 1, title: itemTitle }])
        );
    } else {
      alert("Please give a title");
    }
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <input
        style={{ height: "1.5rem" }}
        type="text"
        name="itemTitle"
        id="itemTitle"
        value={itemTitle}
        onChange={(e) => setItemTitle(e.target.value)}
      />
      <StyledButton type="submit" value="+" />
    </StyledForm>
  );
}

export default AddItemForm;
