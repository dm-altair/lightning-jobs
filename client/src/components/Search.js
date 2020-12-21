import { Container, Row, Col } from './layout';
import Button from './ui/Button';
import TextField from './ui/TextField';
import Label from './ui/Label';
import Switch from './ui/Switch';
import Error from './ui/Error';
import styled from 'styled-components';

const Form = styled.form`
  width: 100%;
`;

function Search({ error, formData, sendRequest, handleChange }) {
  return (
    <Container maxWidth={400}>
      {error ? (
        <Row>
          <Col>
            <Error>{error}</Error>
          </Col>
        </Row>
      ) : null}
      <Form onSubmit={sendRequest}>
        <Row>
          <Col>
            <Label htmlFor="description">Job Description</Label>
            <TextField
              value={formData.description}
              onChange={handleChange}
              id="description"
              name="description"
              autoComplete="off"
              placeholder="JavaScript, Python, C++"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label htmlFor="location">Location</Label>
            <TextField
              value={formData.location}
              onChange={handleChange}
              id="location"
              name="location"
              autoComplete="off"
              placeholder="City, state, zip code, or country"
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Label htmlFor="fullTime">Full Time Only</Label>
            <Switch
              name="fullTime"
              id="fullTime"
              value={formData.fullTime}
              onChange={handleChange}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <Button outline fluid onClick={sendRequest}>
              Find Jobs
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Search;
