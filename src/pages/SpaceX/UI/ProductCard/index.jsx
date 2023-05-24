import styled from 'styled-components';
import {BtnSpaceX} from '../Buttons';

const Card = styled.article`
  min-width: 0;
  min-height: 0;
  height: 40vh;
  padding: 20px;
  border: 1px solid rgba(152, 147, 147, 0.21);
  background-color: rgba(0, 0, 0, 0.21);

  .front-side {
    display: flex;
    flex-direction: column;
    height: 100%;
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

  .name {
    height: 2em;
    overflow: hidden;
    margin-bottom: 10px;
    text-align: right;
  }
`;

const ProductCard = ({className, data}) => {
  return (
    <Card className={className}>
      <div className="front-side">
        <h2 className="name">{data.title}</h2>
        <div className="images">
          <img src={data.images[0]} alt="" />
        </div>
        <div className="rating"></div>
      </div>
      <div className="back-side"></div>
    </Card>
  );
};

export default ProductCard;
