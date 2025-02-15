import styled from 'styled-components';

// Base tag style
const Tag = styled.span`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: white;
  margin-right: 4px;
`;

// Specific styles for each tag type
export const CheapestTag = styled(Tag)`
  background-color: #4caf50; // Green
`;

export const FastestTag = styled(Tag)`
  background-color: #2196f3; // Blue
`;

export const ShortestTag = styled(Tag)`
  background-color: #ff9800; // Orange
`;

export const PopularTag = styled(Tag)`
  background-color: #f44336; // Red
`;

// Example usage