import { styled } from 'styled-components';

const JobDetails = ({job}) => {
  return (
    <Wrapper>
      <Header>
        {job.JobTitle}
        <Location> @ {job.Employer}</Location>
      </Header>

      <SubTitle>{job.TimePeriod}</SubTitle>

      <BulletList>
        {job.BulletPoints.map((bulletPoint, index) =>
          <BulletPoint key={index}>
            {bulletPoint.Text}
            {bulletPoint.SubBullets &&
              <BulletList>
                {bulletPoint.SubBullets.map((subBullet, subBulletIndex) =>
                  <BulletPoint key={subBulletIndex}>{subBullet}</BulletPoint>
                )}
              </BulletList>
            }
          </BulletPoint>
        )}
      </BulletList>

      <SubTitle>Technologies Used</SubTitle>

      <TechnologiesList>
        {job.TechnologiesUsed.map(tech =>
          <Technology key={tech}>{tech}</Technology>
        )}
      </TechnologiesList>
    </Wrapper>
  );
};

export default JobDetails;

const Wrapper = styled.div`
  max-width: 600px;
`;

const Header = styled.h2`
  color: ${props => props.theme.light3 || 'white'};
`;

const Location = styled.span`
  font-size: 1.25rem;
  color: ${props => props.theme.primary || 'white'};
`;

const SubTitle = styled.h4`
  color: ${props => props.theme.light3 || 'white'};
  width: fit-content;
  margin: 1rem 0;
  border-bottom: ${props => `2px solid ${props.theme.primary || 'white'}`};
  padding-bottom: 2px;
`;

const BulletList = styled.ul`
  color: ${props => props.theme.light2 || 'white'};
`;

const BulletPoint = styled.li`
  margin: .25rem 0;
  font-size: 1.2rem;
`;

const TechnologiesList = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Technology = styled.div`
  color: ${props => props.theme.light3 || 'white'};
  background-color: ${props => props.theme.dark2 || 'black'};
  margin: 3px;
  padding: 8px;
  border-radius: 15px;
  white-space: nowrap;
`;