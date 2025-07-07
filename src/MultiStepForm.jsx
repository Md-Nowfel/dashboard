import { useReducer } from "react";
import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #f0f2f5;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    margin: 0;
  }
`;

export const FormContainer = styled.div`
  background: #ffffff;
  padding: 2rem 3rem;
  border-radius: 12px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.12);
  width: 400px;
  min-height: 450px;
  display: flex;
  flex-direction: column;
  transition: all 0.3s ease-in-out;
`;

export const FormTitle = styled.h2`
  color: #333;
  text-align: center;
  margin-bottom: 1.5rem;
  font-weight: 600;
`;

export const StepIndicator = styled.p`
  text-align: center;
  font-size: 0.9rem;
  color: #888;
  margin-bottom: 2rem;
`;

export const FormGroup = styled.div`
  margin-bottom: 1.5rem;
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  margin-bottom: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  font-weight: 500;
`;

export const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.2s, box-shadow 0.2s;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.25);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
`;

export const Button = styled.button`
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s, transform 0.1s;
  background-color: ${(props) =>
    props.disabled ? "#e9ecef" : props.primary ? "#007bff" : "#6c757d"};
  color: ${(props) => (props.disabled ? "#6c757d" : "white")};

  &:hover:not(:disabled) {
    background-color: ${(props) => (props.primary ? "#0056b3" : "#5a6268")};
    transform: translateY(-2px);
  }
`;

export const ConfirmationText = styled.p`
  font-size: 1.1rem;
  color: #333;
  line-height: 1.6;
  strong {
    color: #007bff;
  }
`;

const initialState = {
  step: 1,
  email: "",
  password: "",
  firstName: "",
  lastName: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "NEXT_STEP":
      return { ...state, step: state.step + 1 };
    case "PREV_STEP":
      return { ...state, step: state.step - 1 };
    case "UPDATE_FIELD":
      return { ...state, [action.payload.field]: action.payload.value };
    default:
      return state;
  }
}

function MultiStepForm() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    dispatch({
      type: "UPDATE_FIELD",
      payload: {
        field: e.target.name,
        value: e.target.value,
      },
    });
  };

  return (
    <>
      <GlobalStyle />
      <FormContainer>
        <FormTitle>User Registration</FormTitle>
        <StepIndicator>{`Step ${state.step} of 3`}</StepIndicator>
        {state.step === 1 && (
          <>
            <FormGroup>
              <Label>Email</Label>
              <Input
                type="email"
                name="email"
                value={state.email}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Input
                type="password"
                name="password"
                value={state.password}
                onChange={handleChange}
              />
            </FormGroup>
          </>
        )}

        {state.step === 2 && (
          <>
            <FormGroup>
              <Label>First Name</Label>
              <Input
                name="firstName"
                value={state.firstName}
                onChange={handleChange}
              />
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Input
                name="lastName"
                value={state.lastName}
                onChange={handleChange}
              />
            </FormGroup>
          </>
        )}

        {state.step === 3 && (
          <ConfirmationText>
            Plase confirm your details:
            <br />
            <strong>Email:</strong> {state.email}
            <br />
            <strong>First Name:</strong> {state.firstName}
            <br />
            <strong>Last Name:</strong> {state.lastName}
          </ConfirmationText>
        )}

        <ButtonContainer>
          <Button
            onClick={() => dispatch({ type: "PREV_STEP" })}
            disabled={state.step === 1}
          >
            Back
          </Button>

          <Button
            primary
            onClick={() => {
              if (state.step === 3) {
                console.log("Submitting:", state);
              } else {
                dispatch({ type: "NEXT_STEP" });
              }
            }}
          >
            {state.step === 3 ? "Submit" : "Next"}
          </Button>
        </ButtonContainer>
      </FormContainer>
    </>
  );
}

export default MultiStepForm;
