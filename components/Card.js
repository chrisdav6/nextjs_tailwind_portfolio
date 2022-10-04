import Image from 'next/image';

const Card = ({ design }) => {
  return (
    <div>
      <Image src={design} />
    </div>
  );
};

export default Card;
