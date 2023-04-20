import { useAppSelector } from '../../hooks';
import './error-message.css';
import { getErrorStatus } from '../../store/offer-data/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorStatus);

  return (error)
    ? <div className='error-message'>{error}</div>
    : null;

}

export default ErrorMessage;
