export default function sortData(value){
  return value.sort(function(a, b){
    const aa = a.date.split('/').reverse().join(),
        bb = b.date.split('/').reverse().join();
    return aa < bb ? -1 : (aa > bb ? 1 : 0);
  });
}