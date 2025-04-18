export const SortValue = (data: any) => {
  const newest = data.sort((a: any, b: any) => {
    return new Date(b.createdAt).getDate() - new Date(a.createdAt).getDate();
  });
  const oldest = data.sort((a: any, b: any) => {
    return new Date(a.createdAt).getDate() - new Date(b.createdAt).getDate();
  });
  return { newest, oldest };
};
