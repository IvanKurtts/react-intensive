import { useNavigate } from "react-router-dom";

export const NotFound = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/");
  };
  return (
    <>
      <button className="backButton" onClick={goBack}>
        Назад
      </button>
      <h2 className="errorPage">
        Что-то пошло не так. Данной страницы не существует...
      </h2>
    </>
  );
};
