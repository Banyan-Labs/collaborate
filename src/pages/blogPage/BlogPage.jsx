import React from 'react';
import PostPreview from '../../components/PostPreview/PostPreview';
import { BLOG_DATA } from '../../blog-data';

function BlogPage(props) {
  return (
    <div>
      {BLOG_DATA &&
        BLOG_DATA.map((data, index) => (
          <PostPreview dataSet={data} key={index} />
        ))}
    </div>
  );
}

export default BlogPage;
