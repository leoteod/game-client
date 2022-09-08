export function useFormat() {
  function numberWithCommas(value: number) {
    if (!value) return 0;
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

  return { numberWithCommas };
}
