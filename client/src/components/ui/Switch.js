import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  width: 50px;
  height: 20px;
  margin: 15px 0 24px 0;
`;
const ToggleContainer = styled.label`
  cursor: pointer;
  height: 100%;
  width: 100%;
  border-radius: 50px;
  display: block;
  transition: .25s ease;
  background-color: ${props =>
    props.enabled
      ? props.theme.colors.success.transparent
      : props.theme.colors.error.transparent};
`;

const Toggle = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  border-radius: 50px;
  background-color: ${props =>
    props.enabled
      ? props.theme.colors.success.normal
      : props.theme.colors.error.normal};
  top: -5px;
  transition: 0.25s ease;
  left: ${props => (props.enabled ? '100%' : '-5px')};
  transform: ${props => (props.enabled ? 'translateX( calc(-5px + -50%) )' : 0)};
`;

const Checkbox = styled.input`
  opacity: 0;
`;

function Switch({ value, onChange, name, id }) {
  return (
    <Container>
      <ToggleContainer enabled={value} htmlFor={id}>
        <Checkbox
          checked={value}
          onChange={onChange}
          type="checkbox"
          name={name}
          id={id}
        />
        <Toggle enabled={value} />
      </ToggleContainer>
    </Container>
  );
}

export default Switch;
