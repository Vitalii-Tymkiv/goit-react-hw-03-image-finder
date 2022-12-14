import MagnifyingGlass from 'react-loader-spinner';
import { SpinnerWrapper } from './Spiner.styled';

export const Spinner = () => {
  <SpinnerWrapper>
    <MagnifyingGlass
      visible={true}
      height="80"
      width="80"
      ariaLabel="MagnifyingGlass-loading"
      wrapperStyle={{}}
      wrapperClass="MagnifyingGlass-wrapper"
      glassColor="#c0efff"
      color="#e15b64"
    />
  </SpinnerWrapper>;
};
