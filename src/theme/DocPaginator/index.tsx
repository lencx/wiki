import React from 'react';
import DocPaginator from '@theme-original/DocPaginator';
import WikiComments from '@site/src/components/WikiComments';

export default function DocPaginatorWrapper(props) {
  return (
    <>
      <DocPaginator {...props} />
      <WikiComments />
    </>
  );
}
