import React, { useLayoutEffect } from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';
import { Experimental_CssVarsProvider as CssVarsProvider, useColorScheme } from '@mui/material/styles';
import LayoutBase, { Props as LayoutBaseProps } from '@theme/Layout';

function MuiTheme({ children, ...other }: LayoutBaseProps) {
  const { setMode } = useColorScheme();

  useLayoutEffect(() => {
    const target = document.querySelector('html');
    const config = { attributes: true, childList: false, characterData: false };
    const observer = new MutationObserver((mutationList, observer) => {
      for (const mutation of mutationList) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          const mode = target.getAttribute('data-theme') as ('light' | 'dark' | 'system');
          setMode(mode);
        }
      }
    });
    observer.observe(target, config);
    return () => {
      observer.disconnect();
    };
  }, []);

  return <LayoutBase {...other}>{children}</LayoutBase>;
}

export default function Layout(props: LayoutBaseProps) {
  return (
    <CssVarsProvider>
      <BrowserOnly>{() => <MuiTheme {...props} />}</BrowserOnly>
    </CssVarsProvider>
  );
}