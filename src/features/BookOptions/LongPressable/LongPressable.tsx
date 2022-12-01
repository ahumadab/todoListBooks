import React, { PropsWithChildren } from 'react';

import useLongPress from './useLongPress.hook';

interface LongPressableProps {
  onLongPress: () => void;
}

const LongPressable: React.FC<PropsWithChildren<LongPressableProps>> = ({
  onLongPress,
  children,
}) => {
  const backspaceLongPress = useLongPress(onLongPress, 1000);

  return <div {...backspaceLongPress}>{children}</div>;
};

export default LongPressable;
