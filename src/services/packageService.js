export async function getPackages() {
  try {
    const url = process.env.REACT_APP_DATA_API;
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
      }, 1000);
    }
  }
  init();
}
