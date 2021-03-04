import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import Container from "../Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Form = (props) => {
  const { register, handleSubmit } = useForm();
  const [formSection, setFormSection] = useState(1);
  const [emailValid, setEmailValid] = useState(null);
  const onSubmit = (data) => console.log(JSON.stringify(data));

  const emailIsValid = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  useEffect(() => {
    // handleSubmit(onSubmit)
  });

  return (
    <Container>
      <div className="form__wrapper">
        <h2 className="form--title capitalize">start your campaign!</h2>
        <h3 className="form--subtitle capitalize">
          we just need a few details to get started.
        </h3>
        <form onSubmit={handleSubmit(onSubmit)} className="form">
          {formSection === 1 ? (
            <Part1
              register={register}
              setFormSection={setFormSection}
              emailIsValid={emailIsValid}
              handleSubmit={(handleSubmit, onSubmit)}
            />
          ) : formSection === 2 ? (
            <Part2
              register={register}
              setFormSection={setFormSection}
              emailIsValid={emailIsValid}
              handleSubmit={(handleSubmit, onSubmit)}
            />
          ) : formSection === 3 ? (
            <Part3
              register={register}
              setFormSection={setFormSection}
              emailIsValid={emailIsValid}
              handleSubmit={(handleSubmit, onSubmit)}
            />
          ) : formSection === 4 ? (
            <Part4 register={register} setFormSection={setFormSection} />
          ) : (
            <Success />
          )}
        </form>
      </div>
    </Container>
  );
};

function Part1({
  register,
  setFormSection,
  emailIsValid,
  handleSubmit,
  onSubmit,
}) {
  return (
    <div className="part1 form--section">
      <div className="form--input__wrapper full">
        <label htmlFor="firstName" className="form--input--label capitalize">
          first name
        </label>
        <input
          name="firstName"
          ref={register}
          type="text"
          className="form--input"
          id="firstName"
        />
      </div>
      <div className="form--input__wrapper full">
        <label htmlFor="lastName" className="form--input--label capitalize">
          last name
        </label>
        <input
          name="lastName"
          ref={register}
          type="text"
          className="form--input"
          id="lastName"
        />
      </div>
      <div className="form--input__wrapper full">
        <label htmlFor="email" className="form--input--label capitalize">
          email address
        </label>
        <input
          name="email"
          ref={register}
          type="email"
          className="form--input"
          id="email"
        />
      </div>
      <div className="form--input__wrapper half">
        <label htmlFor="cause" className="form--input--label capitalize">
          cause:
        </label>
        <select ref={register} name="cause" id="cause" className="form--input">
          <option value="">Select...</option>
          <option value="personal profit">personal profit</option>
          <option value="brand boost">brand boost</option>
          <option value="non profit/charity">non profit/charity</option>
          <option value="church/mission trip">church/mission trip</option>
          <option value="help a friend">help a friend</option>
          <option value="medical support">medical support</option>
          <option value="other">other</option>
        </select>
        <FontAwesomeIcon icon="caret-down" className="down" />
      </div>
      <div className="form--input__wrapper half">
        <label htmlFor="quantity" className="form--input--label capitalize">
          quantity:
        </label>
        <select
          ref={register}
          name="quantity"
          id="quantity"
          className="form--input"
        >
          <option value="">Select... </option>
          <option value="12-24">12-24</option>
          <option value="25-50">25-50</option>
          <option value="50-100">50-100</option>
          <option value="100-150">100-150</option>
          <option value="150+">150+</option>
        </select>
        <FontAwesomeIcon icon="caret-down" className="down" />
      </div>
      <div className="form--submit__wrapper full">
        <button
          className="form--skip capitalize"
          onClick={handleSubmit(onSubmit)}
        >
          finish later
        </button>
        <button className="form--submit" onClick={() => setFormSection(2)}>
          2/4 <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  );
}

function Part2({ register, setFormSection, handleSubmit, onSubmit }) {
  return (
    <div className="part2 form--section">
      <div className="form--input__wrapper full">
        <label htmlFor="campaignName" className="form--input--label capitalize">
          what is the campaign name?
        </label>
        <input
          name="campaignName"
          ref={register}
          type="text"
          className="form--input"
          id="campaignName"
        />
      </div>
      <div className="form--input__wrapper full">
        <label
          htmlFor="campaignIntro"
          className="form--input--label capitalize"
        >
          Do you have an intro?
        </label>
        <input
          name="campaignIntro"
          ref={register}
          type="text"
          className="form--input"
          id="campaignIntro"
        />
      </div>
      <div className="form--input__wrapper full">
        <label
          htmlFor="campaignPurpose"
          className="form--input--label capitalize"
        >
          Campaign Purpose
        </label>
        <input
          name="campaignPurpose"
          ref={register}
          type="text"
          className="form--input"
          id="campaignPurpose"
        />
      </div>
      <div className="form--submit__wrapper full">
        <button
          className="form--skip capitalize"
          onClick={handleSubmit(onSubmit)}
        >
          finish later
        </button>
        <button className="form--submit" onClick={() => setFormSection(3)}>
          2/4 <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  );
}

function Part3({ register, setFormSection, handleSubmit, onSubmit }) {
  return (
    <div className="part3 form--section">
      <div className="form--input__wrapper full">
        <label
          htmlFor="campaignExplanation"
          className="form--input--label capitalize"
        >
          why do you want to start a campaign?
        </label>
        <textarea
          ref={register}
          name="campaignExplanation"
          id="campaignExplanation"
          cols="30"
          rows="10"
          className="form--input"
        ></textarea>
      </div>
      <div className="form--submit__wrapper full">
        <button
          className="form--skip capitalize"
          onClick={handleSubmit(onSubmit)}
        >
          finish later
        </button>
        <button className="form--submit" onClick={() => setFormSection(4)}>
          2/4 <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  );
}

function Part4({ register, setFormSection }) {
  return (
    <div className="part4 form--section">
      <div className="form--input__wrapper half">
        <label htmlFor="shirtChoice" className="form--input--label capitalize">
          shirt choice:
        </label>
        <select
          ref={register}
          name="shirtChoice"
          id="shirtChoice"
          className="form--input"
        >
          <option value="">Select...</option>
          <option value="personal profit">personal profit</option>
          <option value="brand boost">brand boost</option>
          <option value="non profit/charity">non profit/charity</option>
          <option value="church/mission trip">church/mission trip</option>
          <option value="help a friend">help a friend</option>
          <option value="medical support">medical support</option>
          <option value="other">other</option>
        </select>
        <FontAwesomeIcon icon="caret-down" className="down" />
      </div>
      <div className="form--input__wrapper half">
        <label htmlFor="quantity" className="form--input--label capitalize">
          color choice:
        </label>
        <select
          ref={register}
          name="quantity"
          id="quantity"
          className="form--input"
        >
          <option value="">Select... </option>
          <option value="12-24">12-24</option>
          <option value="25-50">25-50</option>
          <option value="50-100">50-100</option>
          <option value="100-150">100-150</option>
          <option value="150+">150+</option>
        </select>
        <FontAwesomeIcon icon="caret-down" className="down" />
      </div>
      <div className="form--input__wrapper half">
        <label
          htmlFor="uploadArtwork"
          className="form--input--label capitalize"
        >
          upload artwork
        </label>
        <select
          ref={register}
          name="uploadArtwork"
          id="uploadArtwork"
          className="form--input"
        >
          <option value="">Select... </option>
          <option value="12-24">12-24</option>
          <option value="25-50">25-50</option>
          <option value="50-100">50-100</option>
          <option value="100-150">100-150</option>
          <option value="150+">150+</option>
        </select>
        <FontAwesomeIcon icon="caret-down" className="down" />
      </div>
      <div className="form--input__wrapper full">
        <label
          htmlFor="campaignExplanation"
          className="form--input--label capitalize"
        >
          why do you want to start a campaign?
        </label>
        <textarea
          ref={register}
          name="campaignExplanation"
          id="campaignExplanation"
          cols="30"
          rows="10"
          className="form--input"
        ></textarea>
      </div>
      <div className="form--submit__wrapper full">
        <button className="form--skip capitalize">finish later</button>
        <button
          type="submit"
          className="form--submit"
          onClick={() => setFormSection(5)}
        >
          2/4 <FontAwesomeIcon icon="arrow-right" />
        </button>
      </div>
    </div>
  );
}

function Success(props) {
  return <div className="success form--section"></div>;
}
export default Form;
