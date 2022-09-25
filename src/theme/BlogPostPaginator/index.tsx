import React from 'react';
import BlogPostPaginator from '@theme-original/BlogPostPaginator';
import WikiComments from '@site/src/components/WikiComments';

export default function BlogPostPaginatorWrapper(props) {
  return (
    <>
      <BlogPostPaginator {...props} />
      <WikiComments />
    </>
  );
}
