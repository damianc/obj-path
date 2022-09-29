function ObjPath(obj, path) {
  return path.split(/\.|\[(\d+)\]/).filter(Boolean).reduce((acc, curr) => {
    return acc[curr];
  }, obj);
}