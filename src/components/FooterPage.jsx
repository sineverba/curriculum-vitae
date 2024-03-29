import React from 'react';
import { GetYearInterval } from '@sineverba/years-interval';

export function FooterPage() {
  return (
    <footer>
      <p>v. {process.env.REACT_APP_VERSION} - &copy; {GetYearInterval("2022")} - <a href="https://github.com/sineverba/curriculum-vitae">View source on Github</a></p>
    </footer>
  );
}

export default FooterPage;