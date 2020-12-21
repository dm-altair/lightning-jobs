import { useCallback, useState } from 'react';
import { withRouter, Route } from 'react-router-dom';
import Search from './Search';
import Header from './Header';
import ResultsTable from './results-table';
import Loader from './ui/Loader';
import useDidUpdateEffect from './utils/useDidUpdateEffect';

function App({ history, location }) {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [pageLoad, setPageLoad] = useState(false);
  const [pageNumber, setPageNumber] = useState(1);
  const [formData, setFormData] = useState({
    description: '',
    location: '',
    fullTime: false
  });

  const sendRequest = useCallback(
    async e => {
      if (e){ 
        e.preventDefault();
        setPageNumber(1);
      }
      setPageLoad(true);
      const { description, location, fullTime } = formData;
      try {
        const res = await fetch(
          `http://0.0.0.0:8080/?description=${description}&location=${location}&full_time=${fullTime}&page=${pageNumber}`
        );
        const json = await res.json();
        setJobs(json);
        if (!json.length) {
          setError('No jobs found');
        } else {
          setError('');
          history.push('/jobs');
        }
      } catch (e) {
        setError('Something went wrong...');
        console.error(e);
      }
      setPageLoad(false);
    },
    [formData, history, pageNumber]
  );

  useDidUpdateEffect(() => {
    sendRequest();
  }, [pageNumber]);

  const handleChange = e => {
    const { name, value } = e.currentTarget;
    const newFormData = { ...formData };
    if (name === 'fullTime') {
      const { checked } = e.currentTarget;
      newFormData[name] = checked;
    } else {
      newFormData[name] = value;
    }
    setFormData(newFormData);
  };

  return (
    <>
      {pageLoad && <Loader />}
      <Header />
      <Route exact path="/">
        <Search
          error={error}
          formData={formData}
          handleChange={handleChange}
          sendRequest={sendRequest}
        />
      </Route>
      <Route exact path="/jobs">
        <ResultsTable
          jobs={jobs}
          pageNumber={pageNumber}
          setPageNumber={setPageNumber}
          sendRequest={sendRequest}
        />
      </Route>
    </>
  );
}

export default withRouter(App);
