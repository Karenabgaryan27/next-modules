"use client";

import React, { useEffect, useState } from "react";
import { ButtonDemo, CheckboxDemo, InputDemo, TextareaDemo, SwitchDemo } from "@/components/index.js";
import useJoiValidation from "@/hooks/joi-validation/useJoiValidation";

const InputsSection = () => {
  const [state, setState] = useState({
    name: "john",
    email: "johnDoe@gmail.com",
    message: "lorem ipsum dolor samet.",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    console.log(state);
  }, [state]);

  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Inputs</h2>
        <br />
        <br />
        <InputDemo
          placeholder="Name"
          className="max-w-[350px]"
          name="email"
          type="text"
          defaultValue=""
          callback={(e) => console.log(e.target.value)}
        />
        <br />
        <br />
        <InputDemo
          label="Name"
          className="max-w-[350px]"
          name="email"
          type="text"
          defaultValue=""
          callback={(e) => console.log(e.target.value)}
        />

        <br />
        <br />
        <InputDemo
          label="Picture"
          className="max-w-[350px]"
          name="picture"
          type="file"
          defaultValue=""
          callback={(e) => console.log(e.target.value)}
        />

        <br />
        <br />
        <br />
        <br />
        <br />
        <form action="#">
          <fieldset className="border p-4 max-w-[350px] rounded-md">
            <legend className="px-3">Legend</legend>
            <InputDemo
              label="Name"
              placeholder="Name"
              className=""
              name="name"
              type="text"
              defaultValue={state.name}
              callback={(e) => handleOnChange(e)}
            />
            <br />
            <InputDemo
              label="Email"
              placeholder="Email"
              className=""
              name="email"
              type="email"
              defaultValue={state.email}
              callback={(e) => handleOnChange(e)}
            />
            <br />

            <TextareaDemo
              label="Message"
              placeholder="Message"
              className=""
              name="message"
              type="text"
              defaultValue={state.message}
              callback={(e) => handleOnChange(e)}
            />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

const JoiValidationSection = () => {
  type ValidationResult = {
    error?: {
      details: {
        path: string[];
        message: string;
      }[];
    };
  };

  const [state, setState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [wasSubmitted, setWasSubmitted] = useState(false);
  const [result, setResult] = useState<ValidationResult>({});
  const [errorMessages, setErrorMessages] = useState<Record<string, string>>({});

  const { validateContact } = useJoiValidation();

  useEffect(() => {
    console.log(errorMessages);
  }, [errorMessages]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { error } = validateContact(state);
    if (!error) return;
    setWasSubmitted(true);
  };

  useEffect(() => setResult(validateContact(state)), [state]);

  useEffect(() => {
    if (!wasSubmitted) return;
    const errors: Record<string, string> = {};
    result?.error?.details.forEach((item) => {
      if (errors[item.path[0]]) return;
      errors[item.path[0]] = item.message;
    });
    setErrorMessages(errors);
  }, [result, wasSubmitted]);

  return (
    <section id="joi-validation">
      <div className="container">
        <form
          action="#/dsfd"
          className={`${wasSubmitted ? "was-submitted" : ""}`}
          onSubmit={onSubmit}
          // noValidate
        >
          <br />
          <fieldset className="border p-4 max-w-[350px] rounded-md">
            <legend className="px-3">Joi Validation</legend>
            <InputDemo
              label={
                <div>
                  Name <span className="text-red-600">*</span>
                </div>
              }
              placeholder="Name"
              name="name"
              type="text"
              defaultValue=""
              callback={onChange}
              errorMessage={errorMessages.name}
              inputClassName={errorMessages.name ? "is-invalid" : "is-valid"}
            />

            <br />
            <InputDemo
              label={
                <div>
                  Email <span className="text-red-600">*</span>
                </div>
              }
              placeholder="Email"
              name="email"
              type="email"
              defaultValue=""
              callback={onChange}
              errorMessage={errorMessages.email}
              inputClassName={errorMessages.email ? "is-invalid" : "is-valid"}
            />
            <br />
            <TextareaDemo
              label={
                <div>
                  Message <span className="text-red-600">*</span>
                </div>
              }
              placeholder="Email"
              name="message"
              type="text"
              defaultValue=""
              callback={onChange}
              errorMessage={errorMessages.message}
              textareaClassName={errorMessages.message ? "is-invalid" : "is-valid"}
            />
            <br />
            <ButtonDemo text="Submit" variant="outline" className="ml-auto flex" />
          </fieldset>
        </form>
      </div>
    </section>
  );
};

const CheckboxesSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Checkboxes</h2>
        <br />
        <br />

        <CheckboxDemo className="" color="success" />
        <br />
        <CheckboxDemo label="Accept terms and conditions" />
        <br />
        <CheckboxDemo label="Accept terms and conditions" color="success" />
        <br />
        <CheckboxDemo label="Accept terms and conditions" color="warning" />
        <br />
        <CheckboxDemo
          label="Accept terms and conditions"
          checked={true}
          callback={(checked, id) => console.log(checked, id)}
          color="dark"
        />
        <br />
        <CheckboxDemo disabled={true} checked={true} label="Disabled Checkbox" />
      </div>
    </section>
  );
};

const SwitchesSection = () => {
  return (
    <section>
      <div className="container">
        <h2 className="text-4xl">Switches</h2>
        <br />
        <br />

        <SwitchDemo />
        <br />
        <SwitchDemo label="Label text here." />
        <br />
        <SwitchDemo label="Label text here." color="success" />
        <br />
        <SwitchDemo label="Label text here." color="warning" />
        <br />
        <SwitchDemo
          label="Label text here."
          color="dark"
          checked={true}
          callback={(checked, id) => console.log(checked, id)}
        />
        <br />
        <SwitchDemo label="Label text here." disabled={true} checked={true} />
        <br />
      </div>
    </section>
  );
};

const Content = () => {
  return (
    <>
      <InputsSection />
      <br />
      <br />
      <JoiValidationSection />
      <br />
      <br />
      <CheckboxesSection />
      <br />
      <br />
      <SwitchesSection />
    </>
  );
};

export default Content;
