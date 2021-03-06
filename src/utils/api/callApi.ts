export async function callApi(method: string, url: string, path: string, data?: any) {
  const res = await fetch(`${url}${path}`, {
    method,
    headers: {
      Accept: 'application/json'
    },
    body: JSON.stringify(data)
  });
  return await res.json();
}
