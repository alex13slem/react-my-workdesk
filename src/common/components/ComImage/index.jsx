export const ComImage = ({src, ...args}) => {
  let Image;
  if (typeof src === 'string') {
    Image = () => <img src={src} {...args} />;
  }
  if (typeof src === 'object') {
    Image = () => {
      const component = {...src};
      component.props = {...args};
      return component;
    };
  }
  return <Image />;
};
