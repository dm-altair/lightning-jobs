import { useMemo, useState } from 'react';
import { Container, Row } from '../layout';
import { TableRoot, Table, Th } from '../layout/table';
import Button from '../ui/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowDown,
  faArrowUp,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';
import isBefore from 'date-fns/isBefore';
import TableRow from './TableRow';

export default function ResultsTable({
  pageNumber,
  setPageNumber,
  jobs
}) {
  const [sortOptions, setSortOptions] = useState(null);
  const [sortedJobs, setSortedJobs] = useState(null);
  const headerValues = ['company', 'title', 'location', 'posted'];
  const sortDirections = ['asc', 'desc', null];

  useMemo(() => {
    if (!sortOptions) return;
    if (!sortOptions.direction) {
      setSortedJobs(null);
      return;
    }

    const sortedJobs = [...jobs];

    if (sortOptions.key === 'posted') {
      sortedJobs.sort((a, b) => {
        const aDate = new Date(a['created_at']);
        const bDate = new Date(b['created_at']);
        if (isBefore(aDate, bDate)) {
          return sortOptions.direction === 'asc' ? -1 : 1;
        } else if (isBefore(bDate, aDate)) {
          return sortOptions.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setSortedJobs(sortedJobs);
    } else {
      sortedJobs.sort((a, b) => {
        const item1 = a[sortOptions.key].toLowerCase();
        const item2 = b[sortOptions.key].toLowerCase();
        if (item1 < item2) {
          return sortOptions.direction === 'asc' ? -1 : 1;
        } else if (item1 > item2) {
          return sortOptions.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
      setSortedJobs(sortedJobs);
    }
  }, [jobs, sortOptions]);

  const sortBy = key => {
    let direction = sortDirections[0];
    if (sortOptions && sortOptions.key === key) {
      const currentIndex = sortDirections.findIndex(
        direction => direction === sortOptions.direction
      );
      if (sortDirections[currentIndex + 1] === undefined) {
        direction = sortDirections[0];
      } else {
        direction = sortDirections[currentIndex + 1];
      }
    }
    setSortOptions({ key, direction });
  };

  const getIcon = value => {
    if (!sortOptions) return;
    if (sortOptions.key !== value) return;
    if (!sortOptions.direction) return;
    if (sortOptions.direction === 'asc') {
      return <FontAwesomeIcon icon={faArrowUp} />;
    }
    return <FontAwesomeIcon icon={faArrowDown} />;
  };

  return (
    <Container>
      <Row>
        {pageNumber > 1 && (
          <Button outline onClick={() =>{setPageNumber(pageNumber - 1)}}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
        )}
        {jobs.length >= 50 && (
          <Button outline onClick={() =>{setPageNumber(pageNumber + 1)}}>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        )}
      </Row>
      <TableRoot>
        <Table>
          <thead>
            <tr>
              {headerValues.map((value, index) => (
                <Th key={index} onClick={() => sortBy(value)}>
                  {value}&nbsp;{getIcon(value)}
                </Th>
              ))}
            </tr>
          </thead>
          <tbody>
            {sortedJobs
              ? sortedJobs.map(job => <TableRow key={job.id} job={job} />)
              : jobs.map(job => <TableRow key={job.id} job={job} />)}
          </tbody>
        </Table>
      </TableRoot>
    </Container>
  );
}
