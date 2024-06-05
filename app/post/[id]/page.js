'use client';

import { connect } from 'react-redux';
import Post from '@/app/components/Postinfo';

const Postpage = ({ post }) => {
  
  return (
    <>
      {post && <Post post={post} />}
    </>
  )
}

const mapStateToProps = (state) => ({
  post: state.post.post,
});

// Подключение компонента к Redux Store
export default connect(mapStateToProps, null)(Postpage);
