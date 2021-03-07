export interface Folder {
  Foldername: string,
  Files: File[],
  Folders: Folder[]
}
