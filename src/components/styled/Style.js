import styled from 'styled-components';
export const SearchContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
    @media (max-width: 768px) {
        flex-direction: column;
        padding: 16px;
    }
`;

export const StyledDateInput = styled.input`
  /* Add your styles here */
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 16px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
  }

  /* You can add more styles as needed */
`;