import styled from 'styled-components';
import {BtnSpaceX} from '../Buttons';
import '@smastrom/react-rating/style.css';
import {Rating} from '@smastrom/react-rating';

const Card = styled.article`
  position: relative;

  &:hover .front-side {
    transform: rotate3d(1, 1, 0, 180deg) scale(70%);
  }
  &:hover .back-side {
    transform: rotate3d(0, 0, 1, 270deg) scale(70%);
  }

  .front-side,
  .back-side {
    height: 100%;

    transition: 1s 0.2s ease-in-out;
    transition-property: transform;

    transform-style: preserve-3d;
    backface-visibility: hidden;

    border: 1px solid rgba(152, 147, 147, 0.21);

    background-color: rgba(0, 0, 0, 0.21);
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

    transform: rotate3d(0, 1, 0, 180deg);

    display: grid;
    place-items: center;

    .btn {
      transform: rotate(90deg) scale(170%);
      transform-origin: center;
    }
  }

  .name {
    height: 48px;
    font-size: 20px;
    line-height: 1.2;
    overflow: hidden;
    margin-bottom: 10px;
    text-align: right;
  }

  .images {
    flex: 1;
    overflow: hidden;

    img {
      /* display: block; */
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: 50% 20%;
    }
  }

  .rating {
    max-width: 70%;
    align-self: end;
  }
`;

const ProductCard = ({className, data}) => {
  console.log(data);
  return (
    <Card className={className}>
      <div className="front-side">
        <h2 className="name">{data.title}</h2>
        <div className="images">
          <img src={data.thumbnail} alt="" />
        </div>
        <Rating className="rating" value={data.rating} readOnly />
      </div>
      <div className="back-side">
        <BtnSpaceX className="btn sale">Купить</BtnSpaceX>
      </div>
    </Card>
  );
};

export default ProductCard;
