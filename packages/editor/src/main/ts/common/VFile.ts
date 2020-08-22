export type VFile = {

  isDirectory: boolean
  name: string
  path: string
}

export const createVFile = (
  isDirectory: boolean,
  name: string,
  path: string
): VFile => {
  return {
    isDirectory: isDirectory, name: name, path: path
  }
};