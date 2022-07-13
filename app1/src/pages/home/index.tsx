import React from 'react';
import { history } from 'umi';
import styles from './index.less';
export default function Index() {
  const gotoChildren = () => {
    history.push('app2/login');
  };
  return (
    <>
      <div className={styles.wrapper}>主页</div>
      <div onClick={gotoChildren}>前往子应用</div>
    </>
  );
}
