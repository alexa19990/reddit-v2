const Comment = ({ item, replyHandler, data, replyIndex, itemIndex }) => {
  const isYou = data?.currentUser?.username === item.user.username || item.isCurrentUser;

  
  return (
    <div className="container">
      <div className="rating-side">
        <button>
          <img src="/images/icon-plus.svg" alt="" />
        </button>
        <button>
          <p>{item.score}</p>
        </button>
        <button>
          <img src="/images/icon-minus.svg" alt="" />
        </button>
      </div>
      <div className="text-side">
        <div className="header">
          <div className="header-title">
            <img src={item.user.image.png} alt="" />
            {isYou && <div className="you">you</div>}
            <p>{item.user.username}</p>
            <p className="postedAt">{item.createdAt}</p>
          </div>
          {!isYou ? (
            <div
              className="reply-box"
              onClick={() => replyHandler(item.id - 1)}
            >
              <img src="/images/icon-reply.svg" alt="" />
              <p>Reply</p>
            </div>
          ) : (
            <div className="config-box">
              <div className="delete">
                <img src="/images/icon-delete.svg" alt="" />
                <p>delete</p>
              </div>
              <div className="edit">
                <img src="/images/icon-edit.svg" alt="" />
                <p>edit</p>
              </div>
            </div>
          )}
        </div>
        <div className="footer">
          <p>{item.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Comment;
