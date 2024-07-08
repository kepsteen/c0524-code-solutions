import './ImageContainer.css';

type Props = {
  imageSrc: string[];
  captionIndex: number;
};

export function ImageContainer({ imageSrc, captionIndex }: Props) {
  return (
    <div className="d-flex justify-content-center">
      <div className="width-50 ">
        <img
          className="image-fill"
          src={imageSrc[captionIndex]}
          alt="space-image"
        />
      </div>
    </div>
  );
}
