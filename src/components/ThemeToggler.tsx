import { useContext } from 'react';
import { Context } from '../theme';

type Props = {
  children: JSX.Element;
}

export function ThemeToggler(props: Props) {
  const { children } = props;
  const { theme, toggleTheme } = useContext(Context);

  const style = {
    color: theme === 'dark' ? 'white' : 'black',
    backgroundColor: theme === 'dark' ? 'black' : 'white',
  };

  return (
    <button onClick={toggleTheme} style={style}>{children}</button>
  );
}