import { useParams } from "react-router-dom";

const Animal = () => {
  const { nome } = useParams<{ nome: string }>();

  return (
    <>
      <h1>Animal</h1>
      <p>
        O nome do animal é: <strong>{nome}</strong>
      </p>
    </>
  );
};

export default Animal;
