import { useState } from 'react';
import { styled } from 'styled-components';
import skillsInfo from './SkillsInfo.json';

const Skills = () => {
  const [searchValue, setSearchValue] = useState();

  return (
    <Wrapper>
      <SearchBar
        type="text"
        placeholder="Search Skills"
        onChange={e => setSearchValue(e.target.value)}
      />

      <SkillsList>
        {skillsInfo.map(skill =>
          <SkillCard key={skill}>
            {skill}
          </SkillCard>
        )}
      </SkillsList>
    </Wrapper>
  );
};

export default Skills;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  width: 100%;
  max-width: 1100px;
  margin: 20px;
`;

const SearchBar = styled.input`
  color: white;
  background-color: ${props => props.theme.dark || 'black'};
  width: 50%;
  padding: .75rem 1rem;
  border: none;
  border-radius: 2rem;
  font-size: 1rem;
  
  :focus {
    outline-width: 0;
  }
`;

const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: 100%;
  max-height: 500px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    display: block;
    width: 1rem;
  }

  &::-webkit-scrollbar-thumb {
    width: 1rem;
    background-color: ${props => props.theme.light || 'silver'};
    border-radius: 25px;
  }
`;

const SkillCard = styled.h3`
  background-color: ${props => props.theme.dark || 'black'};
  color: ${props => props.theme.primary || 'white'};
  text-align: center;

  flex: 1 0 30%;
  margin: 10px;
  padding: 20px;
  border-radius: 20px;
`;