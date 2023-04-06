
import { Comment } from '../../types/comments';
import Review from '../review/review';

type CommentListProps = {
    comments: Comment[];

}

function ReviewList({ comments }: CommentListProps): JSX.Element {

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{comments.length}</span></h2>
      <ul className="reviews__list">
        {comments.map((comment)=>(
          <li key={comment.id} className="reviews__item"><Review review={comment}/></li>
        ))}
      </ul>
    </>
  );
}

export default ReviewList;
