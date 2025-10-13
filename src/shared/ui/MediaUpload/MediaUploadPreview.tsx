import { Flex } from '../Flex';
import { Icon } from '../Icon';

type Props = {
  files: File[];
  previewUrls: string[];
  onRemoveFile: (index: number) => void;
  multiple: boolean;
};

export function MediaPreview({ files, previewUrls, onRemoveFile, multiple }: Props) {
  if (!multiple) {
    return <MediaPreviewItem file={files[0]} previewUrl={previewUrls[0]} />;
  }
  return (
    <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-4">
      {files?.map((file, index) => (
        <div key={index} className="relative aspect-square">
          <MediaPreviewItem file={file} previewUrl={previewUrls[index]} />
          <button
            type="button"
            onClick={() => onRemoveFile(index)}
            className="absolute top-2 right-2 cursor-pointer rounded-full bg-white/75 p-1"
          >
            <Icon name="close" size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

type MediaPreviewItemProps = {
  file: File;
  previewUrl: string;
};
function MediaPreviewItem({ file, previewUrl }: MediaPreviewItemProps) {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      className="relative h-full w-full rounded-xl border border-gray-200 bg-gray-50"
    >
      {file.type.startsWith('video/') ? (
        <video
          src={previewUrl}
          controls
          className="h-full max-h-[500px] w-full max-w-[500px] object-contain"
        />
      ) : (
        <img
          src={previewUrl}
          alt={`미리보기 ${file.name}`}
          className="h-full max-h-[500px] w-full max-w-[500px] object-contain"
        />
      )}
    </Flex>
  );
}
