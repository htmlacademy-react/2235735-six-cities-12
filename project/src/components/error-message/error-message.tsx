import { useAppSelector } from '../../hooks';
import './error-message.css';
import { getErrorStatus } from '../../store/offer-data/selectors';

function ErrorMessage(): JSX.Element | null {
  const error = useAppSelector(getErrorStatus);

  return (error.status)
    ? <div className='error-message'>{error.text}</div>
    : null;

}

export default ErrorMessage;
