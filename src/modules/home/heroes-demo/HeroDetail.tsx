import React, { Fragment, Component } from 'react';
import { CardInfo, CardInfoKey, CardInfoValue } from '../components/CardInfo';
import { Badge } from '@kata-kit/badge';
import { Hero } from '~/interfaces/heroes';

interface HeroDetailProps {
  hero: Hero;
  endpoint: string;
}

export default class HeroDetail extends Component<HeroDetailProps> {
  render() {
    const { hero, endpoint } = this.props;
    return (
      <React.Fragment>
        <div style={styles.container}>
          <img src={endpoint + hero.img} style={styles.photo} />

          <div style={styles.nameContainer}>
            <img src={endpoint + hero.icon} style={styles.icon} />
            <h1 style={styles.name}>{hero.localized_name}</h1>
          </div>

          <h4>{hero.attack_type}</h4>

          <div style={styles.badgeContainer}>
            {hero.roles.map(role => (
              <Fragment>
                <Badge color="success">{role}</Badge>
                &nbsp;
              </Fragment>
            ))}
          </div>
          <div>
            <CardInfo style={styles.cardInfo}>
              <CardInfoKey>Primary Attr</CardInfoKey>
              <CardInfoValue>{hero.primary_attr}</CardInfoValue>
            </CardInfo>
            <CardInfo style={styles.cardInfo}>
              <CardInfoKey>Legs</CardInfoKey>
              <CardInfoValue>{hero.legs}</CardInfoValue>
            </CardInfo>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column'
  },
  photo: {
    flex: 1,
    marginBottom: 15,
    borderRadius: 5
  },
  icon: {
    borderStyle: 'solid',
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 100,
    padding: 3,
    marginRight: 5,
    height: 30,
    width: 30
  },
  name: {
    fontSize: 25
  },
  nameContainer: {
    display: 'flex'
  },
  badgeContainer: {
    marginBottom: 15
  },
  cardInfo: {
    width: 200
  }
};
