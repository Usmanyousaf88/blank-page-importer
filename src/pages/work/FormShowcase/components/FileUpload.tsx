import { useState } from 'react';
import { Label } from '../../../../components/ui/label';
import { Button } from '../../../../components/ui/Button/button';
import { Progress } from '../../../../components/ui/progress';
import { Badge } from '../../../../components/ui/badge';
import { Upload, X, File, Image, FileText, Film } from 'lucide-react';
import { cn } from '../../../../lib/utils';

interface FileWithPreview extends File {
  preview?: string;
}

const FileUpload = () => {
  const [files, setFiles] = useState<FileWithPreview[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true);
    } else if (e.type === 'dragleave') {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    handleFiles(droppedFiles);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = Array.from(e.target.files);
      handleFiles(selectedFiles);
    }
  };

  const handleFiles = (newFiles: File[]) => {
    const processedFiles = newFiles.map(file => {
      if (file.type.startsWith('image/')) {
        return Object.assign(file, {
          preview: URL.createObjectURL(file)
        });
      }
      return file;
    });
    
    setFiles(prev => [...prev, ...processedFiles]);
    simulateUpload();
  };

  const removeFile = (index: number) => {
    setFiles(prev => {
      const newFiles = [...prev];
      if (newFiles[index].preview) {
        URL.revokeObjectURL(newFiles[index].preview!);
      }
      newFiles.splice(index, 1);
      return newFiles;
    });
  };

  const simulateUpload = () => {
    setUploadProgress(0);
    const interval = setInterval(() => {
      setUploadProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 10;
      });
    }, 500);
  };

  const getFileIcon = (file: File) => {
    if (file.type.startsWith('image/')) return <Image className="h-5 w-5" />;
    if (file.type.startsWith('video/')) return <Film className="h-5 w-5" />;
    if (file.type.startsWith('text/')) return <FileText className="h-5 w-5" />;
    return <File className="h-5 w-5" />;
  };

  return (
    <section className="space-y-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">File Upload</h2>
        <p className="text-muted-foreground mb-6">
          Drag and drop file upload with preview and progress.
        </p>
      </div>

      <div
        className={cn(
          'relative rounded-lg border-2 border-dashed p-8 text-center',
          dragActive
            ? 'border-primary bg-primary/5'
            : 'border-border hover:border-primary/50'
        )}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <input
          type="file"
          multiple
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          onChange={handleChange}
        />
        <div className="space-y-4">
          <div className="flex justify-center">
            <Upload className="h-10 w-10 text-muted-foreground" />
          </div>
          <div className="space-y-2">
            <p className="text-lg font-medium">
              Drop files here or click to upload
            </p>
            <p className="text-sm text-muted-foreground">
              Support for images, videos, and documents
            </p>
          </div>
        </div>
      </div>

      {/* File List */}
      {files.length > 0 && (
        <div className="space-y-4">
          <Label>Uploaded Files</Label>
          <div className="space-y-2">
            {files.map((file, index) => (
              <div
                key={index}
                className="flex items-center justify-between p-3 rounded-lg border bg-card"
              >
                <div className="flex items-center gap-3">
                  {file.preview ? (
                    <img
                      src={file.preview}
                      alt={file.name}
                      className="h-10 w-10 rounded object-cover"
                    />
                  ) : (
                    getFileIcon(file)
                  )}
                  <div className="space-y-1">
                    <p className="text-sm font-medium leading-none">{file.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {(file.size / 1024 / 1024).toFixed(2)} MB
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="secondary">
                    {uploadProgress === 100 ? 'Uploaded' : 'Uploading...'}
                  </Badge>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => removeFile(index)}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
          {uploadProgress < 100 && (
            <div className="space-y-2">
              <Progress value={uploadProgress} />
              <p className="text-sm text-muted-foreground text-right">
                {uploadProgress}%
              </p>
            </div>
          )}
        </div>
      )}
    </section>
  );
};

export default FileUpload;
