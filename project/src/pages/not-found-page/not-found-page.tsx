import { Link } from 'react-router-dom';

const NotFoundPage = () => (
  <section style={{ textAlign: 'center' }}>
    <h1>404</h1>
    <Link to="/">Вернуться на главную</Link>
  </section>
);

export default NotFoundPage;
