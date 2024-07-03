type Props = {
  imageDescrip: string[];
  captionIndex: number;
};

export function ImageDescription({ imageDescrip, captionIndex }: Props) {
  return (
    <div>
      <p>{imageDescrip[captionIndex]}</p>
    </div>
  );
}
