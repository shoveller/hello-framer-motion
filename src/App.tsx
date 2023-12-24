import { FC, PropsWithChildren, useState } from 'react';
import { motion } from 'framer-motion';

import './style.css';

const Wrapper: FC<PropsWithChildren> = ({ children }) => {
  return <div className="wrapper">{children}</div>;
};

const Ball: FC<{ isEnabled: boolean }> = ({ isEnabled }) => {
  const animate = isEnabled ? { x: 80 } : {}

  return <motion.div className="yellow ball" animate={animate} />;
};

export const App: FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <>
      <Wrapper>
        <Ball isEnabled={isEnabled} />
      </Wrapper>
      <button onClick={() => setIsEnabled(!isEnabled)}>Toggle</button>
    </>
  );
};
