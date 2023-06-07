interface IFile {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
}

let toBeUploaded = [] as IFile[];
let doneUploading = [] as IFile[];

export const UploadFileQueue = (data: IFile[]) => {
  function enqueue(data: IFile) {
    return toBeUploaded.push(data);
  }

  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      enqueue(data[i]);
    }, 1000);
  }

  toBeUploaded.forEach((item: any) => {
    const buffer = new ArrayBuffer(item);
    console.log(buffer.toString());
  });
};
