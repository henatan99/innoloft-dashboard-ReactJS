import React from 'react';
import styles from './index.module.sass';

const UserInfo = (props) => {
  const { picture, name, companyName } = props;
  return (
    <div className={styles.user_info}>
      <img src={picture} className={styles.picture} />
      <p>
        Name: {' '}
        {name || ''}
      </p>
      <p>
        Company Name: {' '}
        {companyName || ''}
      </p>
    </div>
  );
};

export default UserInfo;
