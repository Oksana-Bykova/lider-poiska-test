import React from "react";
import "./Form.css";
import {
  checkingPatternEmail,
  checkingPatternName,
  checkingPatternNumber,
} from "../../utils/CheckingPattern";
import { useDispatch } from "react-redux";
import { setEmail, setName, setNumber } from "../../redux/modals/modalsSlice";
import { openPopup } from "../../redux/modals/modalsSlice";
import { useFormWithValidation } from "../../utils/Validation";
import { PatternFormat } from "react-number-format";

function Form() {
  const { values, handleChange, errors, isValid, resetForm } =
    useFormWithValidation();

  const { name, email, number } = values;

  const dispatch = useDispatch();

  function handleSubmit(evt) {
    evt.preventDefault();
    dispatch(setName(name));
    dispatch(setEmail(email));
    dispatch(setNumber(number));
    dispatch(openPopup());
  }

  return (
    <section className="form">
      <h2 className="form__title">Пожалуйста, представьтесь</h2>

      <form className="form__form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="name">
          <input
            type="text"
            className="form__input"
            name="name"
            id="name"
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            placeholder="Ваше имя"
            value={name || ""}
          />
          <span className="form__error">
            {errors.name || checkingPatternName(name).message}
          </span>
        </label>

        <label className="form__label" htmlFor="number">
           
          <PatternFormat 
            className="form__input"
            type="tel"
            inputMode="numeric"
            format="+7(###)###-##-##"
            // allowEmptyFormatting 
            // mask="_"
            name="number"
            id="number"
            minLength={10}
            maxLength={10}
            required
            onChange={handleChange}
            placeholder="Телефон"
            value={number || ""}
          />
          
          <span className="form__error">
            {errors.number || checkingPatternNumber(number).message}
          </span>
        </label>

        <label className="form__label" htmlFor="email">
          <input
            type="email"
            className="form__input"
            name="email"
            id="email"
            minLength={2}
            maxLength={30}
            required
            onChange={handleChange}
            placeholder="Email"
            value={email || ""}
          />
          <span className="form__error">
            {errors.email || checkingPatternEmail(email).message}
          </span>
        </label>

        <button
          type="submit"
          className={
            !isValid ||
            checkingPatternEmail(email).invalid ||
            checkingPatternName(name).invalid
              ? "form__button-disabled"
              : "form__button-active"
          }
          disabled={
            !isValid ||
            checkingPatternEmail(email).invalid ||
            checkingPatternName(name).invalid
          }
        >
          Оформить заказ
        </button>
      </form>
    </section>
  );
}

export default Form;
