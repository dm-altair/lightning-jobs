import styled from 'styled-components';

const Table = styled.table`
  background-color: ${props => props.theme.colors.background.dark};
  border-radius: 5px;
  font-size: 14px;
  border-collapse: collapse;
  box-shadow: 1px 3px 6px rgba(0, 0, 0, 0.2);
  min-width: 800px;
`;

const TableRoot = styled.div`
  background-color: white;
  margin-top: 12px;
  border-radius: 5px;
  max-width: 98%;
  overflow-x: scroll;
  background-color: ${props => props.theme.colors.background.darker};
  @media (min-width: 800px) {
    padding: 32px;
  }
`;

const Cell = styled.td`
  padding: 24px 16px;
  border-top: 1px solid rgba(81, 81, 81, 1);
`;

const TitleCell = styled(Cell)`
  display: flex;
  flex-direction: column;
`;

const LocationCell = styled(Cell)`
  text-overflow: ellipsis;
  overflow-x: hidden;
  /* white-space: nowrap; */
`;
const PostedCell = styled(Cell)`
  min-width: 105px;
`;

const JobType = styled.div`
  color: rgba(255, 255, 255, 0.7);
  font-size: 12px;
`;

const Th = styled(Cell)`
  user-select: none;
  text-transform: capitalize;
  border-top: none;
  text-align: left;
  cursor: pointer;
`;

const CompanyUrl = styled.a`
  position: relative;
  z-index: 1;
  color: white;
  text-decoration: none;
`;

export {
  TableRoot,
  Table,
  Cell,
  TitleCell,
  LocationCell,
  PostedCell,
  JobType,
  Th,
  CompanyUrl
};
