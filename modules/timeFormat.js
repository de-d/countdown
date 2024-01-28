export function getYearSuffix(years) {
    if (years % 10 === 1 && years !== 11) {
      return ' год';
    } else if ([2, 3, 4].includes(years % 10) && ![12, 13, 14].includes(years % 100)) {
      return ' года';
    } else {
      return ' лет';
    }
}
export function getDaySuffix(days) {
    if (days % 10 === 1 && days !== 11) {
      return ' день';
    } else if ([2, 3, 4].includes(days % 10) && ![12, 13, 14].includes(days % 100)) {
      return ' дня';
    } else {
      return ' дней';
    }
}

export function getHourSuffix(hours) {
    if (hours % 10 === 1 && hours !== 11) {
      return ' час';
    } else if ([2, 3, 4].includes(hours % 10) && ![12, 13, 14].includes(hours % 100)) {
      return ' часа';
    } else {
      return ' часов';
    }
}