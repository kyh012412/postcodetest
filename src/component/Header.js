import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/Header.module.css';
import { Container } from 'react-bootstrap';

const Header = () => {
  const list = ['model1', 'model2', 'model3', 'nextpage'];
  useEffect(() => {
    console.count('헤더도 다시 그리는지 테스트');
  });
  return (
    <div className={styles.Header}>
      <Container fluid>
        <ul className="d-flex gap-3">
          {list?.map((val, idx) => {
            return (
              <Link to={`/${val}`} key={idx}>
                {val}
              </Link>
            );
          })}
        </ul>
      </Container>
    </div>
  );
};

export default Header;
