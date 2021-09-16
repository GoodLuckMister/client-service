import defaultAvatar from '../UserMenu/avatar.png';
import './HomePage.scss';

export default function HomeView() {
  return (
    <section className="section">
      <h2>Phone-book</h2>
      <div className="container">
        <img src={defaultAvatar} alt="default avatar" width="400" />
      </div>
    </section>
  );
}
