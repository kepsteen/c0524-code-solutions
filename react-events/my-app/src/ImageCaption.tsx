type Props = {
  imageCap: string[];
  captionIndex: number;
};

export function ImageCaption({ imageCap, captionIndex }: Props) {
  return (
    <div>
      <h3>{imageCap[captionIndex]}</h3>
    </div>
  );
}
