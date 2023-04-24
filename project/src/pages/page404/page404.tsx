import { Link } from 'react-router-dom';
function Page404(): JSX.Element {
  return (
    <>
      <h1>404 Not Found</h1>
      <Link className="footer__logo-link" to="/">
        Main Page
      </Link>
    </>
  );
}

export default Page404;
