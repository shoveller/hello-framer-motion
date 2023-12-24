import { FC, PropsWithChildren, useState } from 'react';

import './style.css';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

const Ball = () => {
  return <div className="yellow ball" />;
};

export const App: FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Wrapper>
        <Ball />
      </Wrapper>
      <button onClick={() => setIsEnabled(!isEnabled)}>Toggle!</button>
    </>
  );
};
