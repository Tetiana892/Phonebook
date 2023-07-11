import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { filterContact } from 'redux/contacts/contacts-slice';
import { FilterContainer, Input, Text } from './Filter.styled';

const Filter = () => {
  const dispatch = useDispatch();

  const handleFilterChange = e => dispatch(filterContact(e.target.value));
  return (
    <FilterContainer>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        onChange={handleFilterChange}
        placeholder="Name"
      />
    </FilterContainer>
  );
};

Filter.propTypes = {
  onChange: PropTypes.func,
};

export default Filter;
