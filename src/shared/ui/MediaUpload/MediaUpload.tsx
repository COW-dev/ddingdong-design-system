import { ComponentProps, useId, useState } from 'react';

import { MediaPreview } from './MediaUploadPreview';

import { Flex } from '../Flex';
import { Icon } from '../Icon';
import { Body1, Caption1 } from '../Typography';

export type Props = {
  /**
   * id of the file input.
   * @default random string value
   */
  id?: string;
  /**
   * label text of the file input
   * @default '파일을 업로드해주세요. (jpg, jpeg, png)'
   */
  label?: string;
  /**
   * description text of the file input
   * @default '* 파일은 5GB까지 업로드 가능합니다.'
   */
  description?: string;
  /**
   * element displayed above the file input
   */
  topAffix?: React.ReactNode;
  /**
   * callback when media file is uploaded.
   */
  onFileUpload?: (files: File[] | null) => void;
  /**
   * maximum file size in GB.
   * @default 5
   */
  maxSize?: number;
  /**
   * accepted media file formats.
   * @default ['image/*']
   */
  acceptedFormats?: string[];
  /**
   * allow multiple file selection
   * @default false
   */
  multiple?: boolean;
  /**
   * initial preview urls for edit mode (e.g., existing uploaded image urls)
   */
  initialPreviewUrls?: string[];
  /**
   * initial files for edit mode (if available).
   */
  initialFiles?: File[];
} & Omit<ComponentProps<'input'>, 'id'>;

const GB = 1024 * 1024 * 1024;

export function MediaUpload({
  topAffix,
  onFileUpload,
  id,
  label = '파일을 업로드해주세요. (jpg, jpeg, png)',
  description = '* 파일은 5GB까지 업로드 가능합니다.',
  maxSize = 5,
  acceptedFormats = ['image/*'],
  multiple = false,
  initialPreviewUrls,
  initialFiles,
  ...props
}: Props) {
  const generatedId = useId();
  const inputId = id || generatedId;

  const [selectedFiles, setSelectedFiles] = useState<File[]>(initialFiles || []);
  const [previewUrls, setPreviewUrls] = useState<string[]>(initialPreviewUrls || []);
  const isSelected = selectedFiles.length > 0;

  const handleReset = () => {
    previewUrls.forEach((url) => {
      if (url.startsWith('blob:')) URL.revokeObjectURL(url);
    });
    setSelectedFiles([]);
    setPreviewUrls([]);
    onFileUpload?.(null);
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    if (files.length === 0) {
      return handleReset();
    }
    const oversizedFiles = files.filter((file) => file.size / GB > maxSize);
    if (oversizedFiles.length > 0) {
      throw new Error(`${maxSize}GB 이하의 파일로 등록해주세요.`);
    }

    const validatedFiles = multiple ? files : [files[0]];
    setSelectedFiles(validatedFiles);
    const urls = validatedFiles.map((file) => URL.createObjectURL(file));
    setPreviewUrls(urls);
    onFileUpload?.(validatedFiles);
  };

  const handleRemoveFile = (index: number) => {
    const urlToRemove = previewUrls[index];
    if (urlToRemove?.startsWith('blob:')) {
      URL.revokeObjectURL(urlToRemove);
    }
    const newFiles = selectedFiles.filter((_, i) => i !== index);
    const newUrls = previewUrls.filter((_, i) => i !== index);

    setSelectedFiles(newFiles);
    setPreviewUrls(newUrls);
    onFileUpload?.(newFiles.length > 0 ? newFiles : null);
  };

  return (
    <div className="max-h-[500px] w-full overflow-auto">
      <Flex justifyContent="between">
        <Body1 className="text-gray-400">{topAffix}</Body1>
        <RefreshButton handleReset={handleReset} isSelected={isSelected} />
      </Flex>
      {!isSelected ? (
        <UploadBox id={inputId} label={label} description={description} />
      ) : (
        <MediaPreview
          files={selectedFiles}
          previewUrls={previewUrls}
          onRemoveFile={handleRemoveFile}
          multiple={multiple}
        />
      )}
      <input
        id={inputId}
        name="media file"
        type="file"
        accept={acceptedFormats.join(',')}
        multiple={multiple}
        className="hidden"
        onChange={handleFileChange}
        {...props}
      />
    </div>
  );
}

type UploadBoxProps = {
  id: string;
  label: string;
  description: string;
};

function UploadBox({ id, label, description }: UploadBoxProps) {
  return (
    <label
      htmlFor={id}
      className="block w-full cursor-pointer rounded-xl border border-gray-200 bg-gray-50 px-4 py-8 hover:bg-gray-100"
    >
      <Flex dir="col" alignItems="center" gap={4} className="text-gray-400">
        <Icon name="upload" size={40} />
        <Body1 weight="semibold">{label}</Body1>
        <Caption1 className="text-gray-300" weight="normal">
          {description}
        </Caption1>
      </Flex>
    </label>
  );
}

type RefreshButtonProp = {
  handleReset: () => void;
  isSelected: boolean;
};
function RefreshButton({ handleReset, isSelected }: RefreshButtonProp) {
  return (
    <Flex
      as="button"
      onClick={(e) => {
        e.stopPropagation();
        if (isSelected) handleReset();
      }}
      alignItems="center"
      className={`text-primary-300 justify-end ${isSelected ? 'cursor-pointer' : 'cursor-not-allowed opacity-50'}`}
      aria-label="초기화"
    >
      <Icon name="refresh" size={24} color="primary" />
      <Body1>초기화</Body1>
    </Flex>
  );
}
