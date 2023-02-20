export async function getPackages() {
  try {
    const url = "https://my.api.mockaroo.com/insta-orders.json?key=e49e6840";
    const response = await fetch(url);
    if (!response.ok) {
      throw response;
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
}

export function loadPackages(setError, setLoading, setPackages) {
  setLoading(true);
  async function init() {
    try {
      const response = await getPackages();
      setPackages(response);
    } catch (error) {
      setError(true);
    } finally {
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }
  init();
}
