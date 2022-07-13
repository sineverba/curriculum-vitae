import interval from '@sineverba/years-interval';

export const FooterPage = () => {
    return (
        <footer>
            <p>v. {process.env.REACT_APP_VERSION} - &copy; {interval("2022")} - <a href="https://github.com/sineverba/curriculum-vitae">View source on Github</a></p>
        </footer>
    );
}

export default FooterPage;