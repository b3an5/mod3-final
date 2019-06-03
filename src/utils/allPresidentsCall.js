export const fetchAllPresidents = async () => {
  const response = await fetch("http://localhost:3001/api/v1/presidents");
  const results = await response.json();
  return results;
};
