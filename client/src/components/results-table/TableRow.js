import differenceInDays from 'date-fns/differenceInDays';
import {
  Cell,
  TitleCell,
  LocationCell,
  PostedCell,
  CompanyUrl,
  JobType
} from '../layout/table';
const TableRow = ({ job }) => {
  const getDaysFromToday = date => {
    return differenceInDays(new Date(), new Date(date));
  };
  return (
    <tr>
      <Cell>
        <CompanyUrl href={job.company_url}>{job.company}</CompanyUrl>
      </Cell>
      <TitleCell>
        {job.title}
        <JobType>{job.type}</JobType>
      </TitleCell>
      <LocationCell>{job.location}</LocationCell>
      <PostedCell>{getDaysFromToday(job.created_at)} Days ago</PostedCell>
    </tr>
  );
};

export default TableRow;
