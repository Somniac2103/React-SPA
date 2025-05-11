import { useNavigate } from 'react-router-dom';

function GoBackButton() {
  const navigate = useNavigate();
  return <button onClick={() => navigate(-1)}>Return to Previous Page</button>;
}

export default GoBackButton