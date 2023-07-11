import { Dna } from 'react-loader-spinner';
// import { LoaderContainer } from './Loader.styled';

export default function Loader() {
  return (
    <div>
      <Dna
        color="#42362b"
        visible={true}
        height="80"
        width="80"
        ariaLabel="dna-loading"
        wrapperStyle={{}}
        wrapperClass="dna-wrapper"
      />
    </div>
  );
}
