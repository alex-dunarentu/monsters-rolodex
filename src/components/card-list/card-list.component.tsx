import Card from '../card/card.component';
import { Monster } from '../../App';
import './card-list.styles.css';

type CardListProps = {
  monsters: Monster[];
};

const CardList = ({ monsters }: CardListProps) => (
  <div className="card-list">
    {monsters.map((monster: Monster) => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

export default CardList;