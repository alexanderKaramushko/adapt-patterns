import React, { ReactElement, FC } from 'react';
import { LayoutFactory } from './interfaces';

interface AppProps {
  layoutFactory: LayoutFactory | null;
}

export const App: FC<AppProps> = (props): ReactElement => {
  const { layoutFactory } = props;

  if (!layoutFactory) {
    return <div>No layout</div>;
  }

  const Header = layoutFactory.createHeader().render();
  const Main = layoutFactory.createMain().render();
  const Footer = layoutFactory.createFooter().render();

  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
};
