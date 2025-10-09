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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
      {files?.map((file, index) => (
        <div key={index} className="relative">
          <MediaPreviewItem file={file} previewUrl={previewUrls[index]} />
          <button
            onClick={() => onRemoveFile(index)}
            className="absolute top-2 right-2 rounded-full bg-white p-1"
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
    <div className="relative rounded-xl border border-gray-200">
      {file.type.startsWith('video/') ? (
        <video src={previewUrl} controls className="h-[200px] w-full object-scale-down" />
      ) : (
        <img
          src={previewUrl}
          alt={`미리보기 ${file.name}`}
          className="h-[200px] w-full object-scale-down"
        />
      )}
    </div>
  );
}
