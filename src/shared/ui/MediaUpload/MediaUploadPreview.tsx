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
    <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
      {files?.map((file, index) => (
        <div key={index} className="group relative">
          <MediaPreviewItem file={file} previewUrl={previewUrls[index]} />
          <button
            onClick={() => onRemoveFile(index)}
            className="absolute -top-2 -right-2 rounded-full bg-red-500 p-1 text-white opacity-0 transition-opacity group-hover:opacity-100"
            aria-label={`${file.name} 삭제`}
          >
            <Icon name="close" size={16} />
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
    <div className="relative overflow-hidden rounded-xl border border-gray-200">
      {file.type.startsWith('video/') ? (
        <video src={previewUrl} controls className="h-32 w-full object-cover" />
      ) : (
        <img src={previewUrl} alt={`미리보기 ${file.name}`} className="h-32 w-full object-cover" />
      )}
    </div>
  );
}
