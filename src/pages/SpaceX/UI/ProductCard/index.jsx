import styled from 'styled-components';
import {BtnSpaceX} from '../Buttons';
import '@smastrom/react-rating/style.css';
import {Rating} from '@smastrom/react-rating';

const Card = styled.article`
  --shadow: rgb(0 0 0 / 30%) 0px 0px 20px 10px;
  --translateZ: translateZ(6px);

  position: relative;

  transform-style: preserve-3d;

  transition: 1s ease-in-out;
  transition-property: transform;

  &:hover {
    transform: rotateY(0.5turn);
  }

  .front-side,
  .back-side {
    height: 100%;

    transform-style: preserve-3d;
    backface-visibility: hidden;

    border: 1px solid rgba(152, 147, 147, 0.21);
    background-color: rgba(0, 0, 0, 0.21);
    &::after {
      position: absolute;
      inset: 0;
      content: '';
      width: 100%;
      height: 100%;
      backdrop-filter: blur(8px) hue-rotate(340deg);
    }
  }
  .front-side {
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 20px;
  }
  .back-side {
    position: absolute;
    inset: 0;

    transform: rotateY(0.5turn);

    display: grid;
    place-items: center;

    .btn {
      font-size: 24px;
      transform: var(--translateZ);
      box-shadow: var(--shadow);
    }
  }

  .name {
    z-index: 1;
    height: 48px;
    margin-bottom: 10px;

    display: flex;
    align-items: center;
    justify-content: end;

    font-size: 20px;
    line-height: 1.2;
    overflow: hidden;
    text-align: right;
  }

  .images {
    flex: 1;
    overflow: hidden;
    transform: var(--translateZ);
    backface-visibility: hidden;

    filter: opacity(60%) brightness(110%) contrast(120%) grayscale(0.5);
    box-shadow: var(--shadow);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 20%;
    }
  }

  .rating {
    z-index: 1;
    max-width: 70%;
    align-self: end;
  }
`;

const ProductCard = ({className, data, clickOnBuy}) => {
  return (
    <Card className={className}>
      <div className="front-side">
        <h2 className="name">{data.title}</h2>
        <div className="images">
          <img src={data.thumbnail} />
        </div>
        <Rating className="rating" value={data.rating} readOnly />
      </div>
      <div className="back-side">
        <BtnSpaceX className="btn sale" onClick={clickOnBuy}>
          Подробнее
        </BtnSpaceX>
      </div>
    </Card>
  );
};

export default ProductCard;
