export function formatDate(date: number): string {
  const today = new Date(date);

  const yyyy = today.getFullYear();
  const mm = today.getMonth() + 1;
  const dd = today.getDate();

  let mmStr = '';
  let ddStr = '';

  if (dd < 10) {
    ddStr = '0' + dd;
  } else {
    ddStr = `${dd}`;
  }
  if (mm < 10) {
    mmStr = '0' + mm;
  } else {
    mmStr = `${mm}`;
  }

  const formattedToday = ddStr + '/' + mmStr + '/' + yyyy;

  return formattedToday;
}
