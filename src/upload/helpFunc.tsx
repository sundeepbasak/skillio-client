interface IFile {
  name: string;
  size: number;
  type: string;
  lastModified: number;
  lastModifiedDate: Date;
  webkitRelativePath: string;
}

import { useEffect, useState } from "react";

let toBeUploaded = [] as IFile[];
let doneUploading = [] as IFile[];

export const UploadFileQueue = (data: IFile[]) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (toBeUploaded.length > 0) {
      toBeUploaded.forEach((file) => {
        console.log(file, "file");
        // upload(file);
      });
    }
  }, [toBeUploaded]);

  function enqueue(data: IFile) {
    return toBeUploaded.push(data);
  }

  for (let i = 0; i < data.length; i++) {
    setTimeout(() => {
      enqueue(data[i]);
    }, 1000);
  }

  // function dequeue() {
  //   return toBeUploaded.shift();
  // }
};
